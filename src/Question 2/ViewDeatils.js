import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import singleTrain from "./singleTrain.js";

function ViewDetails() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Details of Train</h1>
      <div>
        <p>{singleTrain.trainName}</p>
        <p>{singleTrain.trainNumber}</p>
      </div>
    </div>
  );
}

export default ViewDetails;
