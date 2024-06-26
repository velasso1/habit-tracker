import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IButtonProps {
  text: string;
  url: string;
}

const Button: FC<IButtonProps> = ({ text, url }) => {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate(`/${url}`)}>
      {text}
    </button>
  );
};

export default Button;
