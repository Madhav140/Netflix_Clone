import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Raw from './Components/Raw';
import requests from './request';

function App() {
  return (
   <>

   <Nav/>

   <Banner fetchUrl={requests.fetchNetflixOriginals}/>
  
   <Raw isposter={true} title='Trending' fetchUrl={requests.fetchTrending}/>

   <Raw  title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>

   

   <Raw title='Top Rated Movies' fetchUrl={requests.fetchTopRated}/>

   <Raw title='Action Movies' fetchUrl={requests.fetchActionMovies}/>

   <Raw title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>

   <Raw title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>

   <Raw title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>

   <Raw title='Documentries' fetchUrl={requests.fetchDocumentaries}/>


   </>
  );
}

export default App;
