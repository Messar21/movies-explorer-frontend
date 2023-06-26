function Profile() {

    const userName = "Антон";
    const email = "pochta@yandex.ru";

    return (
        <main className="profile">
            <h2 className="profile__header">Привет, { userName }!</h2>
            <div className="profile__item">
                <p className="profile__label">Имя</p>
                <p className="profile__text">{ userName }</p>
            </div>
            <div className="profile__item">
                <p className="profile__label">E-mail</p>
                <p className="profile__text">{ email }</p>
            </div>
            <div className="profile__buttons">
                <button className="profile__button">Редактировать</button>
                <button className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
            </div>
        </main>
    )
}

export default Profile;
