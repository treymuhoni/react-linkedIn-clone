import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import LeftSection from './Components/LeftSection';
import MiddleSection from './Components/MiddleSection';
import RightSection from './Components/RightSection';
import {useStateValue} from "./Components/StateProvider"


function App() {
  const [{user}, dispatch] = useStateValue()
  return (
   <div className='app__container'>
    {!user ? (
      <Login />
      ):
      <>
        <Navbar />
        <div className='body__content'>
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </>
    }
   </div>
  );
}

export default App;
