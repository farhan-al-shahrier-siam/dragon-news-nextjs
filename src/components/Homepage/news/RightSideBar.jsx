"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    };

    return (
        <div>
            <h2 className="font-bold text-lg mb-6">Login With</h2>
            <div className="flex flex-col gap-2">
                <button onClick={handleGoogleSignin} className="btn text-blue-500 border-blue-500">
                    <FaGoogle /> Login with Google
                </button>
                <button onClick={handleGithubSignin} className="btn ">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;
