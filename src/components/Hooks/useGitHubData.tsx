import { useEffect, useState, useMemo } from "react";
import type { GitHubUser } from "../typescript/github";
// This hook is now specifically for fetching and filtering a list of users for the search bar.
export const useGitHubData = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!searchTerm) return;
    const fetchUsers = async () => {
      try {
        setLoading(true);
        new Promise((rej) => setTimeout(rej, Math.random() * 6000 + 100) );      
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) throw new Error(`not server ${response.status}`);

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "not allowed");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [searchTerm]);

  const filteredUsers = useMemo(() => {
    const cleanedSearchTerm = searchTerm.trim().toLowerCase();

    if (!cleanedSearchTerm) return users;
    return users.filter((user) =>
      user.login.toLowerCase().includes(cleanedSearchTerm),
    );
  }, [users, searchTerm]);
  return {
    filteredUsers,
    searchTerm,
    setSearchTerm,
    loading,
    error,
  };
};
