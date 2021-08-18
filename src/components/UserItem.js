import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startDeleteUser } from '../actions/usersActions'


const UserItem = (props) => {
    const {id, name, email, phone} = props

    const dispatch = useDispatch()

    const handleRemove = () => {
        const confirm = window.confirm('are you sure?')
        console.log(confirm)
        if(confirm){
            dispatch(startDeleteUser(id))
        }
    }

    

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td style={{textAlign:"center"}}><button className="button btn-primary btn-sm">
                <Link to={`/users/${id}`} style={{textDecoration:'none', color:'white'}}>Open</Link>
                </button></td>
            <td style={{textAlign:"center"}}><button className="button btn-danger btn-sm" onClick={handleRemove}>Delete</button></td>
        </tr>
    )
}

export default UserItem
