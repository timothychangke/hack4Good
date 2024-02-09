import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import TrackerPage from './pages/Tracker';
import DashboardPage from './pages/Dashboard';
import Sentiment from './pages/Sentiment'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import { NatureContextProvider } from './context/natureContext';
import { store } from './store/store';
import { Provider } from 'react-redux';
import NatureTracker from './pages/NatureTracker';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
    return (
        <Provider store={store}>
            <NatureContextProvider>
            <UserContextProvider>
                <Navbar />
                <Toaster
                    position="bottom-right"
                    toastOptions={{ duration: 2000 }}
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/tracker" element={<TrackerPage />} />
                    <Route path='/naturetracker' element= {<NatureTracker/>}/>
                    <Route path='/dashboard' element= {<DashboardPage/>}/>
                    <Route path='/sentiment' element= {<Sentiment/>}/>
                </Routes>
            </UserContextProvider>
            </NatureContextProvider>
        </Provider>
    );
}

export default App;
