
import { useGitHubData } from "./Hooks/useGitHubData";
import { RiSearchLine } from "@remixicon/react";
import type { NavProps } from "./typescript/github";


const SearchUser = ({onUserSelect}: NavProps) => {
    const {searchTerm, setSearchTerm, filteredUsers} = useGitHubData();
  return (
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
  );
};

export default SearchUser;
