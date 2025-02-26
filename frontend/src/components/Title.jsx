import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').HTMLAttributes<HTMLTitleElement>} TitleHTMLProps
 * @typedef {TitleHTMLProps & {
 *   type?: 1 | 2 | 3 | 4 | 5 | 6
 * }} TitleProps
 */

/**
 * Title component
 *
 * @param {TitleProps} props
 * @returns {JSX.Element}
 */
export function Title({ type = 1, className, children, ...props }) {
  const addStyle = "font-bold text-gray-900";
  const sizes = {
    1: "text-4xl md:text-5xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };
  const addClass = twMerge(clsx(addStyle, sizes[type]), className);
  const Component = `h${type}`;

  return (
    <Component className={addClass} {...props}>
      {children}
    </Component>
  );
}