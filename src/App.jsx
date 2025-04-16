
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import JobsListing from './pages/JobsListing';
import Job from './pages/Job';
import PostedJobs from './pages/PostedJobs';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import { ThemeProvider } from './components/theme-provider';

// const router = createHashRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: '/',
//         element: <LandingPage />,
//       },
//       {
//         path: '/onboarding',
//         element: <Onboarding />,
//       },
//       {
//         path: '/jobs',
//         element: <JobsListing />,
//       },
//       {
//         path: '/job/:id',
//         element: <Job />,
//       },
//       {
//         path: '/post-job',
//         element: <PostedJobs />,
//       },
//       {
//         path: '/saved-job',
//         element: <SavedJobs />,
//       },
//       {
//         path: '/my-jobs',
//         element: <MyJobs />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="jobs" element={<JobsListing />} />
          <Route path="job/:id" element={<Job />} />
          <Route path="post-job" element={<PostedJobs />} />
          <Route path="saved-job" element={<SavedJobs />} />
          <Route path="my-jobs" element={<MyJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
