import { FC } from "react";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";

const StartPage: FC = () => {
  return (
    <div className="start">
      <div className="start__title">
        <p>Добро пожаловать!</p>
      </div>
      <div className="start__subtitle">
        <p>
          Это{" "}
          <span style={{ color: "#6E41CE" }}>персональное пространство</span>{" "}
          для отслеживания привычек
        </p>
      </div>
      <div className="start__subtitle">
        <p>
          Выбери <span style={{ color: "#6E41CE" }}>цели</span> и добавь их в
          список
        </p>
      </div>
      <div className="start__subtitle">
        <p>
          Отмечай выполненные задачи и{" "}
          <span style={{ color: "#6E41CE" }}>наблюдай за прогрессом</span>!
        </p>
      </div>
      <div className="start__button">
        <Button text={"Начать"} url={"registration"} />
      </div>

      <div className="start__login">
        <p className="start__question">Уже есть аккаунт?</p>
        <Link className="start__link" to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
