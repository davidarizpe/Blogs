import blogs from "@/../public/blog.json";
import Blog from "@/components/blog";

export default function Home() {
  return (
    <div className="App">
      <h1 className="title">Our blog</h1>
      <main className="main flex flex-col items-center p-5">
        <div className="features">
          {blogs.features.map((feature) => (
            <Blog key={feature.id} blog={feature} />
          ))}
        </div>
        <div className="posts">
          {blogs.posts.map((post) => (
            <Blog key={post.id} blog={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
