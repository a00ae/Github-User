import React, { memo } from "react";
import type {  RepositoriesProps } from "./typescript/github";
import SearchUser from "./SearchUser";

const styleRepo: React.CSSProperties = {
  width: "70%",
  display: "flex",
  flexDirection: "column",
  gap: "var(--gap-md)",
  margin: "var(--margin-sm)",
};



const Repositories = ({
  user,
  data,
  loading,
  error,
  repos,
}: RepositoriesProps) => {
  if (loading)
    return (
      <section className="repositories page">Loading repositories...</section>
    );
  if (error)
    return (
      <section className="repositories">
        Error fetching repositories for {user}: {error}
      </section>
    );
  if (!data)
    return (
      <section className="repositories page">
        Search for people on GitHub
        <SearchUser />
      </section>
    );
  if (!repos)
    return <section className="repositories page">search now</section>;

  return (
    <section style={styleRepo}>
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
    </section>
  );
};

export default memo(Repositories);
