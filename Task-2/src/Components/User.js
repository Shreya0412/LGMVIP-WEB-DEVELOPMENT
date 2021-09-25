import React from 'react'

const UserCard = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c49c83ef51b0c4230f8f39560b8250a3-1596267998/navy_for-light_bg/make-animated-logo-loader-for-your-website.gif" alt="..." className="loader"/>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column-3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p className="userId">User_ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default UserCard;