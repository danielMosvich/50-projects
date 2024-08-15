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
import { SoundBoard } from './pages/soundBoard'
import { DadJokes } from './pages/dadJokes'
import { EventKeycodes } from './pages/eventKeycodes'
import { FrequentlyAskedQuestion } from './pages/frequentlyAskedQuestion'
import { RandomChoicePicker } from './pages/randomChoicePicker'

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
    path:"/blurry-loading",
    element:<BlurryLoading/>,
    errorElement: <MainPage />,
  },
  {
    path:"/scroll-animation",
    element:<ScrollAnimation/>,
    errorElement: <MainPage />,
  },
  {
    path:"/split-landing-page",
    element:<SplitLandingPage/>,
    errorElement: <MainPage />,
  },
  {
    path:"/form-input-wave",
    element:<FormInputWave/>,
    errorElement: <MainPage />,
  },
  {
    path:"/sound-board",
    element:<SoundBoard/>,
    errorElement: <MainPage />,
  },
  {
    path:"/dad-jokes",
    element:<DadJokes/>,
    errorElement: <MainPage />,
  },
  {
    path:"/event-keycodes",
    element:<EventKeycodes/>,
    errorElement: <MainPage />,
  },
  {
    path:"/frequently-asked-questions",
    element:<FrequentlyAskedQuestion/>,
    errorElement: <MainPage />,
  },
  {
    path:"/random-choice-picker",
    element:<RandomChoicePicker/>,
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
