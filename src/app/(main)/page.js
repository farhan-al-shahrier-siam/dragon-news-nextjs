import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-cols-12 gap-4 my-15 container mx-auto">
            <div className="font-bold text-3xl bg-green-100 col-span-3 ">
              All Categories
            </div>
            <div className="font-bold text-3xl bg-purple-100 col-span-6 ">
              All news
            </div>
            <div className="font-bold text-3xl bg-yellow-100 col-span-3 ">
              Social icons
            </div>
        </div>
    );
}
