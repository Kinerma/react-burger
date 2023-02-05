import {Input, Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyle from './Profile.module'
import {NavLink, Route} from "react-router-dom";

export default function Profile() {
    return (
        <div>
            <nav>
                <NavLink to={}>Профиль</NavLink>
                <NavLink to={}>История заказов</NavLink>
                <NavLink to={}>Выход</NavLink>
                <p>В этом разделе вы можете изменить свои персональные данные</p>
            </nav>
            <Route>
                <form>
                    <Input value={} onChange={} />
                    <EmailInput value={} onChange={} />
                    <PasswordInput value={} onChange={} />
                    <div>
                        <button>Отмена</button>
                        <Button htmlType={}>Сохранить</Button>
                    </div>
                </form>
            </Route>
            <Route>
                <h1>История заказов</h1>
            </Route>
        </div>
    )
}