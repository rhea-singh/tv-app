import { useState, useEffect } from "react";
import axios from "axios";
import { STAGING_ENDPOINT } from "../constants";

interface fetchAPIProps {
  url: string;
}

const useFetch = ({ url }: fetchAPIProps) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setError("");
    axios
      .get(`${STAGING_ENDPOINT}${url}`)
      .then((res: any) => {
        setLoading(false);
        res.data && setData(res.data);
      })
      .catch((err: any) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
