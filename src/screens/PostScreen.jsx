import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Post({ post }) {
  let { asin } = useParams();

  useEffect(() => {
    console.log(post);
  }, []);

  return (
    <>
      <div className="img-textLeft">
        <Navbar />
        <main className="relative z-100 container mx-auto bg-[#ffffffd2] px-4">
          <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
            <img
              className="absolute inset-0 object-cover object-top w-full h-full filter blur"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
          </div>

          <div className="mt-[-10%] w-1/2 mx-auto">
            <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
              <img
                className="w-full h-full absolute inset-0 object-cover"
                src={post[0].img1}
                alt=""
              />
            </div>
          </div>

          <article className="max-w-prose mx-auto py-8">
            <h1 className="text-2xl font-bold">{post[0].title}</h1>
            <h2 className="mt-2 text-sm text-gray-500">
              <a className="hover:text-blue-700" href={post[0].authorLink}>
                {post[0].author}
              </a>
              , 28 November 2021
            </h2>
            <h2 className="mt-2 text-sm text-gray-500">
              {post[0].p}, <br />{" "}
              <a
                className="hover:text-blue-700 text-xs mt-3"
                href={post[0].link}
              >
                CLICK HERE to read the Original Article
              </a>
            </h2>

            <p className="mt-6">{post[0].body[0]}</p>
            <p className="mt-4">{post[0].body[1]}</p>
            <p className="mt-4">{post[0].body[2]}</p>
            <p className="mt-4">{post[0].body[3]}</p>
            <p className="mt-4">{post[0].body[4]}</p>
            <p className="mt-4">{post[0].body[5]}</p>
            <p className="mt-4">{post[0].body[6]}</p>
            <p className="mt-4">{post[0].body[7]}</p>
            <p className="mt-4">{post[0].body[8]}</p>
            <p className="mt-4">{post[0].body[9]}</p>
            <p className="mt-4">{post[0].body[10]}</p>
          </article>
        </main>
      </div>
    </>
  );
}
