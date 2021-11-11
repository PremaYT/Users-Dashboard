import React from 'react'

function FileUpload(){

    const handleFileChange = (e) => {
        const data = e.target.files[0]
        console.log(data)
    }
    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
        </div>
    )
}

export default FileUpload
