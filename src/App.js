import React from 'react'
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { Route, useLocation } from 'wouter';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import LazyTrending from 'components/TrendingSearches';


function App() {
    const [, pushLocation] = useLocation();

    const handleTitleClick = () => {
        pushLocation("/")
    }
  
  return (
    <StaticContext.Provider value={{ kim: 'flower'}}>
      <div className="App">
        <section className="App-content">
          <h1 onClick={handleTitleClick}>HUMAN IN GIFS (A nivel de app.js)</h1>
          <GifsContextProvider>
            <Route path="/" component={Home}/>
            <Route path="/search/:keyword" component={SearchResults}/>
            <Route path="/gif/:id" component={Detail}/>
          </GifsContextProvider>
        </section>
        <LazyTrending />
      </div>
    </StaticContext.Provider>
  );
}

export default App;
