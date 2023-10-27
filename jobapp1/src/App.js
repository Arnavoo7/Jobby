import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TableDataProvider from './Providers/TableDataProvider';

function App() {
  return (
    <TableDataProvider>
     <Navbar />
     <Home />
     <Footer />
    </TableDataProvider>
  );
}

export default App;
