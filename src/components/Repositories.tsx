import { memo } from "react";
import type { RepositoriesProps } from "./typescript/github";

// Define a mapping for languages to specific color class names
const languageColorMap: { [key: string]: string } = {
  Go: "sky-blue",
  JavaScript: "yellow",
  TypeScript: "green",
  Python: "red",
  "C++": "pink",
  C: "grey",
  Dart: "sky-green",
  Ruby: "sky-red",
  "C#": "sky-csh",
  Java: "orange"
};

const getLanguageColorClass = (language: string | null | undefined): string => {
  if (!language) return "default-language-color";    
  const normalizedLanguage = language.trim();
  return languageColorMap[normalizedLanguage] || "default-language-color";
};

const Repositories = ({ repos }: RepositoriesProps) => {
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
              <div
                className={`language-color-indicator ${getLanguageColorClass(language)}`}></div>
              <span>{language}</span>{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Repositories);
