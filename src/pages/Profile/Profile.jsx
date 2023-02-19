import {Input, Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyle from './Profile.module.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
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
            userController.updateProfile(email, password, name).then(user => {
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
        <div className={profileStyle.content}>
            <nav className={profileStyle.nav}>
                <NavLink className={`text_color_primary ${profileStyle.link}`} replace={true} to={'/profile'}>Профиль</NavLink>
                <NavLink className={`text_color_inactive ${profileStyle.link}`} replace={true} to={'order-feed'}>История заказов</NavLink>
                <NavLink className={`text_color_inactive ${profileStyle.link}`} onClick={logout} to={'/'}>Выход</NavLink>
                <p className={`text text_type_main-default text_color_inactive ${profileStyle.text}`}>В этом разделе вы можете изменить свои персональные данные</p>
            </nav>
            {location.pathname === '/profile' ?
                <form className={profileStyle.form} onSubmit={submit} onReset={resetUser}>
                    <Input value={name} onChange={setNameChange} type='text' placeholder='Имя' />
                    <EmailInput value={email} onChange={setEmailChange} type='email' placeholder='Логин' />
                    <PasswordInput value={password} onChange={setPasswordChange} type='password' placeholder='Пароль' />
                    <div className={profileStyle.buttons}>
                        <Button type='primary' size='medium' htmlType={'reset'}>Отмена</Button>
                        <Button type='primary' size='medium' htmlType={'submit'}>Сохранить</Button>
                    </div>
                </form>
            :
                <h1>История заказов</h1>
            }
        </div>
    )
}