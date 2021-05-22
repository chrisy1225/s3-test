import MainLayout from '../global/MainLayout';
import BlueprintsAndDevicesComponent from './BlueprintsAndDevicesComponent';

const BlueprintsAndDevices = () => {
   return (
      <MainLayout content={<BlueprintsAndDevicesComponent />} choice={2} />
    );
}

export default BlueprintsAndDevices;