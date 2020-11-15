import { useSelector } from 'react-redux';
import { AppCard } from '../components/AppCard';
import './Applications.scss';

export const Applications = () => {
  const apps = useSelector((state) => state.applications.applications);

  return (
    <div className="apps">
      <div className="apps__grid">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};
