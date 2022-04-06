import React, { useRef } from 'react';
import { dialogBodies } from './dialogBodies';
import { ExamplesDialog } from './Dialog';

const {
  signInUsername,
  signInUsernameAndPassword,
  signInFlowPicker,
  signInEmailPasscode,
  signInMessagePasscode,
  signInMobileApp,
  usernameRecovery,
  usernameRecoveryMessage,
  registration,
  passwordRecoveryCreateNewPassword,
  passwordRecoveryEmailPasscodeEntering,
  passwordRecoveryUserName,
  passwordRecoveryMessage,
  dialogElements
} = dialogBodies;

export const AuthDialogExamples = ({ logo }) => {
  const dialogRef = useRef(null)

  const showDialog = (body) => {
    dialogRef.current.show(body);
  }

  return (
    <>
      <div className="container">
        <div className="container__col">
          <div className="dialog-example-actions">
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(registration) }}>Registration</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(signInUsername) }}>Sign in, Username only</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(signInUsernameAndPassword) }}>Sign in, Username and password </button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(signInFlowPicker) }}>Sign in, Flow picker</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(signInEmailPasscode) }}>Sign in via email one-time passcode</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(signInMessagePasscode) }}>Sign in via message one-time passcode</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(signInMobileApp) }}>Sign in via mobile app</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(usernameRecovery) }}>Username Recovery</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(usernameRecoveryMessage) }}>Username recovery, success message</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(passwordRecoveryCreateNewPassword) }}>Password recovery, create new password</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(passwordRecoveryEmailPasscodeEntering) }}>Password recovery, email passcode entering</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(passwordRecoveryUserName) }}>Password recovery, user name entering</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(passwordRecoveryMessage) }}>Password recovery, success message</button>
            <button className="button dialog-example-actions__item"
              onClick={() => { showDialog(dialogElements) }}>Dialog Elements</button>
          </div>
        </div>
      </div>
      <ExamplesDialog logo={logo} ref={dialogRef} />
    </>
  )
}
