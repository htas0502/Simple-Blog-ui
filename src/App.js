import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';


function App() {
  return (
    <div className="App">
      <Router>
        <nav className="">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/createpost">Create Post</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
