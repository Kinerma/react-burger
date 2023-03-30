import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import registrationStyle from './Registration.module.css'
import {useDispatch} from "react-redux";
import useController from "../../hooks/useController";
import {useState, ChangeEvent, FormEvent} from "react";
import {assignUser} from "../../services/actions/userActions";

export default function Registration() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const userController = useController()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setNameChange = (evt:ChangeEvent<HTMLInputElement>) => setName(evt.target.value)
    const setEmailChange = (evt:ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)
    const setPasswordChange = (evt:ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)
    const submit = (evt:FormEvent) => {
        evt.preventDefault()
        if (name && email && password) {
            userController.registration(name, email, password).then(user => {
                dispatch(assignUser(user))
                navigation(-1)
            })
        }
    }

    return (
        <main className={registrationStyle.main}>
            <div className={registrationStyle.content}>
                <p className="text text_type_main-medium mb-6">Регистрация</p>
                <form className={registrationStyle.form} onSubmit={submit}>
                    <Input value={name}
                           onChange={setNameChange}
                           placeholder='Имя'
                           type='text'
                           name='name'
                    />
                    <EmailInput value={email}
                                onChange={setEmailChange}
                                name='email'
                    />
                    <PasswordInput value={password}
                                   onChange={setPasswordChange}
                                   name='password'
                    />
                    <Button htmlType='submit'
                            type='primary'
                            size='medium'
                    >Зарегистрироваться</Button>
                </form>
                <p className="text text_type_main-default">Уже зарегистрированы?
                    <Link to='/login' className={registrationStyle.link}>Войти</Link>
                </p>
            </div>
        </main>
    );
}