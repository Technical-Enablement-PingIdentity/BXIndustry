import React from 'react';
import { Dialog } from '@Components';
import { CloseIcon } from '@Components/icons';
import { useDaVinci } from '@Hooks';
import { gaEvent } from '@Helpers';


const DV_WRAPPER_ID = "remix-widgetbox";

// Dialog component for glitch remixing 
export const RemixOnGlitchDialog = React.forwardRef((_, ref) => {
  const dialog = React.useRef(null);
  const { startDVFlowPolicy } = useDaVinci({ containerId: DV_WRAPPER_ID, dialog: dialog });

  const openDialog = () => {
    dialog.current.open();
    gaEvent('remix_on_glitch_clicked');
    startDVFlowPolicy(
      process.env.REACT_APP_COMPANY_KEY, 
      process.env.REACT_APP_REMIX_POLICY_KEY, 
      process.env.REACT_APP_API_KEY,
      {GlitchProject: process.env.REACT_APP_GLITCH_REMIX_PROJECT});
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
    <>
      <Dialog dialogContainerId="remix-on-glitch-dialog-container" ref={dialog}>
        <div className="dialog-body">
          <button className="dialog-body__close-icon" onClick={closeDialog}>
            <CloseIcon />
          </button>
          <div className="dialog-logo"></div>
          <div className="dialog-content" id={DV_WRAPPER_ID}></div>
        </div>
      </Dialog>
    </>
  )
});


