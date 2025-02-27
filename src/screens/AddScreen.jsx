import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./styles/Form.css";
import axios from "axios";

const AddScreen = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    klan: "Uzumaki",
    jurus: "",
    asal: "Konohagakure",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://id15.tunnel.my.id:12176/ninja/", formData);
      // await axios.post("http://localhost:8800/ninja/", formData);
      alert("Data ninja berhasil disimpan");
      // window.location.href='./services';
      Navigate("/services");
      // setFormData({
      //   nama: "",
      //   klan: "Uzumaki",
      //   jurus: "",
      //   asal: "Konohagakure",
      // })
    } catch (error) {
      console.log("Gagal menambahkan", error);
      alert("Gagal menambahkan data ninja", error);
    }
  };
  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Tambah Ninja</h2>
        <form className="update-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukkan nama ninja"
              required
              onChange={handleChange}
              value={formData.nama}
            />
          </div>

          <div className="form-group">
            <label for="klan">Klan</label>
            <select
              id="klan"
              name="klan"
              required
              onChange={handleChange}
              value={formData.klan}
            >
              <option value="uzumaki">Uzumaki</option>
              <option value="uchiha">Uchiha</option>
              <option value="hyuga">Hyuga</option>
              <option value="senju">Senju</option>
            </select>
          </div>

          <div className="form-group">
            <label for="jurus">Jurus</label>
            <input
              type="text"
              id="jurus"
              name="jurus"
              placeholder="Masukkan jurus ninja"
              required
              onChange={handleChange}
              value={formData.jurus}
            />
          </div>

          <div className="form-group">
            <label for="asal">Asal</label>
            <select
              id="asal"
              name="asal"
              required
              onChange={handleChange}
              value={formData.asal}
            >
              <option value="konohagakure">Konohagakure</option>
              <option value="sunagakure">Sunagakure</option>
              <option value="kirigakure">Kirigakure</option>
              <option value="kumogakure">Kumogakure</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Tambah
          </button>
        </form>
      </div>
    </>
  );
};

export default AddScreen;
