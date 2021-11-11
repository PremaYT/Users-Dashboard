import React from 'react'

function Pagination(props) {
    const { usersPerPage, totalUsers, paginate, updateUsersPerPage, prevPage, nextPage} = props

    const pageNumbers = []
    for(let i=1; i<=Math.ceil(totalUsers/usersPerPage); i++){
        pageNumbers.push(i)
    }
    

    return (
        <div className="row">
            <div className="col-md-2">
                <input 
                    type="number" 
                    value={usersPerPage} 
                    onChange={(e) => updateUsersPerPage(Number(e.target.value))} 
                    min="3"
                    max="6"
                    className="form-control"
                    />
            </div>
            <div className="col-md-6">
                {/* <nav>
                    <ul className="pagination">
                        <li className="page-item"  data-toggle="tab">
                            <a className="page-link" href="#" aria-label="Previous" onClick={() => prevPage()} id="prevPage">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {
                            pageNumbers.map(number => (
                                <li key={number} className="page-item"  data-toggle="tab">
                                    <a href="#" onClick={() => {paginate(number)}} className="page-link" id="nextPage">{number}</a>
                                </li>
                            ))
                        }
                        <li className="page-item"  data-toggle="tab">
                            <a className="page-link" href="#" aria-label="Next" onClick={() => nextPage(pageNumbers.length)}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav> */}
            </div>
            
        </div>
        
    )
}

export default Pagination
