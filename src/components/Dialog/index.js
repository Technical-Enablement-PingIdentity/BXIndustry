import React from 'react';
import Modal from 'react-modal';
import './style.scss';

// show / hide animation time
const CLOSE_TIMEOUT = 500;

//Common dialog component
export const Dialog = React.forwardRef(({ children, dialogContainerId = 'dialog-wrapper' }, ref) => {
  const [isOpened, changeIsOpened] = React.useState(false)

  function open() {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    //fix content jumping when dialog opens
    document.body.style.paddingRight = scrollBarWidth + 'px'
    changeIsOpened(true)
  }

  function close() {
    changeIsOpened(false);

    setTimeout(() => {
      //fix content jumping when dialog closes
      document.body.style.paddingRight = '0'
    }, CLOSE_TIMEOUT)
  }

  React.useImperativeHandle(ref, function () {
    return {
      open,
      close
    }
  });

  return (
    <>
      <div id={dialogContainerId}></div>
      <Modal
        isOpen={isOpened}
        onRequestClose={close}
        className="dialog"
        overlayClassName="dialog-overlay"
        bodyOpenClassName="body--modal_opened"
        closeTimeoutMS={CLOSE_TIMEOUT}
        ariaHideApp={false}
        parentSelector={() => document.getElementById(dialogContainerId)}
      >
        {children}
      </Modal>

    </>
  )
});


