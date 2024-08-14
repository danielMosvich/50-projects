import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages'
import { ExpandingCards } from './pages/expandingCards'
import {ProgressSteps } from './pages/progressEsteps'
import { RotatingNavigationAnimation } from './pages/rotatingNavigationAnimation'
import { HiddenSearch } from './pages/hiddenSearch'
import { BlurryLoading } from './pages/blurryLoading'
import { ScrollAnimation } from './pages/scrollAnimation'
import SplitLandingPage from './pages/splitLandingPage'
import { FormInputWave } from './pages/formInputWave'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <MainPage />,
  },
  {
    path: '/expanding-cards',
    element:<ExpandingCards/>,
    errorElement: <MainPage />,
  },
  {
    path: '/progress-steps',
    element:<ProgressSteps/>,
    errorElement: <MainPage />,
  },
  {
    path:"/rotating-navigation-animation",
    element:<RotatingNavigationAnimation/>,
    errorElement: <MainPage />,
  },
  {
    path:"/hidden-search",
    element:<HiddenSearch/>,
    errorElement: <MainPage />,
  },
  {
    path:"blurry-loading",
    element:<BlurryLoading/>,
    errorElement: <MainPage />,
  },
  {
    path:"scroll-animation",
    element:<ScrollAnimation/>,
    errorElement: <MainPage />,
  },
  {
    path:"split-landing-page",
    element:<SplitLandingPage/>,
    errorElement: <MainPage />,
  },
  {
    path:"form-input-wave",
    element:<FormInputWave/>,
    errorElement: <MainPage />,
  }
])
function App() {
  return (
    <RouterProvider router={router} />
    // <MainPage />
  )
}

export default App
