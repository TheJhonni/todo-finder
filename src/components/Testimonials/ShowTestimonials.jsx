import React, { useEffect, useState } from "react";

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
      <h2 className="text-4xl text-center font-bold pt-5">TESTIMONIALS:</h2>
      <div className="container px-5 py-24 mx-auto">
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
