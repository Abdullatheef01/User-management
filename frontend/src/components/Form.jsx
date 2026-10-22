import { useEffect,useState } from "react"
import {createUser} from '../../services/userService'
const Form = () => {
      const [name,setName]=useState('')
      const [email,setEmail]=useState('')
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');
      const [loading, setLoading] = useState(false);
      const onSumbit =async(e)=>{
        e.preventDefault()
        try {
            const data= await createUser(name,email)
            alert(data.message)
            setMessage("User created successfully");
            setLoading(true);
            setError('');
            setMessage('');
          } catch (err) {
              setError('Unable to add user. Please try again.');
          } finally {
              setLoading(false);
          }
        }

  return (
    <div>
         <form onSubmit={onSumbit}>
        <h1>User Management</h1>
    <label htmlFor="name">name
      <input type="text" id="name" 
      value={name} onChange={(e)=>setName(e.target.value)}
      required
      />
    </label> <br />
      <label htmlFor="email">Email
        <input type="email" id="email" 
        value={email} onChange={(e)=>setEmail(e.target.value)}
        required/>
        
      </label>
      
      <button type="submit" disabled={loading}>
    {loading ? 'Adding...' : 'Add User'}
</button>
    </form>
    {error && <p className="error-message">{error}</p>}
    {message && <p className="success-message">{message}</p>}
    </div>
  )
}

export default Form