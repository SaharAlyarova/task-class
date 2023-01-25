import HomePage from "../pages/home/home"
import {
    Route,Routes
  } from "react-router-dom"
import AddPage from "../pages/addpage/addpage"
const RouteCom = () => {
    return (
        <div className='routecom'>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/addpage" element={<AddPage/>}></Route>
       </Routes>
        </div>
    )
}
export default RouteCom 