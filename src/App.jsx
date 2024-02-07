import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPoke";
import DetailPage from "./pages/DetailPoke";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}
export default App;
