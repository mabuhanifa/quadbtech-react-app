import React, { useEffect, useState } from "react";

export default function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api/crypto");
      console.log(res);
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="flex justify-center mt-20">
      <div>
        <table className="border-separate border-spacing-y-5">
          <tbody>
            <tr className="px-10 text-gray-500 text-2xl font-bold ">
              <th>#</th>
              <th>Platform</th>
              <th>Last Traded Price</th>
              <th>Buy / Sell Price</th>
              <th>Difference</th>
              <th>Savings</th>
            </tr>
            {data &&
              data.map((item, index) => {
                return (
                  <tr
                    className="px-10  text-gray-100 text-2xl font-bold rounded"
                    key={index }
                  >
                    <td className="text-center py-4 rad">{index+1}</td>
                    <td className="text-center py-4">{item.name}</td>
                    <td className="text-center py-4">{item.info.last}</td>
                    <td className="text-center py-4">
                      {item.info.buy} / {item.info.sell}{" "}
                    </td>
                    <td className="text-center py-4">
                      {(Number(item.info.sell - item.info.open) / 100).toFixed(
                        2
                      )}
                    </td>
                    <td className="text-center py-4 rax">
                      {(item.info.sell - item.info.open).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
