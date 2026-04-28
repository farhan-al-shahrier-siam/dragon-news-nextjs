import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div>
            <h2 className="font-bold text-lg mb-4">Login With</h2>
            <div className="flex flex-col gap-2">
                <button className="btn text-blue-500 border-blue-500">
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;
