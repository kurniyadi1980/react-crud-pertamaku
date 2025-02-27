import Loading from "../components/LoadingAnimasi";

import React, { useEffect, useState } from "react";
// import "./styles/Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [ninja, setNinja] = useState([]);
  useEffect(() => {
    const fetchAllNinja = async () => {
      try {
        // const respon = await axios.get("http://localhost:8800/ninja/");
        const respon = await axios.get("http://id15.tunnel.my.id:12176/ninja/");
        setNinja(respon.data);
        console.log(respon.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNinja();
  }, []);

  const handleKonfirmasi = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      // onDelete();
      handleDelete(id);
    }
  };

  //handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://id15.tunnel.my.id:12176/ninja/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Gagal menghapus file!");
    }
  };
  return (
    <Loading>
      <div style={{ padding: "0px" }}>
        <button className="add-button">
          <Link className="btn-update" to={`/add`}>
            Tambah Data
          </Link>
        </button>

        <div className="ninja-cards">
          {ninja.map((ninja) => (
            <div className="ninja-card" key={ninja.id}>
              <h2 className="ninja-title">{ninja.nama}</h2>
              <p>
                <strong>Klan:</strong> {ninja.klan}
              </p>
              <p>
                <strong>Jurus:</strong> {ninja.jurus}
              </p>
              <p>
                <strong>Asal:</strong> {ninja.asal}
              </p>
              <div className="card-buttons">
                <button className="card-button">
                  <Link className="btn-update" to={`/update/${ninja.id}`}>
                    Update
                  </Link>
                </button>
                <button
                  className="card-button"
                  onClick={() => handleKonfirmasi(ninja.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <h1>Our Services</h1>
        <p>We offer the best services for you.</p> */}
      </div>
    </Loading>
  );
};

export default Dashboard;
