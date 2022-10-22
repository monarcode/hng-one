import { Footer } from '@components/Footer';
import { Content, Header, Layout } from '@components/index';
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
