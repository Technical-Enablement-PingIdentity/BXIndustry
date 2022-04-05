import React from 'react';
import glitchImg from '@/assets/img/remix-on-clitch.svg';
import { RemixOnGlitchDialog } from './Dialog';

export function Copyright({ style, text }) {
  const dialog = React.useRef(null);
  const showRemixButton = process.env.REACT_APP_SHOW_REMIX_BUTTON === 'true';
  
  function openDialog() {
    dialog.current.show()
  }

  return (
    <>
      <div className="container">
        <div className="copyright-content container__col">
          <p className="copyright-content__text" style={style}>{text}</p>
          {showRemixButton &&
            <span className="copyright-content__glitch-btn" onClick={openDialog}>
              <img src={glitchImg} alt="Remix on glitch" />
            </span>
          }
        </div>
      </div>
      {showRemixButton && <RemixOnGlitchDialog ref={dialog} />}
    </>
  )
}