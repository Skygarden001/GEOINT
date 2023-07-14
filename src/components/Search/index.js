import { useState, useContext, useEffect } from "react";
import styles from './Search.module.scss'
import classNames from "classnames/bind";
import { Row, Col, Divider, Menu, DatePicker,Dropdown, Checkbox, Button, Layout, Tooltip} from 'antd';
import {Context, Context_Sat} from "../../store/Context";
import Data_table from './components/Data_table.js';
import Mode_table from "./components/Mode_table.js";
import Menu_select_radar from './components/menu_select_sat.js';
import Search_satellite from '../../pages/Satellite/search_satellite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSatellite } from '@fortawesome/free-solid-svg-icons';

const { RangePicker } = DatePicker;
let cx = classNames.bind(styles)
const Search =({hidden, onChange}) => {
    const [state, dispatch] = useContext(Context);
    const [state_sat, dispatch_sat] = useContext(Context_Sat);

    const [collapse, setcollapse] = useState(false)
    const [collapse_sat, setcollapse_sat] = useState(false)
    // const [satellite_capella, setSatellite_capella] = useState();
    // const [satellite_Cosmo, setSatellite_Cosmo] = useState(false);
    // const [satellite_TerraSAR, setSatellite_TerraSAR] = useState();
    // const [satellite_SM, setSatellite_SM] = useState(false);
    //const [satellite_SL, setSatellite_SL] = useState(false);
    const [time_start, setSatellite_time_start] = useState();
    const [time_end, setSatellite_time_end] = useState();

    const [mode, setMode] = useState(
      [
        {id: 1, label: 'Spotlight', regime: 'SL',checked: true},
        {id: 2, label: 'Sliding_spotlight', regime: 'Site',checked: true},
        {id: 3, label: 'Stripmap', regime: 'SM',checked: true}
      ]
    );
    const handleChange_mode = (value) => {setMode(value);};
    //console.log(mode);
    

    const [sat, selectSat] = useState(
      [
        { 
          content: 'capella',
          item: [
          {id: 1, label: 'Capella 06', checked: true},
          {id: 2, label: 'Capella 07', checked: true},
          {id: 3, label: 'Capella 08', checked: true},
          {id: 4, label: 'Capella 09', checked: true},
          {id: 5, label: 'Capella 10', checked: true}
        ]
      }
        ,
        { 
          content: 'skymed',
          item: [
          {id: 6, label: 'SKYMED 1', checked: true},
          {id: 7, label: 'SKYMED 2', checked: true},
          {id: 8, label: 'SKYMED 3', checked: true},
          {id: 9, label: 'SKYMED 4', checked: true},
        ]
      },
      { 
        content: 'terrasar',
        item: [
          {id: 10, label: 'TerraSar', checked: true},
        ]
      }
    ]
    );
    const handleChange_selectSat = (value) => {selectSat(value);};

    // checkbox capella
    // const onChange_capella = () => {
    //   setSatellite_capella(!satellite_capella)
    // };
    //  // checkbox Cosmoskymed
    // const onChange_COSMOSKYMED = (e) => {
    //     setSatellite_Cosmo(e.target.checked)
    //   };
    //   // checkbox TerraSAR
    // const onChange_TerraSAR = () => {
    //     setSatellite_TerraSAR(!satellite_TerraSAR)
    //   };
    //   // checkbox mode spotlight
    // const onChange_SL = (e) => {
    //   setSatellite_SL(e.target.checked); 
    // };
    //   // checkbox mode strip map
    // const onChange_SM = (e) => {
    //   setSatellite_SM(e.target.checked);
    //   };
    const handleRangePickerChange = (dates, dateStrings) => {
      const [start, end] = dateStrings;
       setSatellite_time_start(start);
       setSatellite_time_end(end);
       console.log(time_start);
       console.log(time_end);
    };
   

    const [show_sattellite, checkshow_sat] = useState(true);
    const handle_search_sat_change = (value) => {
      checkshow_sat(value);
      if(value){
        get_czml_sattellite();
      }
      else
      {
        dispatch_sat({ type: 'UPDATE_STATE', payload: {id: "document",
        name: "con cac",
        version: "1.0",} });
      }
    }

    const handleButtonClick = () => {getdata(mode)};
    const handleClick = () => {setcollapse(!collapse); 
      if (collapse_sat === true)
      setcollapse_sat(!collapse_sat);};
    const handleClick_sat =()=>{setcollapse_sat(!collapse_sat); 
      if (collapse === true)
      setcollapse(!collapse);};


    function getdata(_mode) {
      const requestData = {
        table_name: 'skymed',
        name_sat: ['SKYMED 1'],
        mode: [],
      };
      
      _mode.forEach(item => {
        console.log(item.id, item.label, item.checked);
        // Thực hiện các xử lý khác với từng phần tử của mảng mode
        if(item.checked === true){requestData.mode.push(item.regime);}
      });
      const params = new URLSearchParams(requestData);
      const url = `http://localhost:3001/api/data?${params}`;

      console.log(url);
      fetch(url)
      .then((response) => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
         return response.json();
        })
        .then((data) => {
          dispatch({ type: 'UPDATE_STATE', payload: data });
        })
        .catch((error) => {
        console.error('Error:', error);
    });
    }

    const [data_satellite, setDataSatellite] = useState([]);
      function get_czml_sattellite()
      {
        const fetchDataFromAPI = async () => {
         try {
           const response = await fetch('http://192.168.100.31:3001/api/satellite');
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           const data = await response.json();
           //setDataSatellite(data); // Cập nhật state với dữ liệu mới từ API
           dispatch_sat({ type: 'UPDATE_STATE', payload: data });
         } catch (error) {
           console.error('Error fetching data:', error);
         }
         //console.log("data_satellite has changed:", data_satellite);
       };
       fetchDataFromAPI()
      }
      
      
    return (  
        <Layout style={{flexDirection:'row'}}>
        <Tooltip style={{backgroundColor:'#928989db', color:'#0e0d0d'}} title={<span>Tìm kiếm khu vực chụp</span>} placement="top" >
        <Button size='large' style={{backgroundColor:'#928989db'}} icon={<FontAwesomeIcon icon={faSatellite} spin style={{color: "#152b84",}} />} onClick={handleClick}/> 
        </Tooltip>
          {collapse&& 
            <div className={cx('wrapper')}> 
              <Row gutter={16}>
              <Col span={8} style={{ padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Tooltip style={{backgroundColor:'#928989db', color:'#0e0d0d'}} title={<span>Lọc khu vực chụp theo vệ tinh</span>} placement="top" >
                  <Dropdown overlay={Menu_select_radar} trigger={['click']}>
                  <Button style={{backgroundColor: '#ffd000', fontWeight: 'bold' }} icon={<FontAwesomeIcon icon={faSatellite} />}> Filter </Button>
                  </Dropdown>
                </Tooltip>
              </Col>
              <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
               <Tooltip style={{backgroundColor:'#928989db', color:'#0e0d0d'}} title={<span>Lọc khu vực chụp theo thời gian</span>} placement="top" >
                  <RangePicker style={{backgroundColor: '#ffd000', fontWeight: 'bold'}} icon={<FontAwesomeIcon icon={faCalendarAlt} />}> Date </RangePicker>
               </Tooltip>
              </Col>
              <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <Tooltip style={{backgroundColor:'#928989db', color:'#0e0d0d'}} title={<span>Lọc khu vực chụp theo chế độ chụp</span>} placement="top" >
                <Dropdown overlay={(<Mode_table mode ={mode} onChange = {handleChange_mode}/>)} trigger={['click']}> 
                <Button style={{backgroundColor: '#ffd000', fontWeight: 'bold'}}> Mode </Button>
                </Dropdown> 
                </Tooltip>
              </Col>
              </Row>
              <Row gutter={8}>
                <Button className={cx('cesium-svgPath-svg_Search')}  
                  onClick={handleButtonClick}> Search </Button>

              </Row>
              <Row gutter={8}>
                <div className={cx('Data_table')}>
                 <Data_table/> 
                </div>
              </Row>         
            </div>
          }
        <Tooltip style={{backgroundColor:'#928989db', color:'#0e0d0d'}} title={<span>Hiện thị quỹ đạo vệ tinh</span>} placement="top" >
        <Button size='large' style={{backgroundColor:'#928989db'}} icon={<FontAwesomeIcon icon={faSatellite} spin style={{color: "#152b84",}} />} onClick={handleClick_sat}/> 
        </Tooltip>
         {collapse_sat&&    
          <div className={cx('wrapper')}>   
            <Search_satellite ischeck ={show_sattellite} onChange = {handle_search_sat_change}/>
           </div> 
          }
        </Layout> 
     );
      }
export default Search;