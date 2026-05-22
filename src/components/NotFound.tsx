import { useNavigate } from "react-router-dom";

interface Props {
  error: string;
}
const NotFound = (props: Props) => {
  const naivegate = useNavigate();
  const handleClickHomePage = () => {
    naivegate("/");
  };
  return (
    <div>
      {props.error}

      <button type="button" onClick={handleClickHomePage}>
        Go to back
      </button>
    </div>
  );
};

export default NotFound;
