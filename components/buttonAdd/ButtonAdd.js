import s from './ButtonAdd.module.scss';
import CartIcon from '../icons/CartIcon';

const ButtonAdd = ({ onClickAdd }) => {
  return (
    <div onClick={onClickAdd} className={s.wrapper}>
      <button type="button" className={s.btn}>
        ADD TO CART
      </button>

      <span className={s.icon}>
        <CartIcon />
      </span>
    </div>
  );
};

export default ButtonAdd;
