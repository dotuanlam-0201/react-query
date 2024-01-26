import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundComponent from "./modules/404/NotFoundComponent"
import HomeComponent from "./modules/home/HomeComponent"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
