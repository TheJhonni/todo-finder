import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";

export default function FaqScreen() {
  const navigate = useNavigate();
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

  return (
    <>
      {mount ? (
        <div className="w-screen h-screen img-textLeft">
          <Navbar />
          <div className="container">
            <h1 className="text-4xl my-7 font-extrabold text-center text-gray-200">
              FAQ: FREQUENTLY ASKED QUESTIONS
            </h1>
            {faq &&
              faq.map((f) => (
                <div className="" key={f.id}>
                  <h1 className="">{f.q}</h1>
                  <p>{f.a}</p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
