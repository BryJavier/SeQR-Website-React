import { useState } from 'react'
import Sidebar from './components/Sidebar';
import './assets/css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Content Page */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              Column 1
            </div>
          </div>
          <div className="w-full p-4">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              Column 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
