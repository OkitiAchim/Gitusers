import SearchForm from "./Components/SearchForm";
import Loader from "./Components/Loader";
import ErrorMessage from "./Components/ErrorMessage";
import UserList from "./Components/UserList";
import useUser from "./hooks/useUser";
import "./styles/app.css";

export default function App() {
  const { user, loading, error, searchUser } = useUser();

  return (
    <main className="app">
      <div className="container">
        <h1>GitHub User Search</h1>

        <p className="subtitle">
          Search for any GitHub profile using React Async Hooks.
        </p>

        <SearchForm onSearch={searchUser} />

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {user && <UserList user={user} />}
      </div>
    </main>
  );
}
