
import Home from "./pages/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Authe from "./pages/Auth";
import { AuthContextProvider } from "./context/AuthContext";
import VideoCall from "./pages/VideoCall";
import Settings from "./pages/Settings";
import Notice from "./pages/Notice";
import Result from "./components/Result";
import HomeWork from "./pages/Homework";
import Attend from "./pages/Attend";
import Books from "./components/Books";
import { QuizProvider } from "./context/quiz";
import Quiz from "./components/Quiz";
import Mock from "./pages/Mock";
import Stats from "./components/Stats";
import Calender from "./components/Calender";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <QuizProvider>

        <Routes>
        <Route path="/" element={<Authe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videocall" element={<VideoCall />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/assignment" element={<HomeWork />} />
        <Route path="/attend" element={<Attend />} />
        <Route path="/test" element={<Quiz />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/stats" element={<Stats />} />
          <Route path="/cal" element={<Calender />} />
    
          <Route path="/result/:id" element={<Result />} >
          <Route path=":id"></Route>
        </Route>
        
        <Route path="/book/:id" element={<Books />} >
          <Route path=":id"></Route>
        </Route>

        </Routes>
        </QuizProvider>
        
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
