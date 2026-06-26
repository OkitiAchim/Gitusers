import { useState } from "react";
import { fetchGithubUser } from "../services/api";

export default function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchGithubUser(username);
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    searchUser,
  };
}
