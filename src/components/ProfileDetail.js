import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Map from './Map';
const ProfileDetail = () => {
    let { userId, id } = useParams();
    const [detailInfo, setDetailInfo] = useState();
    const [userInfo, setUserInfo] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    useEffect(() => {
        const resp = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((resp) => {
                if (resp && resp.data) {
                    setDetailInfo(resp.data)
                }
            });
        const user = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((resp) => {
                if (resp && resp.data) {
                    setUserInfo(resp.data);
                    setLat(userInfo && userInfo.address && userInfo.address.geo && Number(userInfo.address.geo.lat));
                    setLng(userInfo && userInfo.address && userInfo.address.geo && Number(userInfo.address.geo.lng))
                }
            });


    }, []);
    console.log(userInfo, "userInfo:", userInfo && userInfo.address && userInfo.address.geo && Number(userInfo.address.geo.lat), lat);
    return (
        <div className='col'>
            <div className='row h-80' >
                <div className='col '>
                    <div className='row p-4'>
                        <p className='title-name'>{userInfo && userInfo.name}</p>
                        <p className='title-city'>{userInfo && userInfo.address && userInfo.address.city}</p>
                    </div>
                    <div className='row ' style={{ paddingTop: 30, paddingLeft: 20 }}>
                        <div className='d-inline-flex'>
                            <div className='subTitle'>Username :</div><div className='subTitle-info'>{userInfo && userInfo.username}</div>
                        </div>
                        <div className='d-inline-flex'>
                            <div className='subTitle'>phone :</div><div className='subTitle-info'>{userInfo && userInfo.name}</div>
                        </div >
                        <div className='d-inline-flex'>
                            <div className='subTitle'>email :</div><div className='subTitle-info'>{userInfo && userInfo.email}</div>
                        </div>
                        <div className='d-inline-flex'>
                            <div className='subTitle'>Website:</div><div className='subTitle-info'>{userInfo && userInfo.website}</div>
                        </div>
                        <div className='d-inline-flex'>
                            <div className='subTitle'>Company:</div><p className='subTitle-info'>{userInfo && userInfo.company && userInfo.company.name}</p>
                        </div>
                    </div>

                </div>
                <div className='col'>
                    <div style={{ overflow: "hidden", marginTop: 20, marginRight: 10 }}>
                        {userInfo && userInfo.address && userInfo.address.geo && userInfo.address.geo.lat && userInfo.address.geo.lng &&
                            <Map lat={userInfo && userInfo.address && userInfo.address.geo && Number(userInfo.address.geo.lat)}
                                lng={userInfo && userInfo.address && userInfo.address.geo && Number(userInfo.address.geo.lng)} />}
                    </div>
                </div>


            </div>

            <div className='row h-20'>
                <div className='d-flex justify-content-center'>
                    <hr style={{ width: "100%" }} />
                </div>
                <p style={{ padding: 60, textAlign: "center" }}>
                    {detailInfo && detailInfo.body}
                </p>
            </div>

        </div>
    );
}

export default ProfileDetail;
