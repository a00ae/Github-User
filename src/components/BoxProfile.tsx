import { memo } from "react";
import type { GitHubUser } from "./typescript/github"; // Assuming this type exists

interface BoxProfileProps {
  data: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

const BoxProfile = ({ data, loading, error }: BoxProfileProps) => {
  if (loading) return <section className="box-profile">Loading profile...</section>;
  if (error) return <section className="box-profile">Error: {error}</section>;
  if (!data) return null; // Or a placeholder for no user found

  return (
    <section className="box-profile">
      <div className="box-profile_avater">
        <img src={data.avatar_url} alt={data.login} />
      </div>

      <div className="box-profile_descraption">
        <span data-title>{data.name || data.login}</span>
        <span data-descraption>{data.bio || "No bio available"}</span>
        <div className="flowers">
          <a
            href={`https://github.com/${data.login}?tab=followers`}
            target="_blank"
            rel="noreferrer">
            <span>{data.followers}</span> followers
          </a>
          <div>.</div>
          <a
            href={`https://github.com/${data.login}?tab=following`}
            target="_blank"
            rel="noreferrer">
            <span>{data.following}</span> following
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(BoxProfile);
