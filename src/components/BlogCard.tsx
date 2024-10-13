import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    id: number;
    date: Date; 
}

export const BlogCard = ({
    authorName,
    title,
    content,
    id,
    date
}: BlogCardProps) => {
  const creationDate = new Date(date);
    const formattedDate = creationDate.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC'  
    });

    return (
        <Link to={`/blog/${id}`}> 
            <div className="border-b p-4 pb-4 border-slate-200 w-screen max-w-screen-md cursor-pointer">
                <div className="flex gap-2">
                    <div className="flex justify-center flex-col font-extralight text-sm">
                        <div className="pr-2 ">
                            <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full`}>
                                <span className="text-sm text-white">{authorName[0]}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {authorName} 
                    </div>
                    <div className="text-[6px] flex justify-center items-center">
                        &#9679;
                    </div>
                    <div className="font-thin text-slate-500">{formattedDate}</div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin ">
                    {content.slice(0,100)+ "..."}
                </div>
                <div className="text-slate-500 font-thin pt-4">
                    {`${Math.ceil(content.length/100)} minute(s)`}
                </div>
            </div>
        </Link>
    );
}



export function Avatar({name}:{name : string}){
    return <div className="pr-2 ">
    <div
      className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full`}
    >
      <span className="text-sm text-white">{name[0]}</span>
    </div>
  </div>
}

