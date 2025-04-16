
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobsListing from './pages/JobsListing'
import Job from './pages/Job'
import PostedJobs from './pages/PostedJobs'
import SavedJobs from './pages/SavedJobs'
import MyJobs from './pages/MyJobs'
import { ThemeProvider } from './components/theme-provider'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path:'/',
        element: <LandingPage/>
      },
      {
        path:'/onboarding',
        element: <Onboarding />
      },
      {
        path:'/jobs',
        element: <JobsListing />
      },
      {
        path:'/job/:id',
        element: <Job />
      },
      {
        path:'/post-job',
        element: <PostedJobs />
      },
      {
        path:'/saved-job',
        element: <SavedJobs />
      },
      {
        path:'/my-jobs',
        element: <MyJobs />
      },

      

    ]
  },
])
function App() {
  

  return (
    
    <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
