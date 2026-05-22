"use client"

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed, HiOutlinePhotograph } from 'react-icons/hi';
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form"

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const handleRegistration = async (data) => {
    const {email, name, photo, password}  = data;
    
    console.log(data, "data")
    const {data:res , error } = await authClient.signUp.email({
      name: name, 
      email: email, 
      password: password, 
      image: photo,
      callbackURL: "/",

    })
    console.log(res, error);
    if(error){
      alert(error.message)
    }
    if(res){
      alert("SingUp Successfully")
    }

  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-purple-50 to-slate-200 p-4 md:p-8">
           
            <div className="w-full max-w-[500px] bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6 transition-all duration-300">
                
                {/* Header */}
                <div className="text-center space-y-2">
                    <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Create Account</h3>
                    <p className="text-sm text-slate-500 font-medium">Join us to book and manage your sports fields</p>
                </div>

                {/* Google Sign Up Button (Top Priority Alternative) */}
                <button 
                    type="button"
                    className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.99]"
                >
                    <FcGoogle className="text-xl" />
                    Sign up with Google
                </button>

                {/* Divider */}
                <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-slate-200/80"></div>
                    <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Or register with email</span>
                    <div className="flex-grow border-t border-slate-200/80"></div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                    
                    {/* Name Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">Full Name</label>
                        <div className="relative flex items-center">
                            <HiOutlineUser className="absolute left-4 text-xl text-slate-400" />
                            <input 
                                type="text"
                                {...register("name", { required: "Name field is required" })}
                                className="w-full h-12 pl-12 pr-4 bg-white/60 border border-slate-200 text-slate-800 text-sm rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                                placeholder="Rakib hasan" 
                            />
                        </div>
                        {errors.name && (
                            <p className="text-xs text-red-500 font-medium pl-1 mt-0.5">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Photo URL Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">Photo URL</label>
                        <div className="relative flex items-center">
                            <HiOutlinePhotograph className="absolute left-4 text-xl text-slate-400" />
                            <input 
                                type="text"
                                {...register("photo", { required: "Photo URL field is required" })}
                                className="w-full h-12 pl-12 pr-4 bg-white/60 border border-slate-200 text-slate-800 text-sm rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                                placeholder="https://example.com/avatar.jpg" 
                            />
                        </div>
                        {errors.photo && (
                            <p className="text-xs text-red-500 font-medium pl-1 mt-0.5">{errors.photo.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">Email Address</label>
                        <div className="relative flex items-center">
                            <HiOutlineMail className="absolute left-4 text-xl text-slate-400" />
                            <input 
                                type="email"
                                {...register("email", { required: "Email field is required" })}
                                className="w-full h-12 pl-12 pr-4 bg-white/60 border border-slate-200 text-slate-800 text-sm rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                                placeholder="name@example.com" 
                            />
                        </div>
                        {errors.email && (
                            <p className="text-xs text-red-500 font-medium pl-1 mt-0.5">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">Password</label>
                        <div className="relative flex items-center">
                            <HiOutlineLockClosed className="absolute left-4 text-xl text-slate-400" />
                            <input 
                                type="password"
                                {...register("password", { required: "Password field is required" })}
                                className="w-full h-12 pl-12 pr-4 bg-white/60 border border-slate-200 text-slate-800 text-sm rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                                placeholder="••••••••" 
                            />
                        </div>
                        {errors.password && (
                            <p className="text-xs text-red-500 font-medium pl-1 mt-0.5">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full h-12 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 transition-all duration-200 mt-4 active:scale-[0.99]"
                    >
                        Create Free Account
                    </button>
                </form>

                {/* Footer Link */}
                <div className="text-center pt-2 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-500">
                        Already have an account?{' '}
                        <Link className="text-green-600 hover:text-green-500 font-bold hover:underline transition-all ml-1" href="/login">
                            Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
  )
}

export default RegisterPage