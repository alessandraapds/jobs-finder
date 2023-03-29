import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(() => setError("Data is not available"))
        .finally(() => setIsLoading(false));
    };

    fecthData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
