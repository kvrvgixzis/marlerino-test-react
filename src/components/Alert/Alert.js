import { useSelector } from 'react-redux';
import './Alert.css';

export const Alert = () => {
  const message = useSelector((state) => state.app.alert);

  if (!message || !message.trim()) return null;

  return (
    <div className="notification" role="alert">
      {message}
    </div>
  );
};
