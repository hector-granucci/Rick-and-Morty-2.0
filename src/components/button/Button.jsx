import { Link } from "react-router-dom";

const Button = ({ path, text, onClick }) => {
  return path ? (
    <Link to={path} onClick={onClick}>
      <button>{text}</button>
    </Link>
  ) : (
    <button onClick={onClick}>{text}</button>
  );
};

export default Button;
