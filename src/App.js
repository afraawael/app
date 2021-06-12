import React from 'react';
import Header from './component/header'
import Main from './component/main';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />

      </div>
    )
  }

}
export default App;