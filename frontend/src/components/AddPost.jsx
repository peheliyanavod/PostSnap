import { useEffect, useState } from "react";
import UploadPreview from "./UploadPreview";

const AddPost = () => {

  const [posts, setPosts] = useState(null);

   const getPosts = async () => {
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
        <UploadPreview getPosts={getPosts}/>

      {posts === null
        ? ""
        : posts.map((data, index) => (
            <div
              key={index}
              className="m-10 max-w-md bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Username
                </h3>
                <p className="mt-2 text-gray-600">{data.caption}</p>
                <img
                  src={data.imageURL}
                  alt="Post Image"
                  className="mt-4 w-full h-64 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
    </div>
  );
};

export default AddPost;
