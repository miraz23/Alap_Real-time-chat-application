import { useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

/**
 * @typedef {import('react').InputHTMLAttributes<HTMLInputElement>} InputHTMLProps
 * @typedef {InputHTMLProps & {
 *   label?: string,
 *   error?: string,
 *   icon?: import('react').ReactNode,
 *   visibilityToggle?: boolean
 * }} PasswordInputProps
 */

/**
 * PasswordInput component
 *
 * @param {PasswordInputProps} props
 * @returns {JSX.Element}
 */

export function PasswordInput({ className,  label,  error,  icon,  visibilityToggle = true,  ...props}) {
  const [showPassword, setShowPassword] = useState(false);

  const addStyle = "block w-full rounded-lg border border-gray-300 px-4 py-2";
  const errorStyle = "border-red-300";

  const addClass = twMerge(clsx(addStyle, error && errorStyle), className);

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={showPassword ? "text" : "password"}
          className={clsx(
            addClass,
            icon && "pl-10",
            visibilityToggle && "pr-10"
          )}
          {...props}
        />
        {visibilityToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IconEyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <IconEye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}