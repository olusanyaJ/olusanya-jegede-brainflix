import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/videos/:activeVideoId" element={<Main />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
