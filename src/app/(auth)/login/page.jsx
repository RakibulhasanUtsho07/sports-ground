"use client"

import { FaEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
// import { toast } from 'sonner';
// import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleLogin = async (data) => {
        const { email, password } = data
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });


    }
    const handleGoogleSingIn = async()=>{
    await authClient.signIn.social({
      provider: "google"
    })
  }
    return (
       <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-purple-50 to-slate-200 p-4 md:p-8">
            {/* Main Card Wrapper */}
            <div className="w-full max-w-[450px] bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6 transition-all duration-300">
                
                {/* Header */}
                <div className="text-center space-y-2">
                    <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Welcome Back</h3>
                    <p className="text-sm text-slate-500 font-medium">Login to manage your sports facilities</p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-1">Email Address</label>
                        <div className="relative flex items-center">
                            <HiOutlineMail className="absolute left-4 text-xl text-slate-400" />
                            <input 
                                type="email"
                                {...register("email", { required: "Email field is required" })}
                                className="w-full h-12 pl-12 pr-4 bg-white/60 border border-slate-200 text-slate-800 text-sm rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                                placeholder="name@example.com" 
                            />
                        </div>
                        {errors.email && (
                            <p className="text-xs text-red-500 font-medium pl-1 mt-0.5">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Password</label>
                            {/* Optional: আপনি চাইলে এখানে Forgot Password লিংক দিতে পারেন */}
                            <a href="#" className="text-xs font-semibold text-purple-600 hover:underline">Forgot?</a>
                        </div>
                        <div className="relative flex items-center">
                            <HiOutlineLockClosed className="absolute left-4 text-xl text-slate-400" />
                            <input 
                                type="password"
                                {...register("password", { required: "Password field is required" })}
                                className="w-full h-12 pl-12 pr-4 bg-white/60 border border-slate-200 text-slate-800 text-sm rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium placeholder:text-slate-400"
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
                        className="w-full h-12 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 transition-all duration-200 mt-2 active:scale-[0.99]"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-200/80"></div>
                    <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Or continue with</span>
                    <div className="flex-grow border-t border-slate-200/80"></div>
                </div>

                {/* Google Login Button */}
                <button 
                    
                    onClick={handleGoogleSingIn}
                    type="button"
                    className="w-full cursor-pointer h-12 flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.99]"
                >
                    <FcGoogle className="text-xl" />
                    Sign in with Google
                </button>

                {/* Footer Link */}
                <div className="text-center pt-2">
                    <p className="text-sm font-medium text-slate-500">
                        Don't have an account?{' '}
                        <Link className="text-purple-600 hover:text-purple-500 font-bold hover:underline transition-all ml-1" href="/register">
                            Register Now
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default LoginPage
