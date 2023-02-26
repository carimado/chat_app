import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatApp from './ChatApp';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';

// import { useState } from 'react';

// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3001')

function App() {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/signin' element={ <SignIn /> } />
            <Route path='/' element={ <ChatApp /> }/>
            {/* <Route path='/signup' component={ SignUp } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/' component={ ChatApp }/> */}
          </Routes>
        </Router>

    </div>
  );
}

export default App;
