import React, { useState } from "react"
import cls from './Sidebar.module.scss';
import { classNames } from "shared";
import { ThemeSwitcher } from "widgets/Navbar";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";


interface SidebarProps{
className?: string;
}

 export const Sidebar = ({className}:SidebarProps) => {

  const [collapsed, setCollapsed] = useState(false);
 
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed} , [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
      <ThemeSwitcher className={'clas'}/>
      <LangSwitcher className={cls.lang}/>
      </div>

    </div>
  )
};

