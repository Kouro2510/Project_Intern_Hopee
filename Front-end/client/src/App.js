
import './App.css';
import {Route, Routes} from "react-router-dom";
import LayoutAdmin from "~/layout/LayoutAdmin";
import AllProduct from "~/conpoments/admin/All-Products";



function App() {
  return (
      <Routes>
          <Route path="/" element={<LayoutAdmin><AllProduct/></LayoutAdmin>}/>
      </Routes>
  );
}

export default App;
