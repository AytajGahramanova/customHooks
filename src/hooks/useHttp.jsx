import { useEffect, useState } from "react";
import axios from "axios";

const useHttp = (url) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

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

  const postData = async (data) => {
    try {
      setLoading(true);
      await axios.post(url, data);
      getData();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log("Deleted successfully:", response);
      getData();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [loading, error, response, getData, postData, deleteData];
};

export default useHttp;
