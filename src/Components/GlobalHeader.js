import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { dangXuatAction } from "../Redux/const/QuanLyNguoiDungAction";

export default function GlobalHeader() {
  const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.values);
  const dispatch = useDispatch();
  // console.log("userLogin", userLogin)
  const renderButtonLogin = () => {

    if (!userLogin) {
      return <div className="nutClick d-flex ">
        <NavLink to="/dangnhap">
          <a className="nutNhap" href="#">
            Đăng Nhập
          </a>
        </NavLink>
        <NavLink to="/dangky">
          <a className="nutNhap">
            Đăng Ký
          </a>
        </NavLink>
      </div>
    } else {
      return <div className="nutClick d-flex ">
        {/* <div>
          <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" ></button>
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="" onClick={() => {
            dispatch(dangXuatAction())
          }} >
            Đăng Xuất
        </p>
          <p className="px-2" >thông tin tài khoản</p>
        </div> */}
        <div className="dropdown">
          <a className="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {userLogin.taiKhoan}
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
            <NavLink to="/thongtintaikhoan" className="px-2 d-block" >Thông tin tài khoản</NavLink>
            <a className=" px-2 d-block" onClick={() => {
              dispatch(dangXuatAction())
            }} >
              Đăng xuất
        </a>

          </div>
        </div>





      </div >




    }
  }
  return (
    <div className="headerGeneral container-fluid d-flex justify-content-between align-items-center">
      <img style={{ width: 120, height: 120 }} src="https://i.pinimg.com/236x/63/fb/15/63fb1537a5772e9ed175172e2b78a659.jpg" alt="" />

      <div className="portion1 d-flex justify-content-center">
        <a href="#section2">Trang Chủ</a>

        <a href="#">Liên Hệ</a>

        <a href="#">Tin tức</a>

        <a className="portion1UngDung" href="#">Ứng Dụng</a>
      </div>
      {/* <div className="nutClick d-flex ">
        <NavLink to="/dangnhap">
          <a className="nutNhap" href="#">
            Đăng Nhập
        </a>
        </NavLink>

        <NavLink to="/dangky">
          <a className="nutNhap">
            Đăng Ký
          </a>

        </NavLink>
      </div> */}
      {renderButtonLogin()}
    </div>
  );
}
