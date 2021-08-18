import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'



const UserDetails = (props) => {
    const { id } = props.match.params
    const {users} = useSelector(state => state) 
    const [user, setUser] = useState({})
    
    useEffect(() => {
        const result = users.find(ele => ele.id == id)
        console.log(result)
        setUser(result)
    }, [users])
    
    
    return (
        <div>
            {
                user  && <div className="card mt-5 w-50">
                <h5 className="card-header">{user.name}</h5>
                <div className="card-body">
                    <p>Email : {user.email}</p>
                    <p>Phone : {user.phone}</p>
                    <p>Website : {user.website} </p>
                    
                    
                    <button className="button btn-primary btn-end" onClick={() => props.history.push('/')}>Back</button>
                </div>
            </div>
            }
        </div>
    )
}

export default UserDetails
