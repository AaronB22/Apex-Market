import { useEffect, useState } from 'react';
import type { User } from '../types/user';
import { getUser } from '../services/userAPI';
import './Profile.css';

const Profile = () => {
    const [error, setError] = useState("");
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadUser() {
            try {
                const data = await getUser();
                setUser(data)
               

            }
            catch (err) {
                setError("Failed to load user");
                console.error(err);
            }
            finally {
                setLoading(false)
            }
        }
        loadUser()
    }, [])
    if (loading) {
        return <main><p>Loading profile...</p></main>;
    }
    
    if (error && user===null) {
        return <main><p>{error}</p></main>;
    }
    if(user!==null){
        return (
            <div className="profile">
                {user.profileimgurl ? (
                    <img
                        src={user.profileimgurl}
                        className='profileImg'
                    />
                ) : (
                    <div className='profileImg_placeholder'> No Image </div>
                )}
                <h1>{user.username}</h1>
            </div>
        )

    }
}

export default Profile