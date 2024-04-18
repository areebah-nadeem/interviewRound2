import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Finance from './components/Finance';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="side-nav-bar">
          <div className="logo">
         
            <img src="" alt="Company Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/finance">Finance</Link>
              </li>
              <li>
                <Link to="/data">Data</Link>
              </li>
              <li>
                <Link to="/service-requests">Service Requests</Link>
              </li>
            </ul>
          </nav>
          <div className="bottom-links">
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/notifications">Notifications</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
  {/* <Route path="/overview" element={<Overview />} /> */}
  <Route path="/finance" element={<Finance />} />
  {/* <Route path="/data" element={<Data />} />
  <Route path="/service-requests" element={<ServiceRequests />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/notifications" element={<Notifications />} />
  <Route path="/settings" element={<Settings />} /> */}
</Routes>
      </div>
    </Router>
  );
}

export default App;