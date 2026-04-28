import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between mt-6 gap-4">
            <div></div>
            <ul className="flex justify-between items-center gap-3 text-gray-600">
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/about-us">About</NavLink>
                </li>
                <li>
                    <NavLink href="/career">Career</NavLink>
                </li>
            </ul>

            <div className="flex items-center justify-between gap-2">
                <Image
                    src={userAvatar}
                    height={35}
                    width={35}
                    alt="user avatar"
                ></Image>

                <button className="btn bg-purple-700 text-white">
                    <Link href="/login">Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;