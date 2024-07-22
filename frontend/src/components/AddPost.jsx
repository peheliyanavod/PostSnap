import { useState } from "react"

const AddPost = () => {
    const [file,setFile] = useState("");

    const handleAdd = () => {
        console.log(file);
    }

  return (
    <div>
        <div>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
            <button onClick={handleAdd}>Upload</button>
        </div>
    </div>
  )
}

export default AddPost; 