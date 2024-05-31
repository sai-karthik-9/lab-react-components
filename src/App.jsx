import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Heads from "./components/header";
import Bodys from "./components/body";

const imageData = [
  { id: 1, img: lake },
  { id: 2, img: lake },
  { id: 3, img: lake },
  { id: 4, img: lake }
];

const App = () => {
  return (
    <div>
      <Heads />
      <Bodys data={imageData} />
      <GallaryFooter />
    </div>
  );
};

export default App;