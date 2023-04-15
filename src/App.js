import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from './admin';
import Parent from './Parent';
import Result from './Result';
import Pass from './pass';
import Final from './final';

import Announcment from './Announcment';
import Video from './video';
import Room from './Room';
import Mid from "./Mid";
import PostAssigment from './PostAssigment';
import GetAssigment from './GetAssigment';
import Add from './Add';
import Addd, { AddDataForm } from './T';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/video" element={<Video />} />
        <Route path="/final" element={<Final />} />
        <Route path="/mid" element={<Mid />} />
        <Route path="/add" element={<Add />} />
        <Route path="/announcment" element={<Announcment />} />
        <Route path="/a" element={<AddDataForm/>} />

        <Route path="/pass" element={<Pass />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/parent" element={<Final />} />
        <Route path="/result" element={<Result />}>
          <Route path="/result:id" />
        </Route>

        <Route path="/post-home" element={<PostAssigment />} />
        <Route path="/get-post" element={<GetAssigment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;