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
      const res = await axios.post(url, data);
      setResponse(res?.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


  const deleteData = async (id)=> {
    await axios.delete(`http://localhost:3000/users/${id}`);
    getData();
  }
  
  useEffect(() => {
    getData();
  }, [url]); 

  return [loading, error, response, getData, postData, deleteData];
};

export default useHttp;
