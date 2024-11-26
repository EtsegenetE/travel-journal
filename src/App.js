
import './App.css';
import Entry from "./Entry";
import Data from "./Data";
import Header from './Header';


function App() {

    const entryElements = Data.map((entry) => {
      return(
      <Entry 
          key={entry.id}
          img={entry.img}
          title={entry.title}
          country={entry.country}
          googleMapsLink={entry.googleMapsLink}
          dates={entry.dates}
          text={entry.text}
      />
    )
   })



  return (
   <div>
      <Header />
        <main>
           {entryElements}
        </main>
    </div>
  );
}

export default App;
