"use client";

import { useButton } from "react-aria";
import { ReactNode, useRef } from "react";
import classNames from "classnames";

type Colors =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "dark"
  | "purple";

// Mapping of "primary" colour to classes
const normalColors: { [K in Colors]: string } = {
  primary: `text-primary hover:bg-primary-4 hover:text-light`,
  success: `text-success hover:bg-success-4 hover:text-light`,
  warning: `text-warning hover:bg-warning-4 hover:text-light`,
  danger: `text-danger hover:bg-danger-4 hover:text-light`,
  light: `text-dark hover:bg-dark hover:text-light`,
  dark: `bg-dark text-light hover:bg-dark-4`,
  purple: `text-purple hover:bg-purple-4 hover:text-light`,
};
const invertedColors: { [K in Colors]: string } = {
  primary: `bg-primary-4 text-light hover:bg-primary`,
  success: `bg-success-4 text-light hover:bg-success`,
  warning: `bg-warning-4 text-light hover:bg-warning`,
  danger: `bg-danger-4 text-light hover:bg-danger`,
  light: `bg-light-4 text-light hover:bg-light hover:text-dark`,
  dark: `bg-dark-4 text-light hover:bg-dark`,
  purple: `bg-purple-4 text-light hover:bg-purple`,
};

const sizeClasses = {
  small: "px-2 py-1 text-sm shadow-none",
  medium: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-lg",
};

export default function Button<T extends "button" | "a">(
  props: {
    children: ReactNode;
    color?: Colors;
    isDisabled?: boolean;
    as?: T;
    inverted?: boolean;
    size?: "small" | "large";
  } & React.ComponentPropsWithoutRef<T>,
) {
  const {
    children,
    color,
    as,
    isDisabled,
    size,
    inverted,
    className,
    ...rest
  } = props;
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  // @ts-expect-error react-aria's typings don't handle `as` well
  const btn = useButton(props, ref);
  const Type = as ?? "button";
  return (
    <Type
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      ref={ref as any}
      {...rest}
      {...btn.buttonProps}
      disabled={isDisabled}
      className={classNames(
        `inline-flex items-center 
        rounded-md
        border border-transparent
        text-sm font-bold 
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}
        ${isDisabled ? "cursor-not-allowed opacity-50" : ""}
        active:opacity-85 active:shadow-lg`,
        inverted
          ? invertedColors[color ?? "primary"]
          : normalColors[color ?? "primary"],
        sizeClasses[size ?? "medium"],
        className,
      )}
    >
      {children}
    </Type>
  );
}