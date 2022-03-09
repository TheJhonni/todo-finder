import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FAQ from "../components/components_2nd_Layer/FAQ";
import Spinner from "../components/Spinner/Spinner";
import Gif from "../components/Spinner/Gif";

export default function FaqScreen() {
  const [mount, setMount] = useState(false);
  const [faq, setFaq] = useState(null);

  const navigate = useNavigate();

  const loadFaq = () => {
    setTimeout(() => {
      setMount(false);
      fetch(`http://localhost:5000/faq`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setFaq(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    loadFaq();
  }, []);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((f, i) => {
        if (i === index) {
          f.open = !f.open;
        } else {
          f.open = false;
        }
        return f;
      })
    );
  };
  return (
    <>
      {mount ? (
        <>
          <div className="w-full h-full bg-gray-300 box-border">
            <div className="flex align-center justify-evenly text-4xl font-extrabold py-5 px-10 bg-gray-500 shadow-2xl border-b-4 border-[#0082CA]">
              <span className="mr-auto" onClick={() => navigate("/homePage")}>
                <div className="rounded">
                  <img
                    className="object-cover relative  bg-transparent shadow-sm w-[100px] h-[50px] cursor-pointer"
                    src="logos/logo.png"
                  />
                </div>
                <p className="text-lg ml-5"> Go back</p>
              </span>
              <span className="text-center mr-auto">
                FAQ: FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <div className="w-full m-w-[768px] mx-auto p-[15px]">
              {faq &&
                faq.map((f, i) => (
                  <FAQ index={i} f={f} q={f.q} a={f.a} toggleFaq={toggleFaq} />
                ))}
            </div>
          </div>
        </>
      ) : (
        // <Spinner />
        <div className="w-full h-full bg-transparent">
          <Gif />
        </div>
      )}
    </>
  );
}
