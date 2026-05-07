import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import './Profile.css';
import { redirect } from 'react-router-dom';

const Profile = () => {
    const [error, setError] = useState("");
    const [edit, setEdit]= useState(false)
    const [loading, setLoading] = useState(true);
    const { user, setUser } = useAuth();
    const {logout}=useAuth();
    useEffect(() => {
      if(!user){
        redirect('/signin')
      }
      else{
        setLoading(false)
      }
    }, [user])
    if (loading) {
        return <main><p>Loading profile...</p></main>;
    }

    if (error && user===null) {
        return <main><p>{error}</p></main>;
    }


    const changeEditMode=()=>{
      if(edit){
        setEdit(false);
      }
      else{
        setEdit(true);
      }
    }



  if(user!==null){
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
    <p className="profileMeta">Age: <span contentEditable={edit}>{user.age}</span></p>
    <p className="profileMeta" >Location: <span contentEditable={edit}>{user.location}</span></p>

    {!edit ? (
      <textarea
        className="profileBio"
        value={user.bio}
        readOnly
      />
    ):(
      <textarea
      className="profileBio"
      value={user.bio}
    />
    )
    }
  </div>
  <div className='profileBtns'>
    <button onClick={changeEditMode}>{edit ?(<span>Save</span>):(<span>Edit</span>)}</button>
    <button onClick={logout}>Signout</button>
  </div>
</div>
        )

    }
    
}

export default Profile
