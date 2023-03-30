import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import loginStyle from './Login.module.css'
import {useState, ChangeEvent, FormEvent} from "react";
import {useDispatch} from "react-redux";
import useController from "../../hooks/useController";
import {assignUser} from "../../services/actions/userActions";

export default function Login() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const userController = useController()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setEmailChange = (evt:ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)
    const setPasswordChange = (evt:ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)
    const submit = (evt: FormEvent) => {
        evt.preventDefault()
        if (email && password) {
            userController.login(email, password).then(user => {
                dispatch(assignUser(user))
                navigation(-1)
            })
        }
    }

    return (
        <main className={loginStyle.main} onSubmit={submit}>
            <div className={loginStyle.content}>
                <p className='text text_type_main-medium mb-6'>Вход</p>
                <form className={loginStyle.form}>
                    <EmailInput value={email} onChange={setEmailChange} name={'Email'} />
                    <PasswordInput value={password} onChange={setPasswordChange} name={'Password'} />
                    <Button htmlType="submit" type="primary" size='medium'>Войти</Button>
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