import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Components/Student";
import Studview from "./Components/Studview";
import Studentimage from "./Components/Studentimage";




function App() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
  <Route path={'/Student'} element={<Student/>}></Route>
  <Route path={'/Studentview'} element={<Studview/>}></Route>
  <Route path={'/Studentimage'} element={<Studentimage/>}></Route>
 

 </Routes>
 </BrowserRouter>

    </div>
  );
}

export default App;
