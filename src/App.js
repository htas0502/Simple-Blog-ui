import './App.css';
// Import from React
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

// Import Pages
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
// Import from Firebase
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config';


function App() {

  // localStorage.clear();

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

  function handleCreatePostNav() {
    if(!isAuth) {
      alert("Please Sign in to Create Posts!");
    } else {
      window.location.pathname = "/createpost";
    }
  }

  return (
    <div className="App">
      <Router>
        {/* Navigation */}
        <nav className="">
          <Link to="/">Home</Link>
          <Link onClick={handleCreatePostNav}>Create Post</Link>
          {/* if not login ==> show login btn */}
          {!isAuth && <Link to="/login">Login</Link>}
          {/* log out */}
          {isAuth && <Link onClick={handleLogout}>Logout</Link>}
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
