import BoxProfile from "./BoxProfile";
import { useFetchSingleGitHubUser } from "./Hooks/useFetchSingleGitHubUser";
import Repositories from "./Repositories";
import SearchUser from "./SearchUser";
import Nav from "./Nav";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

interface Props {
    userName?: string;
}

const UserProfile = ({userName}:Props) => {
  const { username: urlUser } = useParams();
  const navigate = useNavigate();

  const effectiveUser = urlUser || userName || "";
  const { data, loading, error, repos } = useFetchSingleGitHubUser(effectiveUser);

  const handleUserSelect = (name: string) => {
    navigate(`/user/${name}`);
  };

  if (!data || loading || error) {
    return (
      <div className="app">
        <section className="repositories page">
          <p>
            {loading
              ? "Loading..."
              : error
                ? <p>Error: <span>{effectiveUser}</span> <NotFound error={error}/></p>
                : "Search for people on GitHub"}
          </p>
          {!data && !loading ? (
            <SearchUser onUserSelect={handleUserSelect} />
          ) : (
            ""
          )}
        </section>
      </div>
    );
  }

  if (!repos) return <section className="">Not reops ..</section>;

  return (
    <>
      <Nav onUserSelect={handleUserSelect} />
      <div className="repo">
        <BoxProfile data={data} loading={loading} error={error} />
        <Repositories
          repos={repos}
          user={effectiveUser}
          data={data}
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
};

export default UserProfile;
