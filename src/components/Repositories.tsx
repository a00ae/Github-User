import { RiArrowDownSFill, RiStarLine } from "@remixicon/react";
import { memo } from "react";
import type { GitHubUser } from "./typescript/github";
import type { Repos } from "./typescript/type";

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
    <div style={{width: "70%", margin: "var(--margin-sm)"}}>
      <h2>repo 5 last</h2>

      {repos.map(({ id, language, name, visibility}) => (
        <div key={id} className="repositories" style={{width: "100%"}}>
          <div className="repositories_top">
            <div className="first">
              <span>{name} </span>
            </div>

            <div className="Public">
              <span>{visibility}</span>

            </div>
          </div>
          <div className="repositories_bottom">
            <div className="background-color"></div>
            {/* This section should display actual repository data, not user data. For now, it's a placeholder. */}
            <span>{language}</span>{" "}
            {/* <span updated-data="true">Updated 1 hour ago</span>{" "} */}
            {/* Changed to string literal to avoid React warning */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Repositories);
