import { useState, useEffect } from "react";
import axios from "axios";

// Простой in-memory кэш, чтобы не дёргать API повторно за того же игрока
const cache = new Map();

export function usePlayerData(playerName) {
  const [data, setData] = useState(cache.get(playerName) || null);
  const [isLoading, setIsLoading] = useState(!cache.has(playerName));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playerName) return;

    if (cache.has(playerName)) {
      setData(cache.get(playerName));
      setIsLoading(false);
      return;
    }

    let isCancelled = false;
    setIsLoading(true);
    setError(null);

    const query = encodeURIComponent(playerName.replace(/\s+/g, "_"));

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${query}`,
      )
      .then((res) => {
        const player = res.data?.player?.[0] || null;
        console.log(res.data);
        if (!isCancelled) {
          cache.set(playerName, player);
          setData(player);
        }
      })
      .catch((err) => {
        if (!isCancelled) setError(err.message);
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [playerName]);

  return { data, isLoading, error };
}
