import React, { useState } from "react";
import "./Home.css";
function Home() {
    let [trains,dataFun]=useState({
        train:[]
    })
  function allTrains() {
    fetch("http://20.244.56.144:80/train/trains", {
      method: "GET",
      headers: {
        "access_token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA3ODIwODgsImNvbXBhbnlOYW1lIjoiVHJhaW5DZW50cmFsUmFnaGF2IiwiY2xpZW50SUQiOiJiMDM3MzNlMi0xNTY2LTRlNGMtOGQ0My03N2U2ODYwOTc4MjMiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjEwMDY0MDEwOTAwNyJ9.ceMedyJJ14lJ-R_zZw8xuKeGfeDHtLFzppfn-XBJHt8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dataFun({
            train:response
        })
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (<div>
    <div className="container">
        <button onClick={allTrains}>Click</button>

    </div>
  </div>);
}

export default Home;
