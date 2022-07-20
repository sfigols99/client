import './App.css';
import { Welcome, Footer, Navbar, Our_Project } from './components/index';

const FirstPage = () => {
  return(
    <div>
      <div className='flex-initial min-h-screen justify-center items-center '>
        <Welcome />
      </div>
      <div className='bg-black text-white'>
        <Our_Project />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='bg-black text-white'>
      <div className='flex-initial justify-center items-center '>
        <Navbar />
      </div>
          <FirstPage />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
