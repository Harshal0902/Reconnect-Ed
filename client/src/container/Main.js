import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Donate from '../pages/Donate';
import Plant from '../pages/Plant';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/plant' element={<Plant />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
