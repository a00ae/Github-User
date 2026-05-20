import { useState } from "react";
import BoxProfile from "./components/BoxProfile";
import Nav from "./components/Nav";
import Repositories from "./components/Repositories";
import { useFetchSingleGitHubUser } from "./components/Hooks/useFetchSingleGitHubUser";
import SearchUser from "./components/SearchUser";

function App() {
  const [selectedUsername, setSelectedUsername] = useState<string>("");
  const { data, loading, error, repos } =
    useFetchSingleGitHubUser(selectedUsername);

  const handleUserSelect = (username: string) => {
    setSelectedUsername(username);
  };
  if (!data || loading || error) {
    return (
      <div className="app">
        <section className="repositories page">
          <p>
            {loading
              ? "Loading..."
              : error
                ? `Error: ${error}`
                : "Search for people on GitHub"}
          </p>
          {!data && !loading ? <SearchUser onUserSelect={handleUserSelect} /> : ""}
        </section>
      </div>
    );
  }

  if (!repos) return <section className="">Not reops ..</section>;

  return (
    <div className="app">
      {data && <Nav onUserSelect={handleUserSelect} />}

      <div className="repo">
        <BoxProfile data={data} loading={loading} error={error} />
        <Repositories
          repos={repos}
          user={selectedUsername}
          data={data}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
