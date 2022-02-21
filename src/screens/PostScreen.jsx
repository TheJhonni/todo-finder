import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Post({ post }) {
  let { asin } = useParams();

  useEffect(() => {
    console.log(post);
  }, []);

  return (
    <div className="img-textLeft">
      <Navbar />
      <section Name="text-gray-600 body-font">
        <div Name="container px-5 py-24 mx-auto flex flex-col">
          <div Name="lg:w-4/6 mx-auto">
            <div Name="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                Name="object-cover object-center h-full w-full"
                src={post[0].img1}
              />
            </div>
            <div Name="flex flex-col sm:flex-row mt-10">
              <div Name="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div Name="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"></div>
                <div Name="flex flex-col items-center text-center justify-center">
                  <h2 Name="font-medium title-font mt-4 text-gray-900 text-lg">
                    Phoebe Caulfield
                  </h2>
                  <div Name="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p Name="text-base"> {post[0].title}</p>
                </div>
              </div>
              <div Name="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p Name="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <a Name="text-indigo-500 inline-flex items-center">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
