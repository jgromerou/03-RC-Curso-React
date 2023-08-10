import '../../styles/loading.css';

export const Loading = ({ bg }) => {
  return (
    <div className="container">
      <div className="row m-0 vh-100 justify-content-center align-items-center">
        <div className="dots">
          <div style={{ backgroundColor: bg }}></div>
          <div style={{ backgroundColor: bg }}></div>
          <div style={{ backgroundColor: bg }}></div>
        </div>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  bg: '#fc2f70',
};
