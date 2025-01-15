import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
    <div className="container py-5">
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 text-center text-lg-left">
                <a className="navbar-brand" href="index.html"><i style={{ color: '#3874FF' }} className="fas fa-cubes-stacked"></i>Trade<i>X</i></a>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="row">
                    <div className="col-6">
                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-primaryy">Stocks</a></li>
                            <li><a href="#" className="text-primaryy">Mutual Funds</a></li>
                            <li><a href="#" className="text-primaryy">Future and Options</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h6 className="text-uppercase font-weight-bold">Company</h6>
                        <ul className="list-unstyled">
                            <li><a href="aboutus.html" className="text-primaryy">About us</a></li>
                            <li><a href="contactus.html" className="text-primaryy">Contact us</a></li>
                            <li><a href="#" className="text-primaryy">Blog</a></li>
                            <li><a href="#" className="text-primaryy">Track Portfolio</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center text-lg-right">
                <h6 className="text-uppercase font-weight-bold">Follow us on</h6>
                <div className="d-flex justify-content-center justify-content-lg-end">
                    <a href="#" className="btn btn-dark btn-lg rounded-circle mx-2"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://www.instagram.com/speedrevamps" className="btn btn-dark btn-lg rounded-circle mx-2"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="btn btn-dark btn-lg rounded-circle mx-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/@Prateek_pc-p1l" className="btn btn-dark btn-lg rounded-circle mx-2"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/prateek-balwada-17ba63302/" className="btn btn-dark btn-lg rounded-circle mx-2"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  );
}

export default Footer;
