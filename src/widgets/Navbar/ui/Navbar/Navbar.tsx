import { classNames } from "shared";
import cls from './Navbar.module.scss';
import { AppLink } from "shared";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";


interface NavbarProps{
    className?: string;
}



export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {} , [className])}>
     <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/main"} className={cls.mainLink}>Главная</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>about</AppLink>
     </div>
    </div>
  );
};
