import { FullBlog } from "@/components/FullBlog";
import { useBlog } from "@/hooks"
import { useParams } from "react-router-dom";
export const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, blog } = useBlog({
    id: id || ""
  });

  if(loading || !blog){
    return <div className="flex-col gap-4 w-full min-h-screen flex items-center justify-center">
      <div
        className="w-32 h-32 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
      >
        <div
          className="w-24 h-24 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
        ></div>
      </div>
    </div>
    
  }

  return (
    <div >
      <FullBlog blog={blog} />
    </div>
  )
}
