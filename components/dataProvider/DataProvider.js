import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadState} from "../../utils/localStorage";
import {setItems, setTotalPrice} from "../../redux/slices/cartSlice";

const DataProvider = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedState = loadState();
    if (persistedState) {
      dispatch(setItems(persistedState.cart.items))
      dispatch(setTotalPrice(persistedState.cart.totalPrice))
    }
  }, [])

  return (children)
}
export default DataProvider;