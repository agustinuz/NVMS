import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [kategori, setKategori] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [descripton, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch kategori  when modal opens
    const fetchKategori = async () => {
      try {
        const kategoriResponse = await axios.get(
          "http://localhost:5000/getKategori"
        );
        console.log(kategoriResponse);
        setKategori(kategoriResponse.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchKategori();
  }, []);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("", kategori_id);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", descripton);
    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product Name"
              />
            </div>
          </div>
          <div className="field">
            <Form.Group controlId="formKategoriId">
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                as="select"
                name="kategori_id"
                value={kategori_id}
                onChange={e}
              >
                <option value="">Select Kategori</option>
                {kategori.map((kat) => (
                  <option key={kat.id} value={kat.id}>
                    {kat.nameKategori}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
