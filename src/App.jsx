import React from 'react'
import Joke from './components/Joke'

function App() {
  return (
    <>
    <div className="bg-indigo-500 min-h-screen flex flex-col items-center  justify-center">
      <img src="..assets/joke.jpg" className='w-60 h-30 md:w-80 md:h-40 rounded-lg' alt="" />
   <Joke/>
</div>


 </>
  )
}

export default App