import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';

import Table from './components/Table';
class App extends React.Component{

    render(){
        return(
            <div>
               <Header />
                
                <Home />
                
               <Footer />
            </div>
        );
    }
}
export default App;