import React, { useState} from 'react'
import QrReader from 'react-qr-reader'

function QRCodereader() {
    const [result, setResult] = useState('scanning')
    const [isCameraOn, setISCameraOn] = useState(true)
    const handleScan = (data) => {
        console.log(data)
        if(data){
            setResult(data)
            setISCameraOn(false)
        }
    }

    const onError = (e) => {
        console.log(e)
    }
    return (
        <div>
            { isCameraOn && <QrReader
                delay={ 300 }
                onScan = { handleScan}
                onError={ onError}
                style={{width: "100%"}}
            >
                
            </QrReader>}
            {result && <p>{result}</p>}
            
        </div>
    )
}

export default QRCodereader
