import BoxProfile from "./BoxProfile";
import { useFetchSingleGitHubUser } from "./Hooks/useFetchSingleGitHubUser";
import Repositories from "./Repositories";
import SearchUser from "./SearchUser";
import Nav from "./Nav";
import { useParams, useNavigate } from "react-router-dom";

interface Props {
    userName?: string;
}

const UserProfile = ({userName}:Props) => {
  // قراءة اسم المستخدم من الرابط /user/:username
  const { username: urlUser } = useParams();
  const navigate = useNavigate();

  // الأولوية للاسم القادم من الرابط، ثم الـ Props
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
                ? `Error: ${error}`
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
