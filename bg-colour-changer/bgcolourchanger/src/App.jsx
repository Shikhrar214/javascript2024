import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState('olive')

  return (
   <div className = "w-full h-screen duration-200"
   style={{backgroundColor: colour}}
   >
    <div 
    className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

      <div
      className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'
      >


       <button
       onClick={()=>setColour("black")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'black'}}
       >black</button> 

        <button
        onClick={()=>setColour("brown")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'brown'}}
       >brown</button> 

        <button
        onClick={()=>setColour("red")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'red'}}
       >red</button> 

        <button
        onClick={()=>setColour("orange")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'orange'}}
       >orange</button> 

        <button
        onClick={()=>setColour("yellow")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'yellow'}}
       >yellow</button> 

        <button
        onClick={()=>setColour("green")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'green'}}
       >green</button> 

        <button
        onClick={()=>setColour("blue")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'blue'}}
       >blue</button> 

        <button
        onClick={()=>setColour("violet")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'violet'}}
       >violet</button> 

        <button
        onClick={()=>setColour("grey")}
       className='outline-non px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: 'grey'}}
       >grey</button> 

        <button
        onClick={()=>setColour("white")}
       className='outline-non px-4 py-1 rounded-full text-black shadow-lg'
       style={{backgroundColor: 'white'}}
       >white</button>  
      </div>   
    </div>
   </div>
  )
}

export default App
