import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'
import Home from './component/home/Home';
import Info from './component/Info/Info';
import End from './component/End/End';
import FooterContent from './component/home/FooterContent';
const { Header, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />        
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><a href="/">STUDIO GHIBLI</a></Menu.Item>
            <Menu.Item key="2"><a href="/info">INFO</a></Menu.Item>
            <Menu.Item key="3"><a href="/end">MYPAGE</a></Menu.Item>
          </Menu>
      </Header>
      <Router>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/info" component={Info}/>
        <Route exact path = "/end" component={End}/>
      </Router>
      <Footer style={{ textAlign: 'center' }}>
        <FooterContent/>
      </Footer>
  </Layout>
  );
}

export default App;
