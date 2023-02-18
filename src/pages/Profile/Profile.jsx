import {Input, Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyle from './Profile.module'
import {NavLink, Route, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import useController from "../../hooks/useController";
import {logoutUser} from "../../services/actions/userActions";
import {useEffect, useState} from "react";

export default function Profile() {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const userController = useController()
    const [initialInform, setInitialInform] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setNameChange = evt => setName(evt.target.value)
    const setEmailChange = evt => setEmail(evt.target.value)
    const setPasswordChange = evt => setPassword(evt.target.value)
    const logout = () => userController.logout().then(() => dispatch(logoutUser())).then(() => navigation('/login'))
    const editUserData = initialInform === '' ? false : initialInform?.name !== name || initialInform?.email !== email || password !== ''
    const resetUser = () => {
        setName(initialInform.name)
        setEmail(initialInform.email)
        setPassword('')
    }
    const submit = (evt) => {
        evt.preventDefault()
        if (editUserData) {
            userController.updateProfile(name, email, password).then(user => {
                setInitialInform(user)
            })
                .then(() => resetUser())
        }
    }
    useEffect(() => {
        if (initialInform) {
            setName(initialInform.name)
            setEmail(initialInform.email)
        }
    }, [initialInform])
    useEffect(() => {
        userController.getUser()
            .then(user => setInitialInform(user))
    }, [])

    return (
        <div>
            <nav>
                <NavLink replace={true} to={'/profile'}>Профиль</NavLink>
                <NavLink replace={true} to={'order-feed'}>История заказов</NavLink>
                <NavLink onClick={logout} to={'/'}>Выход</NavLink>
                <p>В этом разделе вы можете изменить свои персональные данные</p>
            </nav>
            {location.pathname === '/profile' ?
                <form onSubmit={submit} onReset={resetUser}>
                    <Input value={name} onChange={setNameChange} type='text' placeholder='имя' />
                    <EmailInput value={email} onChange={setEmailChange} type='email' placeholder='email' />
                    <PasswordInput value={password} onChange={setPasswordChange} type='password' placeholder='пароль' />
                    <div>
                        <Button htmlType={'reset'}>Отмена</Button>
                        <Button htmlType={'submit'}>Сохранить</Button>
                    </div>
                </form>
            :
                <h1>История заказов</h1>
            }
        </div>
    )
}