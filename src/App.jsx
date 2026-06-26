import SearchForm from "./Components/SearchForm";
import Loader from "./Components/Loader";
import ErrorMessage from "./Components/ErrorMessage";
import UserList from "./Components/UserList";
import useUser from "./hooks/useUser";

export default function App() {
  const { user, loading, error, searchUser } = useUser();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>

      <SearchForm onSearch={searchUser} />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {user && <UserList user={user} />}
    </div>
  );
}
