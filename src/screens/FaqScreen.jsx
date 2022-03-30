import React, { useEffect, useState } from "react";
import FAQ from "../components/components_2nd_Layer/FAQ";
import Gif from "../components/Spinner/Gif";

export default function FaqScreen() {
  const [mount, setMount] = useState(false);
  const [faq, setFaq] = useState(null);

  const loadFaq = async () => {
    try {
      await fetch(`http://localhost:5000/faq`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setFaq(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      loadFaq();
    }, 800);
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
          <div className="w-full h-full img-textLeft bg-gray-300 box-border">
            <div className="flex align-center justify-center text-4xl font-extrabold py-10 px-10 shadow-2xl border-b-4 border-[#5FD38D]">
              <span className="text-center text-gray-300">
                FAQ: FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <div className="w-full m-w-[768px] mx-auto p-[15px]">
              {faq &&
                faq.map((f, i) => (
                  <FAQ
                    key={i}
                    index={i}
                    f={f}
                    q={f.q}
                    a={f.a}
                    toggleFaq={toggleFaq}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        // <Spinner />
        <Gif />
      )}
    </>
  );
}
