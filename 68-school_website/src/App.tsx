import { ConfigProvider, FloatButton, Layout, theme } from "antd"
import { Navbar, Banner, Achievements, Footer, Media, About } from "./pages";
import { useSelector } from "react-redux";
import { IStore } from "./app/store";

const { Header, Content } = Layout;
const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const themeColor = useSelector((state: IStore) => state.theme);
  return (
    <>
      <ConfigProvider theme={{ algorithm: themeColor === "light" ? defaultAlgorithm : darkAlgorithm }}>
        <Layout>
          <Header className="header">
            <Navbar />
          </Header>
          <Content className="content">
            <Banner />
            <Achievements />
            <Media />
            <About />
            <FloatButton.BackTop style={{ bottom: "20px" }} />
          </Content>
          <Layout.Footer style={{ padding: 0 }}>
            <Footer />
          </Layout.Footer>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
