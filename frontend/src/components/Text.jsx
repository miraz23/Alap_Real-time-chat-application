import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').HTMLAttributes<HTMLParagraphElement>} TextHTMLProps
 * @typedef {TextHTMLProps} TextProps
 */

/**
 * Text component
 *
 * @param {TextProps} props
 * @returns {JSX.Element}
 */
export function Text({ className, children, ...props }) {
  const addStyle = "text-gray-900";
  const addClass = twMerge(clsx(addStyle), className);

  return (
    <p className={addClass} {...props}>
      {children}
    </p>
  );
}