import MainLayout from '../global/MainLayout';
import SettingsComponent from './SettingsComponent';

const Settings = () => {
   return (
      <MainLayout content={<SettingsComponent />} choice={3} />
    );
}

export default Settings;