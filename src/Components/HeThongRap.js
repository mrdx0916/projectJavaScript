import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDSRapApiAction } from "../Redux/const/QuanLyPhimAction";
import HethongRapCumRap from "./HethongRapCumRap";
export default function HeThongRap(props) {
  const dsRap = useSelector((state) => state.QuanLyPhimReducer.dsRap);
  const [stateRap, setStateRap] = useState("BHDStar");
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(await layDSRapApiAction());
  }, []);
  useEffect(() => {
    setStateRap(dsRap[0]?.maHeThongRap)
  }, [dsRap])
  return (
    <div id="heThongRapContainerId" className=" heThongRapContainer container my-5 mx-xl-5 mx-md-0 px-0 d-flex justify-content-center">
      <nav className="HeThongRapRespnsive navbar navbar-expand-md navbar-light m-0 p-0 ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse " id="navbarNavDropdown">
          {/* <ul className="navbar-nav">
            <li className="nav-item dropdown"> */}
          {dsRap.map((rap, index) => {
            return (
              <div className="d-flex justify-content-center">
                <button style={{ width: "60%", border: "none" }} onClick={() => { setStateRap(rap.maHeThongRap) }} key={index} className="collapse d-flex justify-content-center mt-2 py-1 " href="#" id="navbarNavDropdown" role="button" >

                  <img
                    style={{ width: "20%", height: 60 }}
                    src={rap.logo}
                    alt={rap.logo}
                  />

                </button>
              </div>
            )
          })}
          <div className="m-1 p-1" style={{ width: "100%" }}>
            <HethongRapCumRap m={"m-1"} p={"p-1"} maHeThongRap={stateRap} />
          </div>
        </div>
      </nav>



      <div style={{ width: "100%", backgroundColor: "#21252985", }} id="HeThongRapNotRespnsive" className="HeThongRapNotRespnsive mx-auto row justify-content-center container d-none d-md-flex border border">
        <div style={{ height: "600px" }} className="col-1  ">
          {dsRap.map((rap, index) => {
            return (
              <div className="mt-2 py-1 border-bottom border-danger" style={{ cursor: "pointer" }} onClick={() => { setStateRap(rap.maHeThongRap) }} key={index}>
                <img
                  style={{ width: "100%", height: 60 }}
                  src={rap.logo}
                  alt={rap.logo}
                />
              </div>
            );
          })}
        </div>
        <div className="col-11">
          <HethongRapCumRap m={"mx-5"} maHeThongRap={stateRap} />

        </div>
      </div>
    </div>
  );
}
