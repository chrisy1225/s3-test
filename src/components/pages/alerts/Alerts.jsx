import MainLayout from './../global/MainLayout';
import AlertsComponents from './AlertsComponent';

const Alerts = () => {
   return (
      <MainLayout content={<AlertsComponents />} choice={1} />
    );
}

export default Alerts;