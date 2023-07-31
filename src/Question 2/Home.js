import React, { useState } from "react";
import "./Home.css";
import trainData from "./alltrains";
import "./singleTrain.js";
import "bootstrap/dist/css/bootstrap.min.css";

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

  function setTime(data) {
    return `${data.Hours} : ${data.Minutes} : ${data.Seconds}`;
  }

  function setSeat(data) {
    let res = `
    Sleeper : ${data.sleeper} 
    AC : ${data.AC}
    `;
    return res;
  }
  
  function viewDetails(event){
    console.log(event);
    event.preventDefault();
  }

  return (
    <div>
      <div className="mainApp">
        <table className="table table-striped table-hover">
          <thead className="headings">
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
              <th>Departure Time</th>
              <th>Seat Availability</th>
              <th>Prices</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trainData.map((train) => (
              <tr>
                <td>{train.trainName}</td>
                <td>{train.trainNumber}</td>
                <td>{setTime(train.departureTime)}</td>
                <td>{setSeat(train.seatsAvailable)}</td>
                <td>{setSeat(train.price)}</td>
                <td>
                  <button type="button" className="btn btn-success" onClick={viewDetails}>
                    Details
                  </button>
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
