// src/star-background.d.ts
declare module "star-background" {
  import { FC } from "react";

  interface StarBackgroundProps {
    numStars?: number;
    radius?: number;
    rotationSpeedX?: number;
    rotationSpeedY?: number;
    color?: string;
    size?: number;
  }

  export const StarsCanvas: FC<StarBackgroundProps>;
}
