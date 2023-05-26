import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';

export type ToastProps = {
  text: string;
  isOpen: boolean;
};
const Toast = ({ text, isOpen, ...props }: ToastProps) => {
  const notify = () => {
    toast.info(text, {
      position: 'top-right',
    });
  };

  useEffect(() => {
    if (isOpen) notify();
  }, [isOpen]);

  return (
    <div>
      <ToastContainer
        toastStyle={{
          height: '90px',
          marginTop: '300px',
          fontSize: '15px',
          fontFamily: 'LeferiBaseType-RegularA',
          textAlign: 'center',
        }}
      />
    </div>
  );
};

export default Toast;
