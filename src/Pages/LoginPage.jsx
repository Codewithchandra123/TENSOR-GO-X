// import React, { useState } from 'react';
// import { useAuth } from '../Context/AuthContext';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // --- MOCK LOGIN ---
//     // In a real app, you would send this to your backend API
//     if (email === 'user@example.com' && password === 'password') {
//       console.log('Login successful');
//       login({ email });
//     } else {
//       setError('Invalid email or password. (Hint: user@example.com / password)');
//     }
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center py-20">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="user@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;