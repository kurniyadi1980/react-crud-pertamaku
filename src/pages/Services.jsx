import Loading from "../components/LoadingAnimasi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Services = () => {
  const [ninja, setNinja] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllNinja = async () => {
      try {
        const response = await axios.get("http://id15.tunnel.my.id:12176/ninja/");
        setNinja(response.data);
      } catch (error) {
        setError("Failed to fetch data. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllNinja();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus data ini?")) return;
    try {
      await axios.delete(`http://id15.tunnel.my.id:12176/ninja/${id}`);
      setNinja((prevNinja) => prevNinja.filter((n) => n.id !== id)); // Update state tanpa reload
    } catch (error) {
      setError("Failed to delete data!");
      console.error(error);
    }
  };

  return (
    <Loading>
      <div style={{ padding: "20px" }}>
        <button className="add-button">
          <Link className="btn-update" to={`/add`}>
            Tambah Data
          </Link>
        </button>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <table border="1" cellPadding="10" cellSpacing="0" width="100%">
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
                <th>No</th>
                <th>Nama</th>
                <th>Klan</th>
                <th>Jurus</th>
                <th>Asal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {ninja.map((n, index) => (
                <tr key={n.id}>
                  <td>{index + 1}</td>
                  <td>{n.nama}</td>
                  <td>{n.klan}</td>
                  <td>{n.jurus}</td>
                  <td>{n.asal}</td>
                  <td>
                    <Link className="card-button" to={`/update/${n.id}`} style={{ marginRight: "10px" }}>
                      Update
                    </Link>
                    <button className="card-button" onClick={() => handleDelete(n.id)} style={{ color: "red" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Loading>
  );
};

export default Services;
