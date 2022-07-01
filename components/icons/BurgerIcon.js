const BurgerIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="burger">
      <svg
        width="36"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30.743 13.126H5.018M30.743 22.256H5.018M30.744 3.995H5.019"
          stroke="#BDB7B7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <style jsx>{`
        .burger svg path {
          transition: all 0.3s linear;
        }
        .burger:hover svg path {
          transition: all 0.3s linear;
          stroke: #525252;
        }
      `}</style>
    </button>
  );
};

export default BurgerIcon;
