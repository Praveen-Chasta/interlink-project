'use client'

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<'signup' | 'signin'>('signup')

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center overflow-hidden" style={{ backgroundColor: '#FAF9FB' }}>
    {/* Left section with gradient background */}
    <CardContent className="w-auto h-auto relative hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center bg-gradient-to-br p-6">
      {/* You can add content here if needed */}
    </CardContent>
  
    {/* Right section with form content */}
    <div className="flex w-auto items-center justify-center px-0 h-[80vh]">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <img src="images/interlink-logo.png" alt="Internlink Logo" className="w-8 h-8" />
            <span className="font-semibold">Internlink</span>
          </div>
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-[2.6em] font-black text-black leading-[50px] text-center font-inter mb-2">
            Unlock Candidate Insights with Ease.
          </h1>
          <p className="font-inter text-2xl font-bold text-black leading-[55px] text-center">
            Join Internlink Admin Today.
          </p>

        </div>
        <div className="flex gap-4 mb-6 bg-white rounded-l-full rounded-r-full w-[60%] mx-auto">
          <Button
            className={`flex-1 transition-all duration-900 ease-in-out ${activeTab === 'signup' ? 'bg-blue-500 rounded-full hover:bg-blue-600' : 'bg-white-200 hover:bg-white-500 text-gray-800'}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </Button>
          <Button
            className={`flex-1 transition-all duration-900 ease-in-out ${activeTab === 'signin' ? 'bg-blue-500 rounded-full hover:bg-blue-600' : 'bg-white-200 hover:bg-white-500 text-gray-800'}`}
            onClick={() => setActiveTab('signin')}
          >
            Sign In
          </Button>
        </div>


        <div className="space-y-4">
          <p className="text-start text-sm text-gray-600">
            {activeTab === 'signup' ? 'Sign up to your account:' : 'Sign in to your account:'}
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-start text-sm font-medium text-gray-700">
                Work email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="username@gmail.com"
                className="w-full text-start"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-start text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full pr-10 text-start"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
          <Button className="w-full bg-teal-800 hover:bg-teal-900">
            {activeTab === 'signup' ? 'Create an account' : 'Sign in'}
          </Button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Need Help?{' '}
              <Link href="mailto:support@internlink.com" className="text-teal-800 hover:underline">
                support@internlink.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}


