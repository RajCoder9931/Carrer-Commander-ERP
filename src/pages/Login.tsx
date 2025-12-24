// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Lock, Mail, ArrowRight } from "lucide-react";

// export function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = (e: any) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // TODO: Implement actual login logic here
//     console.log("Login attempted with:", { email, password });

//     setTimeout(() => {
//       setIsLoading(false);
//       navigate("/dashboard");
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-200">
//             <Lock className="w-6 h-6 text-white" />
//           </div>
//           <h1 className="text-2xl font-bold text-[#0F1E3D] mb-2">
//             Welcome Back
//           </h1>
//           <p className="text-gray-500 text-sm">
//             Sign in to access your ERP dashboard
//           </p>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-700 block">
//               Email Address
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
//                 placeholder="you@company.com"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <label className="text-sm font-medium text-gray-700 block">
//                 Password
//               </label>
//               <Link
//                 to="/forgot-password"
//                 className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
//               >
//                 Forgot Password?
//               </Link>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
//                 placeholder="••••••••"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
//           >
//             {isLoading ? "Signing in..." : "Sign In"}
//             {!isLoading && <ArrowRight className="w-4 h-4" />}
//           </button>
//         </form>

//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500">
//             Don't have an account?{" "}
//             <a
//               href="#"
//               className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
//             >
//               Contact Admin
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// new code with update on saket code
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // temp user when real api is add then its remove this
  const MOCK_USER = {
    email: "raviraj@gmail.com",
    password: "12345",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    //  API call
    setTimeout(() => {
      if (
        email.trim() === MOCK_USER.email &&
        password.trim() === MOCK_USER.password
      ) {
        // save the local storage to show the data on sidebar 
        localStorage.setItem("erp_user_email", email.trim());

        toast.success("Login successful");
        navigate("/dashboard"); // dashboard route 
      } else {
        toast.error("Invalid email or password");
      }

      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-200">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#0F1E3D] mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in to access your ERP dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="raviraj@gmail.com"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 block">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="12345"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-70"
          >
            {isLoading ? "Signing in..." : "Sign In"}
            {!isLoading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <span className="font-semibold text-indigo-600">
              Contact Admin
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
