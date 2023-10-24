import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <div className="App">
      <Header />
      <UploadPage />
      {/* <Main /> */}
    </div>
  );
}

export default App;
