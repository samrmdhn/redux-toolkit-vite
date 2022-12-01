import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState("");

  const getDatas = async () => {
    try {
      setLoading("Loading...");
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setDatas(data.products);
      setLoading(`All data loaded ${data.products.length} items`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
        </div>
        <div>
          <h3>Dashboard</h3>
        </div>
      </div>

      <div>
        {loading}
        {datas?.map((data, index) => {
          return (
            <>
              <Link to={`/product/${data.id}`}>
                <a>
                  <div key={data.id}>{data.title}</div>
                </a>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
