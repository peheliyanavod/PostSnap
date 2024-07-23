import { useState } from "react";
import app from "../fireBase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const UploadPreview = ( getPosts ) => {
  const [imageURL, setImageURL] = useState("");
  const [caption, setCaption] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleUploadPreview = () => {
    setShowPreview(!showPreview);
    if (showPreview) {
      setImageURL("");
      setCaption("");
    }
  };

  async function handleAdd(e) {
    const image = e.target.files[0];

    if (image) {
      try {
        const storage = getStorage(app);
        const storageRef = ref(storage, "images/" + image.name);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        console.log(downloadURL);
        setImageURL(downloadURL);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function uploadPost(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageURL, caption }),
    });
    if (response) {
      const data = await response.json();
      console.log(data);
      if (data.status == "ok") {
        alert("Uploaded Successfully");
        getPosts; //todo: handle uploding is real time
        handleUploadPreview();
      } else {
        alert(data.status);
      }
    }
  }



  return (
    <div>
      {showPreview ? (
        <div className="flex flex-col items-center space-y-4 bg-gray-200 m-10 max-w-md p-6 rounded-lg">
          <form onSubmit={uploadPost} className="w-full">
            <label
              htmlFor="caption"
              className="text-sm font-medium text-gray-700 block"
            >
              Caption
            </label>
            <input
              type="text"
              name="caption"
              placeholder="Enter the caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            <input
              type="file"
              onChange={handleAdd}
              className="block w-full text-sm text-black mt-4
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-500 file:text-white
                hover:file:bg-blue-700"
            />
            {imageURL && (
              <img
                src={imageURL}
                alt="Preview"
                className="w-48 h-48 object-cover rounded mt-4"
              />
            )}
            <div className="flex flex-wrap">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded"
              >
                Upload
              </button>
              <button
                onClick={handleUploadPreview}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-3 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={handleUploadPreview}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +Post
        </button>
      )}
    </div>
  );
};

export default UploadPreview;
