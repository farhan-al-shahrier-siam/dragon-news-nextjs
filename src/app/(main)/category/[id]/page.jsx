import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import NewsCard from "@/components/Homepage/news/NewsCard";
import RightSideBar from "@/components/Homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategories();

    const news = await getNewsByCategoryId(id);


    return (
        <div className="grid grid-cols-12 gap-4 my-15 container mx-auto">
            <div className="col-span-3 ">
                <LeftSidebar activeID={id} categories={categories}></LeftSidebar>
            </div>
            <div className="col-span-6 ">
            <h2 className="font-bold text-lg mb-6">News by Category</h2>
                
                <div className="space-y-4">
                    {news.length>0? news.map((n) => <NewsCard news={n} key={n._id}></NewsCard>): <h2 className="font-bold text-3xl text-center">No news Found!!!</h2>}
                </div>
            </div>
            <div className="col-span-3 ">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default NewsCategoryPage;
