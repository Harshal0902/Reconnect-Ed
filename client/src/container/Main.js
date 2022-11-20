import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Music from '../pages/Music';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
