import { Menu,  Checkbox, Button} from 'antd';
import { useState } from 'react';

const Mode_table= ({mode, onChange}) => {
  const handleCheckboxChange = (checkboxId) => {
    const updateCheckboxes = mode.map((checkbox)=>
      checkbox.id === checkboxId ? {...checkbox, checked: !checkbox.checked} : checkbox
  );
    //const value = event.target.checked;
    onChange(updateCheckboxes);
    
  }
const [ischecked_1, set1] = useState(true)
const change1 =()=> {
  set1(!ischecked_1)
}
const [ischecked_2, set2] = useState(true)
const change2 =()=> {
  set2(!ischecked_2)
}
const [ischecked_3, set3] = useState(true)
const change3 =()=> {
  set3(!ischecked_3)
}
  return (
    //su dung cai nay dropdown se tu cap nhat gia tri lam cho tu an dropdown
        // <Menu style={{backgroundColor:'GrayText'}}>
        //   {
        //     mode.map((checkbox) => (
        //       <Menu.Item key={checkbox.id}>
        //       <Checkbox key={checkbox.id}
        //       checked ={checkbox.checked}
        //       onChange ={()=>handleCheckboxChange(checkbox.id)}>
        //        {checkbox.label}
        //       </Checkbox>
        //       </Menu.Item>
        //     ))
        //     }
        // </Menu>

      <Menu style={{backgroundColor:'GrayText'}}>
      <Menu.Item key="option1"></Menu.Item>
        <Checkbox checked={ischecked_1} key={1} onChange={()=>{handleCheckboxChange(1);change1();}}>Spotlight</Checkbox>
      <Menu.Item key="option2"></Menu.Item>
        <Checkbox checked={ischecked_2} key={2} onChange={()=>{handleCheckboxChange(2);change2();}}>Sliding_spotlight</Checkbox>
      <Menu.Item key="option3"></Menu.Item>
        <Checkbox checked={ischecked_3} key={3} onChange={()=>{handleCheckboxChange(3);change3();}}>Stripmap</Checkbox>
      </Menu> 
    );
};
export default Mode_table