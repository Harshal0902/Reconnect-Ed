import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Donate from '../pages/Donate';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path='/donate' element={<Donate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
