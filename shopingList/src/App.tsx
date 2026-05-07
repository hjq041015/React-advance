import { Toaster } from 'sonner';

import CartDialog from './components/CartDialog.tsx';
import NavBar from './components/NavBar.tsx';
import ShopList from './components/ShopList.tsx';

function App() {
  return (
    <>
      <NavBar />
      <ShopList />
      <CartDialog />
      <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
