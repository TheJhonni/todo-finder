import React, { useEffect, useState } from "react";
import Network from "../components_2nd_Layer/Network";

function ShowTestimonials() {
  const [testimonials, setTestimonials] = useState(null);

  const fetchTestimonials = () => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className="text-gray-600 rounded bg-gray-100 mx-auto w-[80%] body-font">
      <h2 className="text-7xl text-[#1E657B] text-center font-bold pt-5">
        TESTIMONIALS:
      </h2>
      <div className="flex justify-center items-center container px-10">
        <p className="max-w-[700px] ml-10 text-lg font-medium">
          Our connections are very valuable to us. We appreciate each person's
          time and effort. Thanks to this scientists and researchers we've
          achieved so many results such as new precious data that we transformed
          into new posts.
        </p>
        <div className="ml-auto mt-10 mr-10 h-[300px] w-[300px]">
          <Network />
        </div>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonials &&
            testimonials.map((testimonial) => (
              <div key={testimonial.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={testimonial?.Link}
                  />
                  <p className="leading-relaxed">
                    {testimonial?.testimonialBody}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-emerald-400 mt-6 mb-4"></span>
                  <h2 className="text-gray-800 font-medium title-font tracking-wider text-sm">
                    {testimonial?.testimonialAuthor}
                  </h2>
                  <p className="text-gray-400">{testimonial?.occupation}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ShowTestimonials;
