import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import AddScreen from "./screens/AddScreen";
import UpdateScreen from "./screens/UpdateScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/crud1" element={<Dashboard/>}/>
          <Route path="/crud1/add" element={<AddScreen/>}/>
          <Route path="/crud1/update/:id" element={<UpdateScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
