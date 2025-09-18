import { Suspense } from 'react'
import './App.css'
import Count from './Count'
import ToggleMessage from './ToggleMessage'
import Users from './Users'
import Welcome from './Welcome'


const userFetch = async () => {
  const ref = await fetch('https://jsonplaceholder.typicode.com/users')
  
  return ref.json()
}
function App() {
  const userPromise =userFetch()
  return (
    <>
      <Suspense fallback={<p>Users Loading...</p>}>
       
        <Users userPromise={userPromise}></Users>
      </Suspense>

      <Welcome></Welcome>
      <ToggleMessage></ToggleMessage>
      <Count></Count>

    </>
  )
}

export default App
