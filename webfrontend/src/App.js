import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AddDataPage from './pages/AddDataPage';
import DataPage from './pages/DataPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/data" component={DataPage} />
            <Route path="/add" component={AddDataPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;