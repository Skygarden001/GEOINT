import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Search from './components/Search';
import Radar from '../src/pages/Radar/index'
import Menu_1 from '../src/components/Menu'
import Provider_geom from './store/Provide_geom'

function App(){
  return ( 
      <Provider_geom>
        <Radar/>
        <Search/>
      </Provider_geom>
  );
};
export default App;