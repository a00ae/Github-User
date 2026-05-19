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
  if(loading) 
    return(
  <section className="">loading... </section>
  )
  if(error) 
    return (
      <section className="">Error in Massage {selectedUsername} {error}</section>
    )
  if(!data) 
    return <section className="repositories page">search Now
    <SearchUser onUserSelect={handleUserSelect}/>
    </section>
  
  if(!repos)
    return <section className="">Not reops ..</section>


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
