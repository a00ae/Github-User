import { memo } from "react";
import type { GitHubUser } from "./typescript/github"; // Assuming this type exists

interface BoxProfileProps {
  data: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

const BoxProfile = ({ data, loading, error }: BoxProfileProps) => {
  if (loading)
    return <section className="box-profile">Loading profile...</section>;
  if (error) return <section className="box-profile">Error: {error}</section>;
  if (!data) return null; // Or a placeholder for no user found

  return (
    <section className="box-profile">
      <div className="box-profile_avatar">
        <img src={data.avatar_url} alt={data.login} />
      </div>

      <div className="box-profile_description">
        <span data-title>{data.name || data.login}</span>
        <span data-description>{data.bio || ""}</span>
        <div className="followers">
          <a
            href={`https://github.com/${data.login}?tab=followers`}
            target="_blank"
            rel="noreferrer">
            <span data-follow-number>{data.followers}</span>
            <span data-follow-data>followers</span>
          </a>
          <div>.</div>
          <a
            href={`https://github.com/${data.login}?tab=following`}
            target="_blank"
            rel="noreferrer">
            <span data-follow-number>{data.following}</span>
            <span data-follow-data>following</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(BoxProfile);
