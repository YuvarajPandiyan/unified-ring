import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./page/home-page";
import { Plan } from "./page/plan";

const NoMatch = () => <h1>404 page not found</h1>;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="plan" element={<Plan />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
