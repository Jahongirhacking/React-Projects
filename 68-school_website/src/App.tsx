import { FloatButton, Layout } from "antd"
import { Navbar, Banner, Achievements, Footer, Media, About } from "./pages";

const { Header, Content } = Layout;

function App() {

  return (
    <>
      <Layout>
        <Header className="header">
          <Navbar />
        </Header>
        <Content className="content">
          <Banner />
          <Achievements />
          <Media />
          <About />
          <FloatButton.BackTop />
        </Content>
        <Layout.Footer style={{ padding: 0 }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default App
