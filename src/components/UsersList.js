import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

import UserItem from './UserItem'
import Pagination from './Pagination'

const UsersList = (props) => {
    const {currentUsers} = props
    
    return (
        <div>
            <h1 className="mb-3">Listing Users</h1>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers.map((user) => (
                            <UserItem key={user.id} {...user} />
                        ))
                    }
                </tbody>
            </Table>
            <Pagination 
                usersPerPage={props.usersPerPage} 
                totalUsers={props.users.length} 
                paginate={props.paginate} 
                updateUsersPerPage={props.updateUsersPerPage}
                prevPage={props.prevPage}
                nextPage={props.nextPage}
                currentPage={props.currentPage}
            />
        </div>
    )
}

export default UsersList
