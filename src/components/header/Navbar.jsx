const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <strong>GifMoji</strong>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
