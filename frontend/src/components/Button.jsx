import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').ButtonHTMLAttributes<HTMLButtonElement>} ButtonHTMLProps
 * @typedef {ButtonHTMLProps & {
 *   variant?: 'filled' | 'outline',
 *   size?: 'sm' | 'md' | 'lg',
 * }} ButtonProps
 */

/**
 * Button component
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */

export function Button({ variant = "filled", size = "sm", className, children, ...props}) {
  const addStyle = "w-full inline-flex items-center justify-center rounded-lg font-medium shadow-sm transition-all duration-500 ease-in-out hover:opacity-90 cursor-pointer";
  const variants = {
    filled: "text-white bg-gradient-to-r from-fuchsia-500 to-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const addClass = twMerge( clsx(addStyle, variants[variant], sizes[size]),  className );

  return (
    <button className={addClass} {...props}>
      {children}
    </button>
  );
}