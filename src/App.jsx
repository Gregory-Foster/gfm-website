import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import PrayerRequests from './pages/PrayerRequests';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Donations from './pages/Donations';
import Podcast from './pages/Podcast';
import RecordTestimony from './pages/RecordTestimony';
import Store from './pages/Store';
import LiveStream from './pages/LiveStream';
import Chat from './pages/Chat';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/prayer-requests" element={<PrayerRequests />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/record-testimony" element={<RecordTestimony />} />
            <Route path="/store" element={<Store />} />
            <Route path="/live-stream" element={<LiveStream />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
        <Footer variant="scripture" />
      </div>

      <style jsx>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
        }
      `}</style>
    </Router>
  );
}

export default App;