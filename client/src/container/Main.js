import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Donate from '../pages/Donate';
import Plant from '../pages/Plant';
import DailyDiary from '../pages/DailyDiary';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/plant' element={<Plant />} />
                <Route path='/dailydiary' element={<DailyDiary />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
