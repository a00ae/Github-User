import { useState } from "react";
import BoxProfile from "./components/BoxProfile";
import Nav from "./components/Nav";
import Repositories from "./components/Repositories";
import { useFetchSingleGitHubUser } from "./components/Hooks/useFetchSingleGitHubUser";
import type { GitHubUser } from "./components/typescript/github";

function App() {
  const [selectedUsername, setSelectedUsername] = useState<string>("octocat"); // Default user
  const { data, loading, error } =
    useFetchSingleGitHubUser<GitHubUser>(selectedUsername);

  const handleUserSelect = (username: string) => {
    setSelectedUsername(username);
  };

  return (
    <div className="app">
      <Nav onUserSelect={handleUserSelect} />
      <div className="repo">
        <BoxProfile data={data} loading={loading} error={error} />
        <Repositories
          user={selectedUsername} // Repositories might still need the username for its own fetches
          data={data}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
