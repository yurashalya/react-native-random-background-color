import { MAX_COLOR_VALUE } from "@/constants";

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * MAX_COLOR_VALUE)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};
