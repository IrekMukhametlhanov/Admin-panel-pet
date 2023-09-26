import React, { useState } from 'react';
import { classNames } from 'shared';
import { ThemeSwitcher } from 'widgets/Navbar';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps{
className?: string;
}

export const Sidebar = ({ className }:SidebarProps) => {
    const { t, i18n } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle} type="button">{t('сдвинуть')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher className="clas" />
                <LangSwitcher className={cls.lang} />
            </div>

        </div>
    );
};
