import { Footer, Navbar } from '../components/components';
import { Welcome, OurProject } from './app';

const FirstPage = () => {
  return(
    <div>
      <div className='flex-initial min-h-screen justify-center items-center '>
        <Welcome />
      </div>
      <div className='bg-black text-white'>
        <OurProject />
      </div>
    </div>
  );
}

const App = () => {
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