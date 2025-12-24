// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { AppLayout } from './components/layout/AppLayout';
// import { Dashboard } from './pages/Dashboard';
// import { ServiceOrderManagement } from './pages/ServiceOrderManagement';
// import { AnalyticsReporting } from './pages/AnalyticsReporting';
// import { UpcomingMeetings } from './pages/UpcomingMeetings';
// import { Notification } from './pages/Notifications';
// import {Login} from './pages/Login';
// import { Toaster } from 'react-hot-toast';
// export function App() {
//   return <BrowserRouter>
// <Toaster
//   position="top-right"
//   toastOptions={{
//     duration: 2000,
//     style: {
//       animation: 'slideIn 0.3s ease-out',
//     },
//   }}
// /> 
//       <Routes>
 
//         <Route element={<AppLayout />}>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/service-orders" element={<ServiceOrderManagement />} />
//           <Route path="/analytics" element={<AnalyticsReporting />} />
//           <Route path="/notification" element={<Notification/>}/>
//           <Route path="/meetings" element={<UpcomingMeetings />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>;
// }
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { ServiceOrderManagement } from './pages/ServiceOrderManagement';
import { AnalyticsReporting } from './pages/AnalyticsReporting';
import { UpcomingMeetings } from './pages/UpcomingMeetings';
import { Notification } from './pages/Notifications';
import { Login } from './pages/Login';
import { Dummy } from './pages/dummy';
import { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from './components/layout/ProtectedRoute' ;

export function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/*  Auth Guard */}
        <Route element={<ProtectedRoute />}>
          {/*   Layout ke saath protected routes */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/service-orders" element={<ServiceOrderManagement />} />
            <Route path="/analytics" element={<AnalyticsReporting />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/meetings" element={<UpcomingMeetings />} />
            <Route path="/dummy" element={<Dummy />} />
          </Route>
        </Route>

        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
