import notFoundStyle from './NotFound.module.css'

export default function NotFound() {
    return (
        <p className={`text text_type_main-large ${notFoundStyle.text}`}>Такой страницы не существует</p>
    );
}