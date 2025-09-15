import React,{useState} from 'react'

function Joke() {
    const[joke , setJoke] = useState("")

    const fetchApi = () =>{
       fetch("https://sv443.net/jokeapi/v2/joke/Programming")
        . then((res) => res.json())
        .then((data) =>  setJoke(data.joke))
        .catch((err) => console.error(err))
    };
  return (
    <div>
            <div className='flex flex-col mt-3 items-center'>
                <button className='bg-purple-100 px-4 py-2 md:px-20 md:py-3 rounded-2xl text-purple-700 hover:bg-purple-300 hover:text-pink-700 active:bg-purple-300 active:text-pink-700  text-center font-bold text-xl md:text-2xl duration-300' onClick={fetchApi}>Mast Joke</button>
                <p className='text-center mt-6 min-h-20 text-white text-lg  md:text-xl mx-1'>{joke}</p>
            </div>
    </div>
  )
}

export default Joke