"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = async (data) => {
        const { name, email, photo, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
    };

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="p-20 rounded-xl bg-white ">
                <h2 className="font-bold text-3xl text-center mb-6 border-b border-gray-200 pb-4">Login your account</h2>
                <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input {...register("email", { required: "Email is required" })} type="email" className="input" placeholder="Enter your email address" />

                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input {...register("password", { required: "Password is required" })} type="password" className="input" placeholder="Enter your password" />

                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn bg-slate-800 text-white w-full">Login</button>

                    <p className="text-center">
                        <small>
                            Dont’t Have An Account ?{" "}
                            <Link href="/register" className="text-red-500 hover:underline">
                                Register
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
