import React, { useState } from "react";
import "./Home.css";
import trainData from './alltrains'
import './singleTrain.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  let [trains, dataFun] = useState({
    train: [],
  });
  function allTrains() {
    fetch("http://20.244.56.144:80/train/trains", {
      method: "GET",
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA3ODQwMzQsImNvbXBhbnlOYW1lIjoiVHJhaW5DZW50cmFsUmFnaGF2IiwiY2xpZW50SUQiOiJiMDM3MzNlMi0xNTY2LTRlNGMtOGQ0My03N2U2ODYwOTc4MjMiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjEwMDY0MDEwOTAwNyJ9.oTODiP6vek6ZaL6-er8JkYggTgKWcbwoH-8CuMRmQME",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dataFun({
          train: response,
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function setTime(data){
    return `${data.Hours} : ${data.Minutes} : ${data.Seconds}`;
    
  }

  return (
    <div>
      <div className="">
        <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trainData.map((train) => (
            <tr>
              <td>{train.trainNumber}</td>
              <td>{train.trainName}</td>
              <td>{setTime(train.departureTime)}</td>
              <td>
              <button type="button" class="btn btn-success">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Home;
