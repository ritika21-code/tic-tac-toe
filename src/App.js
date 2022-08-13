import React from 'react'
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Computer from './Computer'
import Two from './Two'
import Home from './Home'
import Share from './Share';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
<Route path='/' element={<Share/>}>
<Route index element={<Home/>}/>
<Route path='comp' element={<Computer/>}/>
<Route path='two' element={<Two/>}/>
</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App