import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

export const generateMetadata = async ({params})=>{
    const {id} = await params
    const news = await getNewsDetailsById(id);
    return{
        title: news.title,
        description: news.details
    }

}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailsById(id);
    // console.log(news);

    return (
        <div className="max-w-5xl mx-auto my-8">
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex items-center justify-between bg-slate-200 p-4">
                        <div className="flex gap-1 items-center">
                            <Image className="rounded-full" src={news.author?.img} alt={news.author.name} height={40} width={40} />
                            <div>
                                <h2 className="font-semibold">{news.author?.name}</h2>
                                <h2 className="text-xs">{news.author?.published_date}</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <CiShare2 className="text-2xl" />
                            <CiBookmark className="text-2xl" />
                        </div>
                    </div>

                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image className="w-full" src={news.image_url} alt={news.title} height={300} width={300} />
                    </figure>
                    <p className="">{news.details}</p>
                    <div>
                        <Link href={`/category/${news.category_id}`}>
                            <button className="text-orange-400 font-semibold cursor-pointer">All news in this category</button>
                        </Link>
                        <div className="flex items-center justify-between border-t-2 border-gray-500 pt-2 mt-4">
                            <div className="flex items-center justify-between gap-1">
                                <FaStar className="text-xl text-orange-400" />
                                <FaStar className="text-xl text-orange-400" />
                                <FaStar className="text-xl text-orange-400" />
                                <FaStar className="text-xl text-orange-400" />
                                <p>{news.rating?.number}</p>
                            </div>
                            <div className="flex items-center justify-between gap-2 font-bold">
                                {" "}
                                <FaEye /> {news.total_view}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;
