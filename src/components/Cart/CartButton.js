import classes from './CartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../ReduxStore/CartSlice';
const CartButton = (props) => {
  const dispatch=useDispatch()
  const cartNumber=useSelector((state)=>state.cart.cartNumber)
  const cartEnableHandler=()=>{
   dispatch(cartActions.showCart())
  }
  return (
    <button className={classes.button} onClick={cartEnableHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default CartButton;
