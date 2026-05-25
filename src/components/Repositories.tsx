import  { memo } from "react";
import type {  RepositoriesProps } from "./typescript/github";



const Repositories = ({
  repos,
}: RepositoriesProps) => {

  return (
    <section className="repos">
      <h2>repo 5 last</h2>

      <div className="repost" id="repost">
        {repos.map(({ id, language, name, visibility, repos_url }) => (
          <div key={id} className="repositories">
            <div className="repositories_top">
              <div className="first">
                <a href={repos_url}>{name}</a>
              </div>

              <div className="public">
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
