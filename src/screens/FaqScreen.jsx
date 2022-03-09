import React, { useEffect, useState } from "react";
import FAQ from "../components/components_2nd_Layer/FAQ";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";

export default function FaqScreen() {
  const [mount, setMount] = useState(false);
  const [faq, setFaq] = useState(null);

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
          <Navbar />
          <div className="w-full h-full bg-gray-300 box-border">
            <h1 className="text-4xl font-extrabold text-center p-10 bg-gray-800 shadow-2xl text-gray-200 border-b-4 border-[#0082CA]">
              FAQ: FREQUENTLY ASKED QUESTIONS
            </h1>

            <div className="w-full m-w-[768px] mx-auto p-[15px]">
              {faq &&
                faq.map((f, i) => (
                  <FAQ index={i} f={f} q={f.q} a={f.a} toggleFaq={toggleFaq} />
                ))}
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
