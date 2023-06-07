import React, { useEffect, useState } from "react";

export default function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api");
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);
  return <table>
    <th>
        <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Difference</th>
            <th>Savings</th>
        </tr>
    </th>



  </table>;
}
