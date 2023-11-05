import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [videosData, setVideosData] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_BASE_URL);
      setVideosData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!videosData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/videos/:activeVideoId" element={<Main />} />
          <Route
            path="/upload"
            element={<UploadPage fetchData={fetchData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
