import {Input, Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyle from './Profile.module.css'
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import useController from "../../hooks/useController";
import {logoutUser} from "../../services/actions/userActions";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/UseAppDispatch";

export default function Profile() {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const userController = useController()
    const [initialInform, setInitialInform] = useState<{name: string, email: string} | null>(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setNameChange = (evt:ChangeEvent<HTMLInputElement>) => setName(evt.target.value)
    const setEmailChange = (evt:ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)
    const setPasswordChange = (evt:ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)
    const logout = () => userController.logout().then(() => dispatch(logoutUser())).then(() => navigation('/login'))
    const editUserData = initialInform === null ? false : initialInform?.name !== name || initialInform?.email !== email || password !== ''
    const resetUser = () => {
        if (initialInform) {
            setName(initialInform.name)
            setEmail(initialInform.email)
        }
        setPassword('')
    }
    const submit = (evt:FormEvent) => {
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
                <NavLink className={ ({isActive}) => `text text_type_main-default ${isActive ? profileStyle.link_active : ''} ${profileStyle.link}`} replace={true} to={'/profile'}>Профиль</NavLink>
                <NavLink className={ ({isActive}) => `text text_type_main-default ${isActive ? profileStyle.link_active : ''} ${profileStyle.link}`} replace={true} to={'/profile/orders'}>История заказов</NavLink>
                <NavLink className={ ({isActive}) => `text text_type_main-default ${isActive ? profileStyle.link_active : ''} ${profileStyle.link}`} onClick={logout} to={'/'}>Выход</NavLink>
                <p className={`text text_type_main-default text_color_inactive ${profileStyle.text}`}>В этом разделе вы можете изменить свои персональные данные</p>
            </nav>
            {location.pathname === '/profile' ?
                <form className={profileStyle.form} onSubmit={submit} onReset={resetUser}>
                    <Input value={name} onChange={setNameChange} type='text' />
                    <EmailInput value={email} onChange={setEmailChange} />
                    <PasswordInput value={password} onChange={setPasswordChange} />
                    {editUserData
                        &&
                        <div className={profileStyle.buttons}>
                        <Button type='primary' size='medium' htmlType={'reset'}>Отмена</Button>
                        <Button type='primary' size='medium' htmlType={'submit'}>Сохранить</Button>
                    </div>}
                </form>
            :
                <Outlet />
            }
        </div>
    )
}