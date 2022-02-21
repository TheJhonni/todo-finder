export default function Post({ post }) {
  return (
    <div className="">
      <h1 className="font-semibold my-8 text-3xl text-white">{post.title}</h1>
      <img src={post.img} className="my-4 w-full" />
    </div>
  );
}
