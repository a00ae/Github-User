import { memo } from "react";
import { RiMenuLine, RiGithubFill, RiSearchLine } from "@remixicon/react";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_left">
        <div className="main">
          {" "}
          <RiMenuLine color="#fff"/>{" "}
        </div>
        <div className="btn-dev">
          {" "}
          <RiGithubFill color="#fff"/>{" "}
        </div>
      </div>

      <div className="nav_reight">
        <div className="input-box">
          <RiSearchLine />
          <input type="text" placeholder="search now"/>
        </div>
        <div className="profile">{/* <img src="" alt="" /> */}</div>
      </div>
    </div>
  );
};

export default memo(Nav);
