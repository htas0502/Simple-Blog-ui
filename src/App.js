import './App.css';
// Import from React
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
// Import from Firebase
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config';


function App() {

  const [isAuth, setIsAuth] = useState(false);

  // Uncaught Error: useNavigate() may be used only in the context of a <Router> component
  // let navigate = useNavigate();

  function handleLogout() {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      })
  }

  return (
    <div className="App">
      <Router>
        {/* Navigation */}
        <nav className="">
          <Link to="/">Home</Link>
          <Link to="/createpost">Create Post</Link>
          {/* if not login ==> show login btn */}
          {!isAuth && <Link to="/login">Login</Link>}
          {/* log out */}
          {isAuth && <Link onClick={handleLogout}>Logout</Link>}
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
