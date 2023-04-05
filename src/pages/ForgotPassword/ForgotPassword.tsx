import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import forgotStyle from './ForgotPassword.module.css'
import {useState, ChangeEvent, FormEvent} from "react";
import useController from "../../hooks/useController";

export default function ForgotPassword() {

    const [email, setEmail] = useState('')
    const userController = useController()
    const navigation = useNavigate()
    const setEmailChange = (evt:ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)
    const submit = (evt:FormEvent) => {
        evt.preventDefault()
        if (email) {
            userController.reset(email).then(() => navigation("/reset-password", {state: {from: "/forgot"}}))
        }
    }

    return (
      <main className={forgotStyle.forgot} onSubmit={submit}>
          <div className={forgotStyle.content}>
              <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
              <form className={forgotStyle.form}>
                  <EmailInput value={email} onChange={setEmailChange} placeholder='Укажите e-mail' name='email' />
                  <Button htmlType='submit' type='primary' size='medium'>Восстановить</Button>
              </form>
              <p className='text text_type_main-default'>Вспомнили пароль?
                  <Link to="/login" className={forgotStyle.link}>Войти</Link>
              </p>
          </div>
      </main>
    );
}