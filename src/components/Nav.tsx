import { memo } from "react";
import { RiMenuLine, RiGithubFill } from "@remixicon/react";
import SearchUser from "./SearchUser";
import type { NavProps } from "./typescript/github";

const Nav = ({ onUserSelect }: NavProps) => {



  return (
    <div className="nav">
      <div className="nav_left">
        <div className="main">
          <RiMenuLine color="#fff" />{" "}
        </div>
        <div className="btn-dev">
          <RiGithubFill color="#fff" />{" "}
        </div>
      </div>

      <div className="nav_right">
        <SearchUser onUserSelect={onUserSelect} />

        <div className="profile"></div>
      </div>
    </div>
  );
};

export default memo(Nav);
