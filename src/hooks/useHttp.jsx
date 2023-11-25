import { useEffect, useState } from "react";
import axios from "axios";

const useHttp = (url) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setResponse(res?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return [loading, error, response];
};

export default useHttp;
