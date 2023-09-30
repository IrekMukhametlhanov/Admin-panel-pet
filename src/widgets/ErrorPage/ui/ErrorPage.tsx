import React from 'react';
import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps{
className?: string;
}

export const ErrorPage = ({ className }:ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <h1>
                {t('Возникла ошибка')}
            </h1>
            <Button onClick={reloadPage}>{t('Обновите страницу')}</Button>
        </div>
    );
};
