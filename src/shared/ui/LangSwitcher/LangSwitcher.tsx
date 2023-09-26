import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps{
className?: string;
}

export const LangSwitcher = ({ className }:LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('язык')}
        </Button>
    );
};
