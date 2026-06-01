import BoxProfile from "./BoxProfile";
import { useFetchSingleGitHubUser } from "./Hooks/useFetchSingleGitHubUser";
import Repositories from "./Repositories";
import SearchUser from "./SearchUser";
import Nav from "./Nav";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import Loading from "./Loading";

interface Props {
  userName?: string;
}

const UserProfile = ({ userName }: Props) => {
  const { username: urlUser } = useParams();
  const navigate = useNavigate();

  const effectiveUser = urlUser || userName || "";
  const { data, loading, error, repos } =
    useFetchSingleGitHubUser(effectiveUser);

  const handleUserSelect = (name: string) => {
    navigate(`/user/${name}`);
  };

  if (error) {
    return <NotFound error={error} />;
  }

  if (loading) {
    return (
      <div className="app">
        <section className="repositories page">
          <Loading />
        </section>
      </div>
    );
  }

  if (!data) {
    return (
      <section className="repositories page">
        <p className="search-for-github">Search for people on GitHub</p>
        <SearchUser onUserSelect={handleUserSelect} />
      </section>
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
