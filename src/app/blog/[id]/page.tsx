import Back from "@/components/back";
import blogs from "@/../public/blog.json";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: BlogPageProps) {
  const id = parseInt(params.id);
  const blog = blogs.posts.find((post) => post.id === id);

  return (
    <div className="app">
      <Back />
      {blog ? (
        <main className="blog">
          <h1 className="title">{blog.title}</h1>
          <p className="content text-xl p-5 text-pretty">{blog.content}</p>
        </main>
      ) : (
        <div className="error">
          <h1 className="title">Blog not found</h1>
        </div>
      )}
    </div>
  );
}
