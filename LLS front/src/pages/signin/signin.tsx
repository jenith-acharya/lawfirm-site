import  { useState } from 'react';
import { Lock, Mail } from 'lucide-react';


const Signin = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-800 via-red-600 to-orange-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-2">Only for Members</h2>
          <p className="text-gray-600">Sign to Manage all of the site</p>
        </div>

        
        <form className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email" value={email} onChange={(e: any)=> setemail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 transition"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password" value={password} onChange={(e:any)=> setpassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-800 focus:ring-red-800 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button type="button" className="text-sm font-medium text-red-800 hover:text-red-700">
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button 
            type="submit"
            className="w-full bg-red-800 text-white rounded-lg py-3 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transform transition hover:scale-105"
          >
            Sign In
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default Signin;