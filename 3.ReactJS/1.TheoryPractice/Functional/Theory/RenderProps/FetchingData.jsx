import { useState, useEffect } from "react";

const fetchData = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  return render({ data, loading });
};

export default fetchData;