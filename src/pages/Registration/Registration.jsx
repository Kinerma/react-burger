import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import registrationStyle from './Registration.module.css'

export default function Registration() {
    return (
        <main className={registrationStyle.main}>
            <div className={registrationStyle.content}>
                <p className="text text_type_main-medium mb-6">Регистрация</p>
                <form className={registrationStyle.form}>
                    <Input value=''
                           onChange=''
                           placeholder='Имя'
                           type='text'
                           name='name'
                    />
                    <EmailInput value=''
                                onChange=''
                                name='email'
                    />
                    <PasswordInput value=''
                                   onChange=''
                                   name='password'
                    />
                    <Button htmlType='button'
                            type='primary'
                            size='medium'
                            onClick=''
                    >Зарегистрироваться</Button>
                </form>
                <p className="text text_type_main-default">Уже зарегистрированы?
                    <Link to='/login' className={registrationStyle.link}>Войти</Link>
                </p>
            </div>
        </main>
    );
}