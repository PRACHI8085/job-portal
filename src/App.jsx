
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Button } from './components/ui/button';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import JobsListing from './pages/JobsListing';
import Job from './pages/Job';
import PostedJobs from './pages/PostedJobs';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/jobs" element={<JobsListing />} />
            <Route path="/job/:id" element={<Job />} />
            <Route path="/post-job" element={<PostedJobs />} />
            <Route path="/saved-job" element={<SavedJobs />} />
            <Route path="/my-jobs" element={<MyJobs />} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

