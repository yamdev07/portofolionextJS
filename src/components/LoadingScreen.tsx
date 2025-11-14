"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

// Generate an array of stars with pre-calculated properties
const generateStars = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1, // between 1 and 3 px
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2, // between 2 and 5 seconds
    initialOpacity: Math.random() * 0.5 + 0.3,
    glow: Math.random() > 0.7, // 30% of stars glow more
  }));
};

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const textTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { t } = useLanguage();

  // Generate stars only once with useMemo
  const stars = useMemo(() => generateStars(80), []);

  // Simple typewriter effect for "Initializing" only
  useEffect(() => {
    const loadingMessage = t.common.loading;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= loadingMessage.length) {
        setLoadingText(loadingMessage.substring(0, currentIndex));
        currentIndex++;
        textTimerRef.current = setTimeout(typeText, 100);

        if (currentIndex > loadingMessage.length) {
          setIsTypingComplete(true);
        }
      }
    };

    // Start typewriter effect
    typeText();

    return () => {
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    };
  }, [t.common.loading]);

  // Progress management with smooth acceleration
  useEffect(() => {
    // Fixed duration of 2 seconds for loading
    const duration = 2000;
    const startTime = performance.now();

    // Function to smoothly update progress with custom easing
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Custom easing curve for more natural loading feel
      const easedProgress =
        rawProgress < 0.2
          ? 3 * Math.pow(rawProgress, 2)
          : rawProgress > 0.8
          ? 1 - Math.pow(-2 * rawProgress + 2, 2) / 2
          : 0.3 + rawProgress * 0.7;

      const newProgress = Math.min(100, Math.round(easedProgress * 100));
      setProgress(newProgress);

      if (rawProgress < 1) {
        // Continue animation
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        // Ensure we reach 100% at the end
        setProgress(100);
      }
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden"
      >
        {/* Cosmic background with dynamic stars */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                star.glow ? "bg-blue-100" : "bg-white"
              }`}
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: star.glow
                  ? "0 0 8px 3px rgba(147, 197, 253, 0.9)"
                  : "0 0 2px 1px rgba(255, 255, 255, 0.4)",
              }}
              animate={{
                opacity: [
                  star.initialOpacity,
                  star.initialOpacity + 0.5,
                  star.initialOpacity,
                ],
                scale: star.glow ? [1, 1.5, 1] : [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: star.duration,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Abstract cosmic elements */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-indigo-900/20 to-transparent rounded-full blur-3xl"
          style={{ top: "20%", left: "15%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-tl from-purple-800/20 to-transparent rounded-full blur-3xl"
          style={{ bottom: "10%", right: "10%" }}
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="z-10 flex flex-col items-center max-w-md px-4">
          {/* Enhanced logo animation with layered elements */}
          <div className="relative mb-10">
            {/* Main cosmic sphere */}
            <motion.div
              className="w-32 h-32 rounded-full relative overflow-hidden"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{
                scale: [0.85, 1, 0.95, 1],
                opacity: 1,
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                opacity: { duration: 0.8 },
              }}
            >
              {/* Planet texture */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-700 via-indigo-600 to-blue-500"
                style={{
                  boxShadow:
                    "inset 0 -5px 20px 10px rgba(30, 20, 90, 0.8), 0 0 40px 5px rgba(120, 80, 220, 0.6)",
                }}
              ></div>

              {/* Atmospheric glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 via-indigo-400/10 to-transparent rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Surface details */}
              <div className="absolute left-[15%] top-[20%] w-[20%] h-[15%] bg-white/10 rounded-full"></div>
              <div className="absolute right-[25%] bottom-[30%] w-[15%] h-[25%] bg-white/10 rounded-full"></div>

              {/* Ring system */}
              <motion.div
                className="absolute w-[150%] h-[30%] bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ rotate: 30 }}
                animate={{ rotate: [30, 32, 28, 30] }}
                style={{ borderRadius: "50%" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute w-full h-full top-0 left-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center center" }}
            >
              {/* First moon */}
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-cyan-200"
                initial={{ translateX: 80 }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: "-3px",
                  marginLeft: "-3px",
                  boxShadow: "0 0 10px rgba(165, 243, 252, 0.8)",
                }}
              />
            </motion.div>

            {/* Independent orbiting element */}
            <motion.div
              className="absolute w-full h-full top-0 left-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center center" }}
            >
              {/* Second moon */}
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-purple-300"
                initial={{ translateX: 60 }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: "-2px",
                  marginLeft: "-2px",
                  boxShadow: "0 0 8px rgba(216, 180, 254, 0.7)",
                }}
              />
            </motion.div>
          </div>

          {/* Loading Title with text reveal animation */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Cosmic Portfolio
            </span>
          </motion.h2>

          {/* Loading text with simple typewriter effect - just "Initializing" */}
          <div className="h-6 mb-6 text-gray-300 font-mono min-h-[1.5rem] flex items-center justify-center">
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {loadingText}
              <span
                className={`inline-block ${
                  !isTypingComplete ? "animate-blink" : "opacity-0"
                }`}
              >
                _
              </span>
            </motion.div>
          </div>

          {/* Enhanced progress bar with animated gradient */}
          <div className="w-full max-w-xs h-2 bg-gray-800/80 rounded-full overflow-hidden mb-2 backdrop-blur-sm border border-gray-700/50">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(79, 70, 229, 0.8) 0%, rgba(147, 51, 234, 0.9) 50%, rgba(79, 70, 229, 0.8) 100%)",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 8px rgba(139, 92, 246, 0.5)",
                width: `${progress}%`,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Progress percentage with animated opacity */}
          <motion.div
            className="text-sm text-indigo-200 font-mono"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {progress}%
          </motion.div>
        </div>

        {/* Small particles floating across screen */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: "-5px",
            }}
            animate={{
              x: ["0vw", "100vw"],
              y: [0, Math.random() * 20 - 10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              delay: Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
