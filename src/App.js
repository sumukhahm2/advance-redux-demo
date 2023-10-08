import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {
  const iscart=useSelector((state)=>state.cart.isCart)
  return (
    <Layout>
     {iscart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
