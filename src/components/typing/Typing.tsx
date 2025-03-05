import * as React from 'react';
import Typed from 'typed.js';

export default function Typing() {

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Web Technology',
        'Cloud Transformation',
        'Backend Development',
        'Large-scale System'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    // elRef refers to the <span> rendered below
    // @ts-ignore
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      // @ts-ignore
      typed.current.destroy();
    }
  }, [])


  return (
    <span ref={el} />
  );
}