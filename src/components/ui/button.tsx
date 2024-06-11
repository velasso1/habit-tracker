import { IButtonProps } from "../../types/button-props";
import { useNavigate } from "react-router-dom";

const Button = ({ text, url }: IButtonProps) => {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate(`/${url}`)}>
      {text}
    </button>
  );
};

export default Button;
