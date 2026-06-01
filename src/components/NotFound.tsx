import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

interface Props {
  error?: string;
  userName: string;
}
const NotFound = (props: Props) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const hasError = props.error && props.error.length > 0;
  const navigate = useNavigate();

  const handleClickHomePage = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate("/");
    }, 500); // تأخير لمدة 1.5 ثانية لرؤية تأثير التحميل
  };

  if (isNavigating) {
    return (
      <section className="repositories page">
        <Loading />
      </section>
    );
  }

  return (
    <>
      {hasError && (
        <div className={`error ${hasError ? "active" : ""}`}>
          {/* <p style={{display: "flex", flexWrap: "wrap", width: "50%"}}>{props.userName}</p> */}
          <p>{props.error}</p>

          <button type="button" onClick={handleClickHomePage}>
            Go to back
          </button>
        </div>
      )}
    </>
  );
};

export default NotFound;
