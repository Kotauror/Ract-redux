import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import '../store';
import Header from './Header'
import Footer from './Footer'
import Displayer from './Displayer'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props)
    return (
      <div className="App">
        <Header />
        <Displayer />
        <Footer />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//       name: state.name
//     }
// }


// export default connect(mapStateToProps, null)(App);

export default App;