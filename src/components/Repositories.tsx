import { RiArrowDownSFill, RiStarLine } from "@remixicon/react";
import { memo } from "react";
import type { GitHubUser } from "./typescript/github";

interface RepositoriesProps {
  user: string;
  data: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

const Repositories = ({ user, data, loading, error }: RepositoriesProps) => {
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

  return (
    <div className="repositories">
      <div className="repositories_top">
        <div className="first">
          <span>{data.html_url} </span>
        </div>

        <div className="stars">
          <div className="star">
            <RiStarLine />
            <span>Star</span>
          </div>

          <div className="solid"></div>
          <div className="list">
            <RiArrowDownSFill />
          </div>
        </div>
      </div>
      <div className="repositories_bottom">
        <div className="background-color"></div>
        {/* This section should display actual repository data, not user data. For now, it's a placeholder. */}
        <span>No repositories to display yet for {data.login}.</span>{" "}
        <span updated-data="true">Updated 1 hour ago</span>{" "}
        {/* Changed to string literal to avoid React warning */}
      </div>
    </div>
  );
};

export default memo(Repositories);
