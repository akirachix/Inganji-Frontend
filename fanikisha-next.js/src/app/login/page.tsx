
// 'use client';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { MdOutlineVisibilityOff, MdVisibility } from "react-icons/md"; 
// import { useRouter } from 'next/navigation';
// import { userLogin } from '../utils/fetchlogin'; 
// import Cookies from 'js-cookie'; 

// const loginSchema = Yup.object().shape({
//   username: Yup.string().required('Required'),
//   password: Yup.string().required('Required'),
// });

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginError, setLoginError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter(); 

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     validationSchema: loginSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       const { username, password } = values;
//       try {
//         const data = await userLogin({ username, password });
//         console.log('login successful:', data);
        
//         Cookies.set('token', data.token, { expires: 7 }); 

//         router.push('/dashboard'); 
//       } catch (err) {
//         console.error('login error:', err);
//         setLoginError('login failed. Please check your credentials.');
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(prevState => !prevState);
//   };

//   const handleGoogleLogin = () => {
//     window.location.href = 'https://fanikisha-3beb7fcefffe.herokuapp.com/auth/login';
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 border border-blue-400 shadow-md w-[1040px] h-[1000px]">
//         <h1 className="text-5xl work-sans font-bold mb-6 mt-20 text-center">Welcome Back!</h1>
//         <p className="text-center mb-6 text-2xl">
//           Don't have an account?{' '}
//           <a href="#" className="text-blue-500 font-bold hover:underline">
//             SignUp
//           </a>
//         </p>

//         <form onSubmit={formik.handleSubmit}>
//           {loginError && (
//             <div className="text-red-500 text-sm mt-1 text-center">{loginError}</div>
//           )}

//           <div className="mb-12 mt-24">
//             <label htmlFor="username" className="block mb-2 text-2xl font-medium ml-32">
//               Username:
//             </label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.username}
//               className="w-[690px] px-3 py-4 border border-blue-400 rounded-lg ml-32"
//             />
//             {formik.touched.username && formik.errors.username && (
//               <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
//             )}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block mb-2 text-2xl font-medium ml-32">
//               Password:
//             </label>
//             <div className="relative">
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? 'text' : 'password'} 
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}
//                 className="w-[690px] px-3 py-4 border border-blue-400 rounded-lg ml-32"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-40 items-center pr-3 flex text-3xl text-blue-500"
//                 onClick={togglePasswordVisibility} 
//               >
//                 {showPassword ? <MdVisibility /> : <MdOutlineVisibilityOff />} 
//               </button>
//             </div>
//             {formik.touched.password && formik.errors.password && (
//               <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
//             )}
//           </div>
//           <div className='text-2xl font-bold ml-32'>
//             <h2>Forgot password</h2>
//           </div>

//           <button
//             type="submit"
//             className={`w-40 ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white font-bold py-2 rounded-md hover:bg-blue-600 ml-96 mt-16 text-2xl`}
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <div className="mt-4 -ml-10 text-center">
//           <span className="text-gray-500 text-2xl">or</span>
//         </div>

//         <button
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className={`flex items-center justify-center ml-80 px-4 py-2 border mt-6 rounded-full border-blue-400 border-b-2`}
//         >
//           <Image src="/images/google-icon.png" alt="Google Icon" width={30} height={30} />
//           <span className={`ml-2 text-2xl font-work-sans  ${loading ? "text-gray-400" : "text-gray-800"}`}>
//             {loading ? "Signing in..." : "Sign in with Google"}
//           </span>
//         </button>

//       </div>

//       <div className="hidden lg:block ml-8 mb-20">
//         <Image src="/images/login_vector.png" alt="login" width={890} height={820} />
//       </div>
//     </div>
//   );
// }