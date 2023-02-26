import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import ChatApp from './ChatApp';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3001')

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/' element={ <ChatApp />}/>
          <Route path='/signin' element={ <SignIn /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
