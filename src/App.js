import React from 'react';
class App extends React.Component{

    render(){
        return(
            <div>
                <header>
                    <div className="header">
                    <a href="#default" class="logo">ICK Training Assignment</a>
                    <div className="header-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                    </div>
                </header>
                <body>

                </body>
                <footer>
                    <div className="footer1">
                        <h3>Company Name</h3>
                        <hr style={{width: "180px"}} />
                        <hr style={{width: "90px", marginRight: "133px"}} />
                        <p>About the ICK training  Final Assignment</p>
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
            </div>
        );
    }
}
export default App;