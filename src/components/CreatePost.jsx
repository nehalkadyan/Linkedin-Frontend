import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const CreatePost = () => {
  // state variable for post content
  const [content, setContent] = useState("");
  console.log("content", content);

  const [isSendButtonEnabled, setIsSendButtonEnabled] = useState(false);
  // isSendButtonEnabled = false

  return (
    <div>
      <div className="flex items-center border-2 border-gray-500 px-10 rounded-full py-2">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="p-4 text-2xl  outline-none"
          onChange={(e) => setContent(e.target.value)}
        />
        {/* create post icon */}
        <div>
            {/* if false then show pen icon */}
          {!isSendButtonEnabled && (
            <FaPen
              onClick={() => setIsSendButtonEnabled(true)}
              className="text-2xl cursor-pointer"
            />
          )}

          {
            // is isSendButtonEnabled = true then only show send icon
            isSendButtonEnabled && <IoIosSend className="text-4xl cursor-pointer" />
          }
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
