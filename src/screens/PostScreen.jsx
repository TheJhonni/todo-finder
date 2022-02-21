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

      <main className="relative container mx-auto bg-white px-4">
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
            <a href={post[0].authorLink}> {post[0].author}</a>, 28 November 2021
          </h2>
          <h2 className="mt-2 text-sm text-gray-500">
            {post[0].p}, <br />{" "}
            <a href={post[0].link}>CLICK HERE to read the Original Article</a>
          </h2>

          <p className="mt-6">{post[0].body}</p>
          {/* <p className="mt-4">
            Praesent ornare interdum gravida. Donec efficitur leo suscipit
            aliquet pellentesque. In quis purus et dui mollis vulputate. Aenean
            non faucibus felis. Phasellus non aliquet est, non dictum sem. In
            hac habitasse platea dictumst. Integer vehicula elit ac libero
            egestas ornare non sed dolor. Integer vulputate id est nec pulvinar.
            Cras nec sollicitudin lacus, quis sagittis diam. Donec porta libero
            ac lorem semper, eget porttitor quam fermentum. Ut tincidunt feugiat
            sem, nec aliquam mi tincidunt non.
          </p>
          <p className="mt-4">
            Etiam accumsan leo sem, sit amet faucibus ex convallis fermentum.
            Nunc tristique, eros eget rutrum accumsan, dolor quam varius nisl,
            ut euismod arcu urna a lectus. Mauris at dapibus metus. Vestibulum
            ipsum lorem, dictum vitae sapien eget, rutrum rhoncus sapien.
            Vivamus a nisi ut risus porta ultricies. Etiam mollis massa odio,
            non eleifend leo ullamcorper in. Sed ultricies, magna id fermentum
            volutpat, lorem orci placerat mauris, et molestie ipsum mauris sed
            sapien. Aliquam nulla lorem, pretium ut interdum dapibus, suscipit
            at metus. Proin consequat euismod consequat. Aenean placerat turpis
            et pretium condimentum. Nunc hendrerit tellus semper suscipit
            dignissim. Nullam fringilla, sem nec volutpat tincidunt, ex eros
            congue diam, quis venenatis mauris urna et dolor. Vivamus aliquam
            euismod eros vel pulvinar. Cras arcu augue, rutrum nec velit sit
            amet, aliquet lobortis leo. Donec placerat, libero in blandit
            mattis, turpis nisl varius urna, ac pellentesque dui nisi sit amet
            dui.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            sapien nisi. Sed molestie quis odio ut facilisis. Duis porttitor
            turpis at sollicitudin ornare. Aenean vitae nulla justo. In egestas
            consequat sem, dapibus gravida velit. Nullam dictum, ligula vel
            porttitor vestibulum, est enim lobortis erat, eget rutrum nunc ex at
            mauris. Nunc nec laoreet ipsum. Sed vel est a eros sagittis
            vulputate. Proin cursus ut mauris vel commodo. Sed non sapien metus.
          </p> */}
        </article>
      </main>
    </div>
  );
}
