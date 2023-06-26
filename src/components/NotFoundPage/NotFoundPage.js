import {useNavigate} from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return (
        <main className="not-found">
            <p className="not-found__number">404</p>
            <p className="not-found__text">Страница не найдена</p>
            <button className="not-found__back" onClick={goBack}>Назад</button>
        </main>
    )
}

export default NotFoundPage;
