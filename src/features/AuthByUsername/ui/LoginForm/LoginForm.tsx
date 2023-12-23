import React, { FC } from "react";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.LoginForm}>
      <Input
        placeholder={t("введите логин")}
        className={cls.input}
        type="text"
        autoFocus
      />
      <Input
        placeholder={t("введите пароль")}
        className={cls.input}
        type="text"
      />
      <Button className={cls.btn}>{t("войти")}</Button>
    </div>
  );
};
