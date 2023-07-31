import React, { useState } from "react";
import "./Home.css";
import  './alltrains'
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
  return (
    <div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <button onClick={allTrains}>Click</button>
      </div>
    </div>
  );
}

export default Home;
