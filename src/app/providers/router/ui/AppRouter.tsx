import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';

const AppRouter = () => {
    const { t, i18n } = useTranslation();

    return (
        <Suspense fallback={<div>{t('загрузка')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <Suspense fallback={<div>{t('загрузка')}</div>}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        )}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
