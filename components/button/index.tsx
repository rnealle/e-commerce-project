import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  variant?: "light" | "dark" | "";
  outline?: boolean;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  primary,
  secondary,
  disabled = false,
  variant,
  outline = false,
  className,
  children,
  href,
  type = "button",
  "aria-label": ariaLabel,
  ...props
}) => {
  const combinedClasses = determineClasses(
    primary,
    secondary,
    disabled,
    variant,
    outline,
    className,
  );

  const linkProps = {
    onClick,
    disabled,
    type,
  };

  if (href) {
    return (
      <div className={clsx("relative", combinedClasses)}>
        {children}
        <a
          href={href}
          className="absolute inset-0"
          aria-label={ariaLabel}
          {...linkProps}
        ></a>
      </div>
    );
  }

  return (
    <button className={combinedClasses} {...linkProps} {...props}>
      {children}
    </button>
  );
};

const determineClasses = (
  primary?: boolean,
  secondary?: boolean,
  disabled?: boolean,
  variant?: "light" | "dark" | "",
  outline?: boolean,
  classNameProps = "",
) => {
  const baseClasses =
    "flex px-4 h-12 w-full border rounded-full items-center justify-center hover:text-uppercase";

  if (disabled) {
    return getDisabledClasses(baseClasses, classNameProps);
  }
  if (primary) {
    return getPrimaryClasses(baseClasses, classNameProps);
  }
  if (secondary) {
    return getSecondaryClasses(baseClasses, variant, outline, classNameProps);
  }

  return `${baseClasses} ${classNameProps}`;
};

const getDisabledClasses = (baseClasses: string, classNameProps: string) => {
  return `${baseClasses} disabled:bg-[#A3A3A3] text-[#726a63] cursor-not-allowed ${classNameProps}`;
};

const getPrimaryClasses = (baseClasses: string, classNameProps: string) => {
  return `${baseClasses} bg-black hover:opacity-75 text-white ${classNameProps}`;
};

const getSecondaryClasses = (
  baseClasses: string,
  variant?: "light" | "dark" | "",
  outline?: boolean,
  classNameProps?: string,
) => {
  if (variant === "dark") {
    return getDarkSecondaryClasses(baseClasses, outline, classNameProps);
  }
  if (variant === "light") {
    return getLightSecondaryClasses(baseClasses, outline, classNameProps);
  }
  return `${baseClasses} bg-[#726a63] text-[#262626] ${classNameProps}`;
};

const getDarkSecondaryClasses = (
  baseClasses: string,
  outline?: boolean,
  classNameProps?: string,
) => {
  if (outline) {
    return `${baseClasses} border border-[#726a63] text-[#726a63] hover:border-[#1d1b1b] hover:text-[#1d1b1b] ${classNameProps}`;
  }
  return `${baseClasses} bg-black text-white hover:bg-[#262626] ${classNameProps}`;
};

const getLightSecondaryClasses = (
  baseClasses: string,
  outline?: boolean,
  classNameProps?: string,
) => {
  if (outline) {
    return `${baseClasses} border border-white text-white hover:border-[#1d1b1b] hover:text-[#1d1b1b] ${classNameProps}`;
  }
  return `${baseClasses} bg-white text-black hover:bg-[#FAFAFA] hover:text-opacity-80 ${classNameProps}`;
};

export default Button;
