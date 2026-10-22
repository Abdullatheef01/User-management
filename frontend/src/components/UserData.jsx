import {useEffect,useState} from 'react'
import{getUser} from '../../services/userService'
const UserData = () => {
const [users,setUsers]=useState([])
const [message, setMessage] = useState('');
useEffect(() => {
  const fetchUsers = async () => {
    const data = await getUser();
    setUsers(data);
  };

  fetchUsers();
}, [users]);
const deleteUser = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/${id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Delete failed');
        }

        setUsers(users.filter((user) => user._id !== id));
        setMessage('User deleted successfully!');
    }
    
     catch (error) {
        console.log(error);
    }
};
const updateUser = async (id, name, email) => {
    try {
        const res = await fetch(`http://localhost:3000/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        if (!res.ok) {
            throw new Error('Update failed');
        }

        const data = await res.json();

        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user._id === id ? data.user : user
            )
        );
        setMessage('User updated successfully!');
    } catch (error) {
        console.log(error);
    }
};
  return (
    <>
   <h2>Users List</h2>
    {message && <p className="success-message">{message}</p>}
<div className="users-container">
    {users.map((user) => (
        <div className="user-card" key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <button onClick={() => deleteUser(user._id)}>
                Delete
            </button>

            <button
                onClick={() => {
                    const name = prompt('Enter new name:', user.name);
                    if (name === null) return;

                    const email = prompt('Enter new email:', user.email);
                    if (email === null) return;

                    updateUser(user._id, name, email);
                }}
            >
                Edit
            </button>
        </div>
    ))}
</div>
    </>
  )
}

export default UserData