import { useState } from 'react'
import axios from 'axios'
import './App.css'

function Temp() {
    const [file, setFile] = useState("")
    const [fileUrl, setFileUrl] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const fileData = new FormData()
            fileData.append("file", file)

            const responseData = await axios({
                method: "POST",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: fileData,
                headers: {
                    pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
                    pinata_secret_api_key: import.meta.env.VITE_PINATA_SECRET_KEY,
                    "Content-Type": "multipart/form-data"
                }
            });

            const fileUrl = "https://gateway.pinata.cloud/ipfs/" + responseData.data.IpfsHash
            console.log(fileUrl)
            setFileUrl(fileUrl)


            const getFIRResponse = await axios({
                method: "GET",
                url: fileUrl,
            });
            console.log(getFIRResponse)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>IPFS</h1>
            <form>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit" onClick={handleSubmit}>Upload</button>
            </form>
        </div>
    )
}

export default Temp