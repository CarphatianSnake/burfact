// Components
import Header from '../Header';
import Banner from '../Banner';
import Ingredients from '../Ingredients';
import TheStory from '../TheStory';
import Burgers from '../Burgers';
import Location from '../Location';
import Footer from '../Footer';

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
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
