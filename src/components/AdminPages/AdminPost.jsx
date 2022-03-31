import Table from "../components_2nd_Layer/adminPosts/Table";

export default function AdminPost({ posts, deletePost }) {
  return (
    <div className="h-screen ml-12 w-fit md:w-[70%]">
      <div className="absolute rounded bg-transparent md:top-[5%] md:left-[30%] z-99">
        <Table posts={posts} deletePost={deletePost} />
      </div>
    </div>
  );
}
