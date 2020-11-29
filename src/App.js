import React from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import Table from './components/Table';
class App extends React.Component{

    render(){
        return(
            <div>
               <Header />
                
                <Form />
                
               <Footer />
            </div>
        );
    }
}
export default App;