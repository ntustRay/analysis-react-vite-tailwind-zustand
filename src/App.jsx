import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import WeatherPage from './pages/WeatherPage';
import PopulationPage from './pages/PopulationPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/population" element={<PopulationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
