import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
class App extends React.Component{

    render(){
        return(
            <div>
               <Header />
                <body>
                <Home />
                </body>
               <Footer />
            </div>
        );
    }
}
export default App;