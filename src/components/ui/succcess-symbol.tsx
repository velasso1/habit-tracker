import { FC } from "react";
import { motion } from "framer-motion";
import { successSymbolVariant } from "../../utils/animation/motion-variants";

const SuccessSymbol: FC = () => {
  return (
    <>
      <motion.svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={successSymbolVariant}
        initial="hidden"
        animate="visible"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68ZM34 61.3252C49.0913 61.3252 61.3252 49.0913 61.3252 34C61.3252 18.9087 49.0913 6.67485 34 6.67485C18.9087 6.67485 6.67485 18.9087 6.67485 34C6.67485 49.0913 18.9087 61.3252 34 61.3252Z"
          fill="#24E938"
        />
        <path
          d="M19 35.1562C20.339 36.4885 24.6037 40.7317 27.4833 43.5968C28.2636 44.3731 29.524 44.3728 30.3043 43.5965L50 24"
          stroke="#24E938"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="100%"
        />
        <circle
          cx="34"
          cy="34"
          r="30"
          stroke="#24E938"
          strokeWidth="5"
          strokeDasharray="100%"
        />
      </motion.svg>
    </>
  );
};

export default SuccessSymbol;
