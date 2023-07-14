import { SearchOutlined } from "@ant-design/icons";
import { useState, useContext } from "react";
import styles from './Satellite.page.scss'
import classNames from "classnames/bind";
import Select_nation from "./Select_nation";
import { Row, Col, DatePicker, Checkbox, Input, Button} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSatellite } from '@fortawesome/free-solid-svg-icons';
const { RangePicker } = DatePicker;
let cx = classNames.bind(styles)

const Search_satellite = ({ischeck, onChange}) => {
    const [checked, toggle_check] = useState(ischeck);
    console.log(checked)
    const handleCheck_button = (e)=>{
       toggle_check(!e);
       onChange(e)
    }

    return ( 
        <div>
            <Row className={cx('search_id')  }   >
                    <Col span={12} >Satellite_id</Col>
                    <Col span={12}> 
                    <Input min={1000} max={10000} defaultValue={22653} size="small"/>
                    </Col>
                </Row>
                <Row className={cx('search_id') }   >
                    <Col span={12} >Nation</Col>
                    <Col span={12}> <Select_nation size="small" />   </Col>
                </Row>
                <Row className={cx('search_id') }   >
                    <Col span={12} >Time_Setup</Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Button icon={<FontAwesomeIcon icon={faCalendarAlt} />} /></Col>
                    
                </Row>
                <Row>
                    <Button onClick={()=>{handleCheck_button(checked)}}>{checked?'show satellite':'hidden satellite'}</Button>
                </Row>
        </div>
        
     );
}
export default Search_satellite;
    