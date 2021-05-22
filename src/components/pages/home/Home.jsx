import MainLayout from '../global/MainLayout';
import HomeComponent from './HomeComponent';

const Home = () => {
   return (
      <MainLayout content={<HomeComponent />} choice={0} />
    );
}

export default Home;