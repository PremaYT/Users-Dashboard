import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import UsersList from './components/UsersList'
import Pagination from './components/Pagination'
import UserDetails from './components/UserDetails'

function App() {
  const {users} = useSelector(state => state)

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(4)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  // change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const updateUsersPerPage = (count) => setUsersPerPage(count)

  const prevPage = () => setCurrentPage(currentPage === 1 ? currentPage : currentPage-1)
  const nextPage = (page) => setCurrentPage(currentPage === page ?  currentPage : currentPage+1)

  return (
    <div className="container mt-s">
      <h1>Header </h1>
        <Route path="/" render={(props) => {
              return <UsersList 
              {...props} 
              usersPerPage={usersPerPage}
              currentUsers={currentUsers}
              users={users}
              paginate={paginate}
              updateUsersPerPage={updateUsersPerPage}
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={setCurrentPage}
              />
          }} exact />
        <Route path="/users/:id" component={UserDetails} />

        
          
          
    </div>
  );
}

export default App;