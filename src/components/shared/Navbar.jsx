"use client";
import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user);
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

            {isPending ? (
                <span className="loading loading-infinity loading-xl"></span>
            ) : user ? (
                <div className="flex items-center justify-between gap-2">
                    <h2>Hello, {user.name}</h2>
                    <Image src={user.image || userAvatar} height={35} width={35} alt="user avatar"></Image>

                    <button onClick={async () => await authClient.signOut()} className="btn bg-purple-700 text-white">
                        Logout
                    </button>
                </div>
            ) : (
                <button className="btn bg-purple-700 text-white">
                    <Link href="/login">Login</Link>
                </button>
            )}
        </div>
    );
};

export default Navbar;
