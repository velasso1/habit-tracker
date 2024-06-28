import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IButtonProps {
  text: string;
  url: string;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ text, url, disabled = false }) => {
  const navigate = useNavigate();
  return (
    <button
      className="button"
      onClick={() => navigate(`/${url}`)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
