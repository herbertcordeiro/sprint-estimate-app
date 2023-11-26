import {toast, TypeOptions} from 'react-toastify';

export const showToast = (message: string, type: TypeOptions) => {
  toast(message, {
    type: type,
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
