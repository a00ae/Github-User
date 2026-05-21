import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/Github-User">
      <div className="app">
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
