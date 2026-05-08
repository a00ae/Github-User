import { useEffect, useState } from "react";
import type { Repos } from "../typescript/type";



export const useFetchSingleGitHubUser = (username: string) => {
  const [state, setState] = useState({
    data: null as any,
    repos: [] as Repos[], // إضافة حالة لتخزين المستودعات
    loading: true,
    error: null as string | null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      if (!username) {
        setState({ data: null, repos: [], loading: false, error: null });
        return;
      }

      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        // 1. جلب بيانات المستخدم الأساسية
        const userResponse = await fetch(`https://api.github.com/users/${username.trim()}`, { signal });
        if (!userResponse.ok) {
          throw new Error(userResponse.status === 404 ? "User not found" : "API Error");
        }
        const userData = await userResponse.json();

        // 2. جلب آخر 5 مستودعات (مرتبة حسب تاريخ التحديث)
        // نستخدم query parameters: sort=updated (للترتيب) و per_page=5 (للعدد)
        const reposResponse = await fetch(
          `https://api.github.com/users/${username.trim()}/repos?sort=updated&per_page=5`,
          { signal }
        );
        const reposData = await reposResponse.json();

        setState({
          data: userData,
          repos: reposData,
          loading: false,
          error: null,
        });

      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setState({
          data: null,
          repos: [],
          loading: false,
          error: err instanceof Error ? err.message : "Error occurred",
        });
      }
    };

    fetchData();
    return () => controller.abort();
  }, [username]);

  return state;
};
