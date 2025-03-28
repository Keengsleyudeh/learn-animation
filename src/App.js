
import { Power3, TweenMax } from 'gsap';
import './App.css';
import {useEffect, useRef, useState} from 'react';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(()=> {

    TweenMax.to(app, 0, {css:{visibility: 'visible'}});
    TweenMax.staggerTo([circle, circleRed, circleBlue], .8, {opacity: 1, x: 40, ease: Power3.easeOut}, .2);
    // TweenMax.to(circle, .8, {opacity: 0, x: 40, ease: Power3.easeOut});
    // TweenMax.from(circleRed, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .2});
    // TweenMax.from(circleBlue, .8, {opacity: 0,x: 40, ease: Power3.easeOut, delay: .4});
  }, [])

  function handleExpand(tag) {
    if (current !== null) return;
    TweenMax.to(tag, .8, {width: 200, height: 200});
    setState(true);
    setCurrent(tag);
  }

  function handleShrink(tag) {
    if (current !== tag) return;
    TweenMax.to(tag, .8, {width: 75, height: 75});
    setState(false);
    setCurrent(null)
  }

  return (
    <div ref={el => app = el} className="App">
      <header className="App-header">
        <div className="circle-container">
          <div 
          onClick={state? (el)=>handleShrink(el.target) : (el)=>handleExpand(el.target)}
          ref={el => circle = el} 
          className="circle"></div>

          <div 
          onClick={state? (el)=>handleShrink(el.target) : (el)=>handleExpand(el.target)}
          ref={el => circleRed = el} 
          className="circle red "></div>


          <div 
          onClick={state? (el)=>handleShrink(el.target) : (el)=>handleExpand(el.target)}
          ref={el => circleBlue = el}
          className="circle blue"></div>       
          </div>
      </header>
    </div>
  );
}

export default App;
