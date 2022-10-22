import { Content } from '@components/Content';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Layout } from '@components/Layout';
import { user } from '@constants/index';

function App() {
  return (
    <>
      <Layout>
        <Header name={user.handle} imageUrl={user.img_url} />
        <Content />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
