import React from 'react';
import { useSelector } from "react-redux";
import ChiTietPhimLichChieuThoiGianChieu from './ChiTietPhimLichChieuThoiGianChieu';
import ChiTietPhimPosterChitiet from './ChiTietPhimPosterChitiet';

export default function ChiTietPhimLichChieu(props) {
    let chiTietDetail = props.chitietPhim;
    console.log("chiTietDetail00", chiTietDetail);
    return (
        <div className="ChiTietPhimLichChieu01 pt-3" >
            <div style={{ background: `url(${chiTietDetail.hinhAnh})` }} className=" ChiTietPhimLichChieu02 py-5">
                <ChiTietPhimPosterChitiet chiTietDetail={chiTietDetail} />
            </div>
            <div style={{ backgroundColor: "#0a2029" }}>
                <div style={{ backgroundColor: "white" }} className="container  ChiTietPhimLichChieu03" id="ChiTietPhimLichChieu03">
                    <div className="ChiTietPhimLichChieu03in">
                        <ul style={{ fontWeight: 800, fontSize: "15px", color: 'yellow' }} className="ChiTietPhimLichChieu03inin justify-content-center py-3 mb-5 nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a style={{ color: 'orange' }} className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Lịch Chiếu</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Thông tin</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Đánh Giá</a>
                            </li>
                        </ul>
                        <div className=" container m-4 ChiTietPhimLichChieu03inin1 tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row flex-wrap d-none d-lg-flex">
                                    <div className="nav w-100 col-2 flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {chiTietDetail?.heThongRapChieu?.map((ds, index) => {
                                            let active = index === 0 ? "active" : "";
                                            return <a key={index} className={"d-flex pb-4 nav-link " + active} id="v-pills-home-tab" data-toggle="pill" href={`#${ds.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                <img style={{ width: 50, height: 50 }} src={ds.logo} alt={ds.logo} />
                                                <span className="px-2" style={{ color: 'black', fontWeight: "700" }}>{ds.tenHeThongRap}</span>
                                            </a>
                                        })}

                                    </div>
                                    <div className="col-10 w-100 tab-content" id="v-pills-tabContent">
                                        {chiTietDetail?.heThongRapChieu?.map((ds, index) => {
                                            let active = index === 0 ? "active" : "";
                                            return <div className={"tab-pane w-100 fade show " + active} id={ds.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                <ChiTietPhimLichChieuThoiGianChieu chiTietDetail={chiTietDetail} ds={ds} index={index} />
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className=" flex-wrap d-block d-lg-none">
                                    <div className="nav w-100  flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {chiTietDetail?.heThongRapChieu?.map((ds, index) => {
                                            let active = index === 0 ? "active" : "";
                                            return <div className="text-center border my-3">
                                                <div className="d-flex justify-content-center p-2">
                                                    <a key={index} className={"d-flex align-items-center pb-4 nav-link " + active} id="v-pills-home-tab" data-toggle="pill" href={`#${ds.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                        <img style={{ width: 50, height: 50 }} src={ds.logo} alt={ds.logo} />
                                                        <span className="px-2" style={{ color: 'black', fontWeight: "700" }}>{ds.tenHeThongRap}</span>
                                                    </a>
                                                </div>
                                                <div className={"tab-pane py-3 w-100 fade show " + active} id={ds.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <ChiTietPhimLichChieuThoiGianChieu chiTietDetail={chiTietDetail} ds={ds} index={index} />
                                                </div>
                                            </div>

                                        })}

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
