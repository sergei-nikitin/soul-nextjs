const CloseIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="close">
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="m12.882 11.986 4.974-4.96a.598.598 0 0 0-.433-.987.601.601 0 0 0-.413.143l-4.974 4.96-4.974-4.966a.603.603 0 0 0-1.029.425.6.6 0 0 0 .177.425l4.98 4.96-4.98 4.961a.598.598 0 1 0 .846.844l4.98-4.96 4.974 4.96a.601.601 0 0 0 .99-.432.598.598 0 0 0-.144-.412l-4.974-4.96Z"
          fill="#838383"
        />
      </svg>
      <style jsx>{`
        .close svg path {
          transition: all 0.3s linear;
        }
        .close:hover svg path {
          transition: all 0.3s linear;
          fill: #525252;
        }
      `}</style>
    </button>
  );
};

export default CloseIcon;
