"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = (data) => {};

    return (
        <div className="container mx-auto min-h-screen flex justify-center items-center bg-slate-100">
            <div className="py-10 px-20 rounded-xl bg-white ">
                <h2 className="font-bold text-3xl text-center mb-6 border-b border-gray-200 pb-4">Register your account</h2>
                <form onSubmit={handleSubmit(handleRegisterFunc)} className="space-y-4">

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input {...register("name", { required: "Name is required" })} type="text" className="input" placeholder="Enter your name" />

                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input {...register("photo", { required: "Photo URL is required" })} type="text" className="input" placeholder="Enter your photo URL" />

                        {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                    </fieldset>

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

                    <button className="btn bg-slate-800 text-white w-full">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
