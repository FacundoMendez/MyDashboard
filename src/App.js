import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy,Suspense } from 'react';
import Capitulo1 from './components/home/capitulos/capitulo1/Capitulo1';
import Capitulo2 from './components/home/capitulos/capitulo2/Capitulo2';
import Capitulo3 from './components/home/capitulos/capitulo3/Capitulo3';
import Capitulo4 from './components/home/capitulos/capitulo4/Capitulo4';
import Capitulo5 from './components/home/capitulos/capitulo5/Capitulo5';
import Capitulo6 from './components/home/capitulos/capitulo6/Capitulo6';
import Capitulo7 from './components/home/capitulos/capitulo7/Capitulo7';
import Spinner from './components/assets/spinner/Spinner';


/* cap1 */

const TransformObjects = lazy(() => import('./components/home/capitulos/capitulo1/sections/transformObjects/TransformObjects'))
const Cameras = lazy(() => import('./components/home/capitulos/capitulo1/sections/Cameras'))
const Animations = lazy(() => import('./components/home/capitulos/capitulo1/sections/animations/Animations'))
const FullScreenAndResizing = lazy(() => import('./components/home/capitulos/capitulo1/sections/FullScreenAndResizing'))
const Geometries = lazy(() => import('./components/home/capitulos/capitulo1/sections/Geometries'))
const DebugUI = lazy(() => import('./components/home/capitulos/capitulo1/sections/DebugUI'))
const Materials = lazy(() => import('./components/home/capitulos/capitulo1/sections/Materials'))
const Text3d = lazy(() => import('./components/home/capitulos/capitulo1/sections/Text3d'))
const SceneBasic = lazy(() => import('./components/home/capitulos/capitulo1/sections/basicScene/SceneBasic'))
const Textures = lazy(() => import('./components/home/capitulos/capitulo1/sections/Textures'))


function App() {

  return (
    <BrowserRouter>
        <div className="imgBlurRight"></div>
        <div className="imgBlurLeft"></div>

      <Suspense fallback={<Spinner/>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
