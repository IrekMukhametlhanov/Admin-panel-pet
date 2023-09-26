import React, { useState } from 'react';
import { classNames } from 'shared';
import { ThemeSwitcher } from 'widgets/Navbar';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps{
className?: string;
}

export const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle} type="button">toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher className="clas" />
                <LangSwitcher className={cls.lang} />
            </div>

        </div>
    );
};
