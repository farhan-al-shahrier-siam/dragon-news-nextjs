import logo from "@/assets/logo.png";
import Image from "next/image";
const Header = () => {
    const date = new Date();

    const formatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // console.log(formatted);

    return (
        <div className="text-center py-8 space-y-2">
            <Image src={logo} width={300} height={200} alt="Logo" className="mx-auto"></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{formatted}</p>
        </div>
    );
};

export default Header;
