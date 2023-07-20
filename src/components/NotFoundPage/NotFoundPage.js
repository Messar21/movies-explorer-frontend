import {useNavigate} from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate();

    function goBack() {
            setInterval(() => navigate(-1), 200);
    }

    return (
        <main className="not-found">
                <h1 className="not-found__number">404</h1>
                <p className="not-found__text">Страница не найдена</p>
            <button className="not-found__back" type="button" onClick={goBack}>Назад</button>
        </main>
    )
}

export default NotFoundPage;
