"use client";
import React, { useEffect, useRef } from "react";

interface ScrollableContainerProps {
  children: React.ReactNode;
  isMobile: boolean;
  className?: string;
}

/**
 * Un conteneur qui permet le défilement interne sur mobile,
 * mais qui empêche le défilement de propager sur desktop
 */
const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
  isMobile,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Sur desktop, empêcher la propagation des événements de défilement
    const handleWheelDesktop = (e: WheelEvent) => {
      if (!isMobile) {
        const isAtTop = container.scrollTop === 0;
        const isAtBottom =
          Math.abs(
            container.scrollHeight -
              container.scrollTop -
              container.clientHeight
          ) < 5;

        // Autoriser le défilement interne seulement si le contenu est plus grand que le conteneur
        // et qu'on n'est pas aux limites
        if (container.scrollHeight > container.clientHeight) {
          if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
            e.stopPropagation();
          } else {
            e.preventDefault();
          }
        } else {
          e.preventDefault();
        }
      }
    };

    // Permettre le défilement interne
    container.addEventListener("wheel", handleWheelDesktop, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheelDesktop);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className={`section-content w-full mx-auto h-full ${
        isMobile ? "overflow-y-auto" : "overflow-hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollableContainer;
