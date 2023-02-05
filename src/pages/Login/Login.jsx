import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import loginStyle from './Login.module.css'

export default function Login() {
    return (
        <main className={loginStyle.main}>
            <div className={loginStyle.content}>
                <p className='text text_type_main-medium mb-6'>Вход</p>
                <form className={loginStyle.form}>
                    <EmailInput />
                    <PasswordInput />
                    <Button htmlType="button" type="primary" size='medium'>Войти</Button>
                </form>
                <div className={loginStyle.registration}>
                    <p className='text text_type_main-default'>Вы - новый пользователь?
                        <Link className={loginStyle.register} to='/registration'>Зарегистрироваться</Link>
                    </p>
                    <p className='text text_type_main-default'>Забыли пароль?
                        <Link className={loginStyle.register} to='/forgot-password'>Восстановить пароль</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}