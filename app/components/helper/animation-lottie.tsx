"use client";

import dynamic from "next/dynamic";
import { JSX } from "react/jsx-runtime";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

interface AnimationLottieProps {
  animationPath: object;
}

const AnimationLottie = ({
  animationPath,
}: AnimationLottieProps): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;