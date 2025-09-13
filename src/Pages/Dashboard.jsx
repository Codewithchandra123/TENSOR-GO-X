// import React from 'react';
// import { useAuth } from '../Context/AuthContext';
// import PageLayout from '../Components/PageLayout';

// const Dashboard = () => {
//   const { user, logout } = useAuth();

//   return (
//     <PageLayout title="Your Dashboard">
//       <p>
//         Welcome back, <strong className="text-teal-600">{user.email}</strong>!
//       </p>
//       <p>
//         This page is protected. Only logged-in users can see this content.
//       </p>
//       <div className="mt-6">
//         <button
//           onClick={logout}
//           className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Logout
//         </button>
//       </div>
//     </PageLayout>
//   );
// };

// export default Dashboard;