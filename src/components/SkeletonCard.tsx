const SkeletonBlogCard = () => {
  return (
    <div className="border-b p-4 pb-4 border-slate-200 animate-pulse">
      <div className="flex gap-2">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mt-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mt-4"></div>
    </div>
  );
};

const BlogSkeletonLoader = () => {
  return (
    <div>
      <div className="h-16 bg-gray-200 w-full mb-4"></div>
      <div className="flex justify-center ">
        <div className="max-w-xl w-full">
          {[1, 2, 3,4,5].map((i) => (
            <SkeletonBlogCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSkeletonLoader;