import React, { useEffect, useState } from "react";

function ShowTestimonials() {
  const [comments, setComments] = useState(null);

  const fetchComments = () => {
    fetch("http://localhost:5000/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {comments &&
            comments.map((comment) => (
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={comment?.Link}
                  />
                  <p className="leading-relaxed">{comment?.commentBody}</p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-200 font-medium title-font tracking-wider text-sm">
                    {comment?.commentAuthor}
                  </h2>
                  <p className="text-gray-400">Senior Product Designer</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ShowTestimonials;
