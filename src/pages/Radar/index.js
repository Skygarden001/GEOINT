import styles from './Radar.page.scss';
import classNames from 'classnames/bind';
import { GeoJsonDataSource, Viewer, CameraFlyTo,CzmlDataSource } from 'resium';
import { Cartesian3, Color } from "cesium";
import {Context, Context_Sat} from '../../store/Context';
import { useContext, useState, useEffect } from 'react';

let cx = classNames.bind(styles)
function Radar() {
   const [state_sat, dispatch_sat] = useContext(Context_Sat)
   useEffect(() => {
   }, [state_sat])

   const [state, dispatch] = useContext(Context)
   useEffect(() => {
    }, [state])
   console.log(state_sat);

   const [hidden_geom, set_geom] = useState(true)
   const handleChange_hiddengeom = (e) => {set_geom(e);};

   // const [hidden_sat, set_sat] = useState(true)
   // const handleChange_hiddensat = (e) => {set_sat(e);};
   return ( 
         <>
            <Viewer full>
               <CameraFlyTo destination={Cartesian3.fromDegrees(112.747055,  11.008320, 100000000)}/>
               {
                  < CzmlDataSource data={state_sat}>
                  </CzmlDataSource>    
               }
               {hidden_geom&&
                  <GeoJsonDataSource data = {state} fill={Color.RED.withAlpha(0.25)} stroke={Color.RED.withAlpha(0.5)}/>
               }
               
            </Viewer>
         </>   
    );
}
export default Radar;

