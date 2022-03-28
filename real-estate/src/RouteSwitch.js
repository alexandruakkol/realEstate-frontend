import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App';
import Login from './Login';

const RouteSwitch = () =>{
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
    )
}
export default RouteSwitch;