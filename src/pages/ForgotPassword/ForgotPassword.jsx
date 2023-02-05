import {Input, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import forgotStyle from './ForgotPassword.module.css'

export default function ForgotPassword() {
    return (
        <main className={forgotStyle.main}>
            <div className={forgotStyle.content}>
                <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
                <form className={forgotStyle.form}>
                    <PasswordInput placeholder='Введите новый пароль' name='password' />
                    <Input placeholder='Введите код из письма' name='token' type='text' />
                    <Button htmlType='button' type='primary' size='medium'>Сохранить</Button>
                </form>
                <p className="text text_type_main-default">Вспомнили пароль?
                    <Link to='/login' className={forgotStyle.link}>Войти</Link>
                </p>
            </div>
        </main>
    );
}