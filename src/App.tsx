import { Content, Footer, Header, Layout } from '@allComponents';
import { user } from '@constants/index';
import { Toaster } from 'react-hot-toast';

function App(): JSX.Element {
  return (
    <>
      <Layout>
        <Header name={user.handle} imageUrl={user.img_url} />
        <Content />
        <Footer />
      </Layout>
      <Toaster />
    </>
  );
}
export default App;
