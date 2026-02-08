import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import Sankalp from './pages/Sankalp';
import Recruitment from './pages/Recruitment';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ourteam" element={<OurTeam />} />
                    <Route path="/sankalp" element={<Sankalp />} />
                    <Route path="/recruitment" element={<Recruitment />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
