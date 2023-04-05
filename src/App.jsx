import './assets/css/App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import Layout from './components/Layout';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import ScanQr from './components/ScanQr';
import ManageAccount from './components/ManageAccount';
import Logs from './components/Logs';
import Data from './components/DataAnalysis';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />}/>
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/edit-student' element={<EditStudent/> } />
        <Route path='/scan-qr' element={<ScanQr/>} />
        <Route path='/manage-account' element={<ManageAccount/>} />
        <Route path='/logs' element={<Logs/>} />
        <Route path='/data-analysis' element={<Data />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App
