import { FC } from "react";
import Form from "../components/form";

const RegistrationPage: FC = () => {
  return (
    <div className="registration">
      <div className="registration__title">
        <p>
          Для начала, <br /> давай познакомимся
        </p>
      </div>
      <div className="registration__form">
        <Form />
      </div>
    </div>
  );
};

export default RegistrationPage;
