import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Login from './Components/Login';

function App() {
  const user = 'trey';
  return (
   <div className='app__container'>
    <Navbar />
    {!user ? (
      <Login />
      ):
      <div className='body__content'>
        <Content />
      </div>
    }
   </div>
  );
}

export default App;
