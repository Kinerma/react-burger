import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import forgotStyle from './ForgotPassword.module.css'

export default function ForgotPassword() {
    return (
      <main className={forgotStyle.forgot}>
          <div className={forgotStyle.content}>
              <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
              <form className={forgotStyle.form}>
                  <EmailInput placeholder='Укажите e-mail' name='email' />
                  <Button htmlType='button' type='primary' size='medium'>Восстановить</Button>
              </form>
              <p className='text text_type_main-default'>Вспомнили пароль?
                  <Link to="/login" className={forgotStyle.link}>Войти</Link>
              </p>
          </div>
      </main>
    );
}