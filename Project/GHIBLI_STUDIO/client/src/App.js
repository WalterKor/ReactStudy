import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'
import Home from './component/home/Home';
import Info from './component/Info/Info';
import End from './component/End/End';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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
      <Footer style={{ textAlign: 'center' }}>humanity engineering ©2021 Created by Walter</Footer>
  </Layout>
  );
}

export default App;
