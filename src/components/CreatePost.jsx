import React from "react";
import { FaPen } from "react-icons/fa";

const CreatePost = () => {
  return (
    <div>
      <div className="flex items-center border-2 border-gray-500 px-10 rounded-full py-2">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="p-4 text-2xl  outline-none"
        />
         {/* create post icon */}
         <div>
             <FaPen className="text-2xl"/>
         </div>
      </div>
    </div>
  );
};

export default CreatePost;
