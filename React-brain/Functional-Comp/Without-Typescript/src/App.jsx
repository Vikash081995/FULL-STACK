import { useState } from 'react'
import Accordion from './components/Accordion'
import { items } from './data/Accordion-data'



function App() {


  return (
    <>
     <Accordion items={items} />
    </>
  )
}

export default App
