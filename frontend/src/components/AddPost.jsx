import { useEffect, useState } from "react";
import app from "../fireBase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const AddPost = () => {
  const [imageURL, setImageURL] = useState("");
  const [posts, setPosts] = useState(null);

  async function handleAdd(e) {
    console.log(e.target.files[0]);
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

  async function uploadPost() {
    const response = await fetch("http://localhost:3001/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageURL }),
    });
    if (response) {
      const data = await response.json();
      console.log(data);
      if (data.status == "ok") {
        alert("Uploaded Successfully");
        getPosts();
      } else {
        alert(data.status);
      }
    }
  }

  async function getPosts() {
    const response = await fetch("http://localhost:3001/get-posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      const data = await response.json();
      console.log(data);
      setPosts(data.data);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <input type="file" onChange={handleAdd} className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"/>
        <button onClick={uploadPost}           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Upload</button>
      </div>
      {imageURL && <img src={imageURL} className="w-48 h-48 object-cover rounded"
      />}

      {posts === null
        ? ""
        : posts.map((data, index) => (
            <img key={index} src={data.imageURL} className="className=mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" />
          ))}
    </div>
  );
};

export default AddPost;
