import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  Primary = "primary",
  BACKGROUND = "background",
  BACKGROUND_Inverted = "backgroundInverted",
}

export enum ButtonSize {
  m = "size_m",
  l = "size_l",
  xl = "size_xl",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, size, square, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
