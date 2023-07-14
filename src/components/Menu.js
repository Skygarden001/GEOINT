import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { rgbToHex } from '@mui/material';
import { border } from '@mui/system';
  import { Button, Menu } from 'antd';
  import { useState } from 'react';
  import Search from '../components/Search/index'
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Option 1', '1', <DesktopOutlined />),
    getItem('Option 2', '2', <DesktopOutlined /> ),
    getItem('Option 3', '3', <ContainerOutlined />),
  ]
  function Menu_1() {
    return (
      <div
        style={{ zIndex: 50,
          width: 150,
          boxSizing: "content-box",
        }}
      >
        <Menu 
          visibility=  'hidden'
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          items={items}
        />
      </div>
    );
      }
  export default Menu_1;