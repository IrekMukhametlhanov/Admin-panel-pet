import { classNames, AppLink } from 'shared';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps{
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/main" className={cls.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to="/about">about</AppLink>
        </div>
    </div>
);
