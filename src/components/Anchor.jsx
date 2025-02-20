import { Link, Links } from "react-router";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @typedef {import('react').AnchorHTMLAttributes<HTMLAnchorElement>} AnchorHTMLProps
 * @typedef {AnchorHTMLProps} AnchorProps
 */

/**
 * Anchor component
 *
 * @param {AnchorProps} props
 * @returns {JSX.Element}
 */

export function Anchor ({children, className, ...props}) {
  const addStyle = "bg-gradient-to-r from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:opacity-90 cursor-pointer"
  const addClass = twMerge( clsx(addStyle), className )

  return (
    <Link className={addClass} {...props}>
      {children}
    </Link>
  )
}