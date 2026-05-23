import { useNavigate } from "react-router-dom";
import { useGitHubData } from "./Hooks/useGitHubData";

interface Props {
  error?: string;
}
const NotFound = (props: Props) => {
  const {error} = useGitHubData()
  const naivegate = useNavigate();
  const handleClickHomePage = () => {
    naivegate("/");
  };
  return (
    <div className={`error ${error ? "active" : ""}`}>
      {props.error}
      <button type="button" onClick={handleClickHomePage}>
        Go to back
      </button>
    </div>
  );
};

export default NotFound;
