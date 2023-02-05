import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import resetStyle from './ResetPassword.module.css'

export default function ResetPassword() {
    return (
      <main>
          <div>
              <p>Восстановление пароля</p>
              <form>
                  <EmailInput placeholder='Укажите e-mail' />
                  <Button htmlType='button' type='primary' size='medium'>Восстановить</Button>
              </form>
              <p>Вспомнили пароль?
                  <Link to="/login">Войти</Link>
              </p>
          </div>
      </main>
    );
}