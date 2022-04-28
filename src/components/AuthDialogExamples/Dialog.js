import React from 'react';
import { Dialog } from '@Components';
import { CloseIcon } from '@Components/icons';

export const ExamplesDialog = React.forwardRef(({ logo }, ref) => {
  const dialog = React.useRef(null);

  const [html, changeHtml] = React.useState(null);

  const openDialog = (body) => {
    dialog.current.open()
    changeHtml(body)
  }

  const closeDialog = () => {
    dialog.current.close()
  }

  React.useImperativeHandle(ref, function () {
    return {
      show: openDialog,
    }
  });

  return (
    <Dialog ref={dialog}>
      <div className="dialog-body">
        <button className="dialog-body__close-icon" onClick={closeDialog}>
          <CloseIcon />
        </button>
        {logo &&
          <div className="dialog-logo">
            <img className="dialog-logo__logo" src={logo} alt="logo" />
          </div>
        }
        <div className="dialog-content" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Dialog>
  )
});


