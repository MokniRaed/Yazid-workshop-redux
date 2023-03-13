import React, { useState } from "react";
import { addMovie } from "../../Redux/MovieSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddMovie() {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rate, setRate] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddMovie = ()=>{
    dispatch(addMovie({title,date,description,imgUrl,rate}))
    navigate("/movielist");

  }

  return (
      <div>
        <h3>Title</h3>
        <input
          placeholder=""
          onChange={(e) => {
            setTitle(e.target.value);

          }}
        />
        <h3>Description</h3>
        <input
          placeholder=""
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <h3>Image Url</h3>
        <input
          placeholder=""
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
        />
        <h3>Rate</h3>
        <input
          placeholder=""
          onChange={(e) => {
            setRate(e.target.value);
          }}
        />
        <h3>Date</h3>
        <input
          placeholder=""
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <button onClick={() => handleAddMovie()}> Add </button>
      </div>

  );
}

export default AddMovie;
