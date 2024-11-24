import { useState } from 'react';

export function useAlert() {
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>('');

  const showAlert = (alertText: string) => {
    setAlertText(alertText);
    if (alertText) {
      setIsOpenAlert(true);
    }
  };

  return {
    isOpenAlert,
    setIsOpenAlert,
    alertText,
    setAlertText,
    showAlert
  };
}
