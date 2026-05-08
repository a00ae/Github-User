import { useState } from "react";
import BoxProfile from "./components/BoxProfile";
import Nav from "./components/Nav";
import Repositories from "./components/Repositories";
import { useFetchSingleGitHubUser } from "./components/Hooks/useFetchSingleGitHubUser";

function App() {
  const [selectedUsername, setSelectedUsername] = useState<string>("octocat"); // Default user
  const { data, loading, error, repos } =
    useFetchSingleGitHubUser(selectedUsername);

  const handleUserSelect = (username: string) => {
    setSelectedUsername(username);
  };

  return (
    <div className="app">
      <Nav onUserSelect={handleUserSelect} />
      <div className="repo">
        <BoxProfile data={data} loading={loading} error={error} />
        <Repositories
          repos={repos}
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
