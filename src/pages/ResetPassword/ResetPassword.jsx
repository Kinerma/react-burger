import {Input, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import resetStyle from './ResetPassword.module.css'

export default function ResetPassword() {
    return (
        <main className={resetStyle.main}>
            <div className={resetStyle.content}>
                <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
                <form className={resetStyle.form}>
                    <PasswordInput placeholder='Введите новый пароль' name='password' />
                    <Input placeholder='Введите код из письма' name='token' type='text' />
                    <Button htmlType='button' type='primary' size='medium'>Сохранить</Button>
                </form>
                <p className="text text_type_main-default">Вспомнили пароль?
                    <Link to='/login' className={resetStyle.link}>Войти</Link>
                </p>
            </div>
        </main>
    );
}