import React from 'react';
import Header from './component/header'
import Main from './component/main';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './component/SelectedBeast';
import Data from './component/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data, show: false, details: {}

    };


  }
  modal = (card) => {
    this.setState({ show: true, details: card })
  }

  close = () => {
    this.setState({ show: false, details:{} })
  }



  render() {
    return (
      <div>

        <Header />
        <SelectedBeast show={this.state.show} close={this.close} details={this.state.details} 
        />
        <Main data={this.state.data} modal={this.modal}/>
        <Footer />

      </div>
    )
  }

}
export default App;