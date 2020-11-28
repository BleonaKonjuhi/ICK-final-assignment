function Footer(){
    return (
        <footer>
        <div className="footer1">
            <h3>Company Name</h3>
            <hr style={{width: "180px"}} />
            <hr style={{width: "90px", marginRight: "90px"}} />
            <p>About the ICK training <br /> Final Assignment</p>
        </div>
        <div className="footer2">
            <h3>Quick links</h3>
            <hr style={{width: "130px"}} />
            <hr style={{width: "90px", marginRight: "40px"}} />
            <a href="#">Get Started </a><br />
            <a href="#">Get Started </a><br />
            <a href="#">Get Started </a><br />
           
        </div>
        <div className="footer3">
            <h3>Contact Us</h3>
            <a href="#">icktraining@ickosovo.com</a><br /><br />
            <img src="./facebook.jpg" width="30px" height="30px" />
            <img src="./img/instagram.jpg" width="30px" height="30px" />
            <img src="./img/twitter.jpg" width="30px" height="30px" />
        </div>
    </footer>
    );
}
export default Footer;
