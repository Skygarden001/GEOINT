import styles from './Satellite.page.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, CameraFlyTo, Viewer, Entity, PointGraphics,CzmlDataSource } from 'resium';
import radar from './radar.json'
import data_satellite1 from './satellite.czml'
import { Cartesian3, Color, Camera } from "cesium";
import Context from '../../store/Context';
import { useContext, useState, useEffect } from 'react';
import * as Cesium from "cesium";
import Search_satellite from './search_satellite';
import data from '../../components/icons/satellite_low.gltf'

let cx = classNames.bind(styles)
function Satellite() {
   //fetch('https://platform-assets.leolabs.space/visualization/data.json.gz')
   const [data_satellite, setDataSatellite] = useState([]);
   useEffect(() => {
      const fetchDataFromAPI = async () => {
         try {
           const response = await fetch('http://192.168.100.31:3001/api/satellite');
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           const data = await response.json();
           setDataSatellite(data); // Cập nhật state với dữ liệu mới từ API
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
       fetchDataFromAPI()
      console.log("data_satellite has changed:", data_satellite);
    }, []);
   
   return ( 
         <header className={cx('wrapper')}>
          <div className={cx('inner')} > 
            <Search_satellite/>
            <Viewer >
               < CzmlDataSource data = {data_satellite} />
            </Viewer >
          </div>
         </header>
    );
}
export default Satellite;

