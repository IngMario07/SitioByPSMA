import { useState } from 'react'
import { AnalyticsTracker } from "./AnalyticsTracker";
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <>
    <AnalyticsTracker />
      <AppRouter />
    </>
  )
}

export default App
