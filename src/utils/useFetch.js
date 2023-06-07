import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url);
      console.log(res);
      const data_ = await res.json();
      setData(data_);
      if (data_.length > 0) {
        setLoading(false);
      } else {
        setError(true);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}
