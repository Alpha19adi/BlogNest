import { Appbar } from "./Appbar";
import { Blog } from "@/hooks";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const fnameletter = blog.author.name || "Anonymous";
    const creationDate = new Date(blog.date);
    const formattedDate = creationDate.toLocaleString('en-IN', {
        // year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'IST'
    });

    return (
        <div>
            <Appbar />
            <div className="flex justify-center ">
                <div className="grid grid-cols-12 w-full px-10 pt-12 max-w-screen-2xl">
                    <div className="col-span-8 mr-5">
                        <div className="text-5xl font-bold">{blog.title}</div>
                        <div className="text-slate-500 pt-2">Posted on {formattedDate}</div>
                        <div className="pt-4">{blog.content}</div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <div
                                    className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-600 rounded-full`}
                                >
                                    <span className="text-sm text-white">
                                        {fnameletter[0]}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    This is a Random catch phrase about author to grab readers
                                    attention will change it later.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};