import React, { memo } from "react";
import type { GitHubUser } from "./typescript/github";
import type { Repos } from "./typescript/type";

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
      <div className="repositories">No user data to fetch repositories.</div>
    );
  if (!repos)
    return (
      <div className="repositories">No user data to fetch repositories.</div>
    );

  return (
    <div style={styleRepo}>
      <h2>repo 5 last</h2>

      <div className="repost" id="repost">
        {repos.map(({ id, language, name, visibility }) => (
          <div key={id} className="repositories" style={{ width: "100%" }}>
            <div className="repositories_top">
              <div className="first">
                <a href="">
                  <span>{name} </span>
                </a>
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
