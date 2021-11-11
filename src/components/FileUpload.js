import React,{ useState} from 'react'

function FileUpload() {
    const [fileData, setfileData] = useState(null)

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
