// Components
import Header from '../Header';
import Banner from '../Banner';
import Ingredients from '../Ingredients';
import TheStory from '../TheStory';
import Burgers from '../Burgers';

// Component
function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Ingredients />
        <TheStory />
        <Burgers />
      </main>
    </>
  );
}

export default App;
