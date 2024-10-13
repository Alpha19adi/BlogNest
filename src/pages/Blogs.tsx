import BlogSkeletonLoader from "@/components/SkeletonCard";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {loading,blogs}=useBlogs();
    
    if(loading){
        return (
            <BlogSkeletonLoader/>
        )
    }
  return (
    <div className="bg-[#EAE7DC]">
        <Appbar/>
      <div className="flex justify-center">
        <div >
          {blogs.map(blog=><BlogCard
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title={
              blog.title
            }
            content={
             blog.content
            }
            date={blog.date}
          />)}  
          
        </div>
      </div>
    </div>
  );
};
