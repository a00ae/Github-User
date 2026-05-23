import { useNavigate } from "react-router-dom";


interface Props {
  error?: string;
}
const NotFound = (props: Props) => {
  const hasError = props.error && props.error.length > 0;
  const navigate = useNavigate();

  const handleClickHomePage = () => {
    navigate("/");
  };

  return (
    <div className={`error ${hasError ? "active" : ""}`}>
      {props.error}
      <button type="button" onClick={handleClickHomePage}>
        Go to back
      </button>
    </div>
  );
};

export default NotFound;
