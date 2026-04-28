import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import RightSideBar from "@/components/Homepage/news/RightSideBar";

const getCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data;
};

export default async function Home() {
    const categories = await getCategories();
    console.log(categories.news_category);
    return (
        <div className="grid grid-cols-12 gap-4 my-15 container mx-auto">
            <div className="col-span-3 ">
                <LeftSidebar activeID={null} categories={categories}></LeftSidebar>
            </div>
            <div className="font-bold text-3xl bg-purple-100 col-span-6 ">All news</div>
            <div className="col-span-3 ">
              <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}
