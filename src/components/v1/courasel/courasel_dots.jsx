const CustomDot = ({ onClick, ...rest }) => {
    const { onMove, index, active, carouselState } = rest;
    // Add your custom styles or content for the dot
    return (
      <button
        className={active ? "custom-dot active mt-1" : "custom-dot inactive mt-1"}
        onClick={() => onClick()}
      >
        {/* {index + 1} */}
      </button>
    );
  };

  export default CustomDot