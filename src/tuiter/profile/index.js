import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft,faLocationPin,faCalendar,faCake} from '@fortawesome/free-solid-svg-icons'

const ProfileComponent = () => {
    const profileArray = useSelector(state => state.profile)
    return(
        <div className="container">
            {
                profileArray.map(profile =>
                    <div>
                        <div className="row">
                            <div className="col-1 align-items-center p-3 ps-4">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                            <div className="col-11">
                                <span className="fw-bolder">{profile.firstName} {profile.lastName}</span><br/>
                                <span className="text-secondary" style={{"fontSize": "14px"}}>6114 Tuits</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3" style={{backgroundImage: `url(${"/images/" + profile.bannerPicture})`,"background-size":"cover","height":"200px","padding-top":"140px"}}>
                                    <img src={"/images/" + profile.profilePicture} height="120px" width="120px"style={{"zIndex":"0","border":"3px solid white"}} className="position-relative bottom-10 rounded-circle wd-bottom-left-profile bg-white ms-2"/>
                                </div>
                                <Link to={`${process.env.PUBLIC_URL}/tuiter/edit-profile`}>
                                    <button className="btn border fw-bold badge-pill m-2 float-end" style={{"borderRadius":"23px"}}>Edit Profile</button>
                                </Link>
                            </div>
                        </div>
                        <h2 className="mt-4">{profile.firstName} {profile.lastName}</h2>
                        <div className="text-secondary">{profile.handle}</div>
                        <div className="mb-3">{profile.bio}</div>
                        <div className="row mb-3">
                            <div className="col-3">
                                <FontAwesomeIcon icon={faLocationPin} />
                                <small> {profile.location}</small>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={faCake} />
                                <small> Born: {profile.dateOfBirth}</small>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={faCalendar} />
                                <small> Joined: {profile.dateJoined}</small>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-3"><b>{profile.followingCount}</b> Following</div>
                            <div className="col-3"><b>{profile.followersCount}</b> Followers</div>
                        </div>
                    </div>)
            }
        </div>
    );
};
export default ProfileComponent;