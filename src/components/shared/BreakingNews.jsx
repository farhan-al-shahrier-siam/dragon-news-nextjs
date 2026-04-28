import Marquee from "react-fast-marquee";

const news = [
  { id: 1, title: "Global Markets Rally Amid Economic Recovery Hopes" },
  { id: 2, title: "New Technology Trends Shaping the Future in 2026" },
  { id: 3, title: "Climate Change Talks Resume at International Summit" },
  { id: 4, title: "Breakthrough in Artificial Intelligence Announced" },
  { id: 5, title: "Major Sports Event Draws Millions of Viewers Worldwide" },
  { id: 6, title: "Government Introduces New Education Policy" },
  { id: 7, title: "Space Mission Successfully Lands on Lunar Surface" },
  { id: 8, title: "Healthcare Innovations Improve Patient Outcomes" },
  { id: 9, title: "Cybersecurity Concerns Rise with Digital Expansion" },
  { id: 10, title: "Renewable Energy Projects Gain Momentum Globally" }
];

const BreakingNews = () => {
    return (
        <div className="flex gap-4 justify-between items-center bg-gray-200 p-4 container mx-auto">
            <button className="btn bg-pink-500 text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={150}>
                {
                    news.map(n=> <span className="font-bold px-4" key={n.id}>{n.title}!!!</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;
