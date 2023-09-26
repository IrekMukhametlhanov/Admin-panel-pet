import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.button,
                { [cls[theme]]: true },
                [className],
            )}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {' '}
            {children}
            {' '}

        </button>
    );
};