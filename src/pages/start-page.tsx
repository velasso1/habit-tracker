import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonAnimate } from "../utils/animation/motion-variants";
import Button from "../components/ui/button";

const StartPage: FC = () => {
  return (
    <div className="start">
      <div className="start__title">
        <p>Добро пожаловать!</p>
      </div>
      <div className="start__subtitle">
        <p>
          Это{" "}
          <span className="start__highlight-subtitle">
            персональное пространство
          </span>{" "}
          для отслеживания привычек
        </p>
      </div>
      <div className="start__subtitle">
        <p>
          Выбери <span className="start__highlight-subtitle">цели</span> и
          добавь их в список
        </p>
      </div>
      <div className="start__subtitle">
        <p>
          Отмечай выполненные задачи и{" "}
          <span className="start__highlight-subtitle">
            наблюдай за прогрессом
          </span>
          !
        </p>
      </div>
      <motion.div
        className="start__button"
        variants={buttonAnimate}
        initial="hidden"
        animate="visible"
      >
        <Button text={"Начать"} url={"registration"} />
      </motion.div>

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
