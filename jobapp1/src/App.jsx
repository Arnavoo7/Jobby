import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ModalProvider from './Providers/ModalProvider';
import TableDataProvider from './Providers/TableDataProvider';

function App() {
  return (
    <ModalProvider>
    <TableDataProvider>
     <Navbar />
     <Home />
     <Footer />
    </TableDataProvider>
    </ModalProvider>
  );
}

export default App;
