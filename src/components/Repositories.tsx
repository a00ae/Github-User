import React, { memo } from "react";
import type { GitHubUser } from "./typescript/github";
import type { Repos } from "./typescript/github";
import { repo, textPage404 } from "./typescript/main";
import SearchUser from "./SearchUser";

const styleRepo: React.CSSProperties = {
  width: "70%",
  display: "flex",
  flexDirection: "column",
  gap: "var(--gap-md)",
  margin: "var(--margin-sm)",
};

interface RepositoriesProps {
  user: string;
  data: GitHubUser | null;
  loading: boolean;
  error: string | null;
  repos: Repos[] | [];
}

const Repositories = ({
  user,
  data,
  loading,
  error,
  repos,
}: RepositoriesProps) => {
  if (loading)
    return <div className="repositories">Loading repositories...</div>;
  if (error)
    return (
      <div className="repositories">
        Error fetching repositories for {user}: {error}
      </div>
    );
  if (!data)
    return (
      <div style={repo} className="repositories page">No user data to fetch repositories. 
      <SearchUser />
      
      </div>
    );
  if (!repos)
    return (
      <div style={repo} className="repositories page">search now
      
      </div>
    );

  return (
    <div style={styleRepo}>
      <h2>repo 5 last</h2>

      <div className="repost" id="repost">
        {repos.map(({ id, language, name, visibility, repos_url }) => (
          <div key={id} className="repositories" style={{ width: "100%" }}>
            <div className="repositories_top">
              <div className="first">
                <a href={repos_url}>{name}</a>
              </div>

              <div className="Public">
                <span>{visibility}</span>
              </div>
            </div>
            <div className="repositories_bottom">
              <div className="background-color"></div>
              <span>{language}</span>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Repositories);
