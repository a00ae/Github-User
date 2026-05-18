import { memo } from "react";
import { RiMenuLine, RiGithubFill, RiSearchLine } from "@remixicon/react";
import { useGitHubData } from "./Hooks/useGitHubData";

interface NavProps {
  onUserSelect: (username: string) => void;
}

const Nav = ({ onUserSelect }: NavProps) => {
  const { searchTerm, setSearchTerm, filteredUsers } = useGitHubData();

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

      <div className="nav_reight">
        <div className="input-box">
          <RiSearchLine />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="search now"
          />
          {searchTerm.length > 0 && (
            <div className="search-outbut active">
              {filteredUsers.map(({ id, login }) => (
                <button
                  key={id}
                  type="button" 
                  onClick={() => {
                    onUserSelect(login);
                    setSearchTerm("");
                  }}>
                  <div className="card">
                    <span>{login}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="profile"></div>
      </div>
    </div>
  );
};

export default memo(Nav);
