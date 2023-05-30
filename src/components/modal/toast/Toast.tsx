import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';

export type ToastProps = {
  text: string;
  isOpen: boolean;
  isWarn?: boolean;
};
const Toast = ({ text, isOpen, isWarn }: ToastProps) => {
  const notify = () => {
    if (isWarn) {
      toast.warn(text, {
        position: 'top-right',
      });
      return;
    }
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
        autoClose={5000}
        toastStyle={{
          height: '90px',
          marginTop: '80px',
          fontSize: '15px',
          fontFamily: 'Pretendard',
          textAlign: 'center',
        }}
      />
    </div>
  );
};

export default Toast;
