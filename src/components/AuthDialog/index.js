import React from 'react';
import { useSingularKey } from '@Hooks';
import { Dialog } from '@Components';
import { CloseIcon } from '@Components/icons';
import { gaEvent } from '@Helpers';

const CONTAINER_ID = 'widgetbox';

//dialog component for SK flow displaying
export const AuthDialog = React.forwardRef(({ logo }, ref) => {
  const dialog = React.useRef(null);

  const { startSKFlowPolicy } = useSingularKey({ containerId: CONTAINER_ID, dialog: dialog });

  function closeDialog() {
    dialog.current.close();
  }

  async function openDialog({ company_key, policy_key, api_key, text }) {
    const vertical = window.location.pathname.replace('/', '');
    gaEvent(`${text.toLowerCase().split(' ').join('_')}_clicked`, vertical);
    
    dialog.current.open();
    
    if (!(await startSKFlowPolicy(company_key, policy_key, api_key))) {
      dialog.current.close();
    }
  }

  React.useImperativeHandle(ref, function () {
    return {
      openDialog
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
        <div className="dialog-content" id={CONTAINER_ID}></div>
      </div>
    </Dialog>
  )
});
