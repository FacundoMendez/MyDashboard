import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Capitulo1 from './components/home/capitulos/capitulo1/Capitulo1';
import Capitulo2 from './components/home/capitulos/capitulo2/Capitulo2';
import Capitulo3 from './components/home/capitulos/capitulo3/Capitulo3';
import Capitulo4 from './components/home/capitulos/capitulo4/Capitulo4';
import Capitulo5 from './components/home/capitulos/capitulo5/Capitulo5';
import Capitulo6 from './components/home/capitulos/capitulo6/Capitulo6';
import Capitulo7 from './components/home/capitulos/capitulo7/Capitulo7';


/* cap1 */
import Cameras from './components/home/capitulos/capitulo1/sections/Cameras';
import Animations from './components/home/capitulos/capitulo1/sections/Animations';
import FullScreenAndResizing from './components/home/capitulos/capitulo1/sections/FullScreenAndResizing';
import Geometries from './components/home/capitulos/capitulo1/sections/Geometries';
import DebugUI from './components/home/capitulos/capitulo1/sections/DebugUI';
import Materials from './components/home/capitulos/capitulo1/sections/Materials';
import Text3d from './components/home/capitulos/capitulo1/sections/Text3d';
import SceneBasic from './components/home/capitulos/capitulo1/sections/basicScene/SceneBasic';
import Textures from './components/home/capitulos/capitulo1/sections/Textures';
import TransformObjects from './components/home/capitulos/capitulo1/sections/transformObjects/TransformObjects';


function App() {

  return (
    <BrowserRouter>
        <div className="imgBlurRight"></div>
        <div className="imgBlurLeft"></div>
      <Routes>

          {/* card cap 1 */}
          <Route exact path="/capitulo1" element={<Capitulo1 />} />
          <Route exact path="/capitulo2" element={<Capitulo2 />} />
          <Route exact path="/capitulo3" element={<Capitulo3 />} />
          <Route exact path="/capitulo4" element={<Capitulo4 />} />
          <Route exact path="/capitulo5" element={<Capitulo5 />} />
          <Route exact path="/capitulo6" element={<Capitulo6 />} />
          <Route exact path="/capitulo7" element={<Capitulo7 />} />

            {/* cap1 */}
          
          <Route exact path="/TransformObjects" element={<TransformObjects />} />
          <Route exact path="/Cameras" element={<Cameras/>}/>
          <Route exact path="/Animations" element={<Animations />}/>
          <Route exact path="/FullScreenAndResizing" element={<FullScreenAndResizing/>}/>
          <Route exact path="/Geometries" element={<Geometries/>}/>
          <Route exact path="/DebugUI" element={<DebugUI />} />
          <Route exact path="/Materials" element={<Materials />} />
          <Route exact path="/Text3d" element={<Text3d />} />
          <Route exact path="/SceneBasic" element={<SceneBasic />} />
          <Route exact path="/Textures" element={<Textures />} />
          <Route exact path="/TransformObjects" element={<TransformObjects />} />


          <Route exact path="/home" element={<Home />} />
          <Route path='*' element={<Home />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
