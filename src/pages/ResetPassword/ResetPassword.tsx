import {Input, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import resetStyle from './ResetPassword.module.css'
import useController from "../../hooks/useController";
import {useState, ChangeEvent, FormEvent} from "react";

export default function ResetPassword() {
    const location = useLocation()
    const navigation = useNavigate()
    const userController = useController()
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const setPasswordChange = (evt:ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)
    const setCodeChange = (evt:ChangeEvent<HTMLInputElement>) => setCode(evt.target.value)
    const submit = (evt:FormEvent) => {
        evt.preventDefault()
        if (password && code) {
            userController.resetAccept(password,code).then(() => navigation("/"))
        }
    }

    return (
        location.state?.from === "/forgot"
        ?
        <main className={resetStyle.main} onSubmit={submit}>
            <div className={resetStyle.content}>
                <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
                <form className={resetStyle.form}>
                    <PasswordInput value={password} onChange={setPasswordChange} placeholder='Введите новый пароль' name='password' />
                    <Input value={code} onChange={setCodeChange} placeholder='Введите код из письма' name='token' type='text' />
                    <Button htmlType='submit' type='primary' size='medium'>Сохранить</Button>
                </form>
                <p className="text text_type_main-default">Вспомнили пароль?
                    <Link to='/login' className={resetStyle.link}>Войти</Link>
                </p>
            </div>
        </main>
        :
        <Navigate to={"/"} />
    );
}