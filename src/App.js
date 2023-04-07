import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Video from "./Video";

import Parent from "./parent";
import Result from "./result";
import Room from "./Room";

import GetAssigment from "./GetAssignment";
import Announcment from "./Announcment";
import Session from "./Session";

import Authe from "./Auth";
import { AuthContextProvider } from "./AuthContext";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/auth:id" />
       
          <Route path="/" element={<Authe />} />
          <Route path="/video" element={<Video />} />
          <Route path="/onlineclass" element={<Session />} />
          <Route path="/announcment" element={<Announcment />} />

          <Route path="/result" element={<Result />}></Route>
          <Route path="/result" element={<Result />}>
            <Route path="/result:id" />
          </Route>

          <Route path="/get-post" element={<GetAssigment />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
