import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminCreateNewPost() {
  const navigate = useNavigate();

  //   const [mount, setMount] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [body, setBody] = useState("");
  const [img1, setImg1] = useState("");
  const [p, setP] = useState("");

  const PostNewData = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm("Are you sure you want to post this article?")) {
        const resp = await fetch(`http://localhost:5000/myPosts`, {
          method: "POST",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify({
            category: "generic",
            author,
            title,
            subtitle,
            body,
            id: Math.floor(Math.random() * (999 - 200) + 200).toLocaleString(),
            img1,
            p,
          }),
        });
        if (resp.ok) {
          alert("saved succesfully");
          navigate("/homePage");
        }
        // setEditing(fullBody);
      }
    } catch (err) {
      console.log(err, " error");
    }
  };

  return (
    // Component Start
    <>
      <div className="absolute w-[55%] h-[60%] top-[25%] bottom-0 left-[20%] right-0 flex flex-col justify-center py-10 mx-4 border-gray-300 text-gray-300">
        <div className="container sm:max-w-[200px] sm:mx-auto md:max-w-[400px] md:mr-auto lg:max-w-full">
          <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
            <h1 className="text-xl font-semibold">CREATE NEW POST</h1>
            <p className="flex items-center h-8 px-2 text-sm bg-gray-900 rounded-sm">
              ADMIN
            </p>
          </div>
          <form className="flex max-w-full p-8">
            <img
              src="data:image/png;base64,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"
              className="flex-shrink-0 w-12 h-12 mr-2 bg-gray-400 rounded-full"
            />
            <div className="flex flex-col justify-center space-x-2 space-y-2 w-full">
              <p>Author:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name=""
                id=""
                type="text"
                rows="1"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <p>Title:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name=""
                id=""
                type="text"
                rows="1"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <p>Subtitle:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name=""
                id=""
                type="text"
                rows="1"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
              <p>Paste your Image Link:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name=""
                id=""
                type="text"
                rows="1"
                value={img1}
                required
                onChange={(e) => setImg1(e.target.value)}
              />
              <p>Paragraph:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name=""
                id=""
                type="text"
                rows="1"
                value={p}
                onChange={(e) => setP(e.target.value)}
              />
              <div className="flex flex-col flex-grow ml-4">
                <p>Post:</p>
                <textarea
                  className="p-3 bg-transparent border border-gray-500 rounded-sm h-[300px]"
                  name=""
                  id=""
                  type="text"
                  rows="3"
                  value={body}
                  required
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>

              <div className="flex">
                <button
                  onClick={PostNewData}
                  className="flex items-center h-8 px-3 text-xs rounded-sm bg-gray-900 hover:bg-gray-400"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
