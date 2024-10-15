import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';
import { useEffect } from 'react';

function App() {
  const handleResize = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="App" >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
