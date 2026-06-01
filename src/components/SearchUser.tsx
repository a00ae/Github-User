import { useGitHubData } from "./Hooks/useGitHubData";
import { RiSearchLine } from "@remixicon/react";
import type { NavProps } from "./typescript/github";

interface Props {
  isActive: boolean
}

const SearchUser = ({ onUserSelect, isActive=false }: NavProps &  Props) => {
  const { searchTerm, setSearchTerm, filteredUsers } = useGitHubData();
  

  return (
    <div className={`input-box ${isActive ? "search" : ""} ${searchTerm.length > 0 ? "active" : ""}`}>
      <RiSearchLine />
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="search now"
        maxLength={30}
        minLength={3}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            onUserSelect?.(searchTerm);
            setSearchTerm("");
          }
        }}
      />
      {searchTerm.length > 0 && (
        <div className="search-outbut active">
          {filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.map(({ id, login }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  onUserSelect?.(login);
                  setSearchTerm("");
                }}>
                <div className="card">
                  <RiSearchLine />
                  <span>{login}</span>
                </div>
              </button>
            ))
          ) : (
            <div className="card not-usear">Not Found {searchTerm}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchUser;
