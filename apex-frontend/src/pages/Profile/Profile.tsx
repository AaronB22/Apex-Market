import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import './Profile.css';
import { redirect } from 'react-router-dom';

const Profile = () => {
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useAuth();
  const { logout } = useAuth();
  useEffect(() => {
    if (!user) {
      redirect('/signin')
    }
    else {
      setLoading(false)
    }
  }, [user])
  if (loading) {
    return <main><p>Loading profile...</p></main>;
  }

  if (error && user === null) {
    return <main><p>{error}</p></main>;
  }


  const changeEditMode = async() => {

    if (edit) {
      setEdit(false);
      const result = await fetch("http://localhost:3000/api/user/update-user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: user?.username,
          location: user?.location,
          age: user?.age,
          bio: user?.bio
        })

      })
      const data= await result.json()
      console.log(data)
    }
    else {
      setEdit(true);
    }
  }



  if (user !== null) {
    return (
      <div className="profile">
        <div className="profileImgBody">
          {user.profileimgurl ? (
            <img
              src={user.profileimgurl}
              className="profileImg"
              alt="Profile"
            />
          ) : (
            <div className="profileImg_placeholder">No Image</div>
          )}
        </div>

        <div className="profileBody">
          <h1 className="profileName">{user.username}</h1>
          <p className="profileMeta">Age: {edit ? <input type="number" value={user.age ?? ''} onChange={(e) => setUser({ ...user, age: Number(e.target.value) })} /> : <span>{user.age}</span>}</p>
          <p className="profileMeta">Location: {edit ? <input type="text" value={user.location ?? ''} onChange={(e) => setUser({ ...user, location: e.target.value })} /> : <span>{user.location}</span>}</p>

          {!edit ? (
            <textarea
              className="profileBio"
              value={user.bio}
              readOnly
            />
          ) : (
            <textarea
              className="profileBio editable"
              onChange={e => setUser({ ...user, bio: e.target.value })}
              value={user.bio}
            />
          )
          }
        </div>
        <div className='profileBtns'>
          <button onClick={changeEditMode}>{edit ? (<span>Save</span>) : (<span>Edit</span>)}</button>
          <button onClick={logout}>Signout</button>
        </div>
      </div>
    )

  }

}

export default Profile
