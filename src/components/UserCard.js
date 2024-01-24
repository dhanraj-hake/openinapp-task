import React from "react";


const UserCard = ({name, email, phone, youtube, insta}) => {
  return (
    <div className="w-100 p-4">
        <h4 className="my-3 mb-4">{name}</h4>
        <div className="d-flex">
            <div className="d-flex align-items-center" >
                <img width="40px" src="watsapp.svg" alt="" className="" /> <p style={{width : "120px"}} className="m-0 mx-2">{phone}</p>
            </div>
            <div className="mx-5 d-flex align-items-center">
            <img width="40px" src="insta.svg" alt="" className="" /> <p className="m-0 mx-2">{insta}</p>
            </div>
        </div>

        <div className="d-flex my-3">
            <div className="d-flex align-items-center" >
                <img width="40px" src="email.svg" alt="" className="" /> <p style={{width : "120px"}} className="m-0 mx-2">{email}</p>
            </div>
            <div className="mx-5 d-flex align-items-center">
            <img width="40px" src="yt.svg" alt="" className="" /> <p className="m-0 mx-2">{youtube}</p>
            </div>
        </div>

    </div>
  )
}

export default UserCard
