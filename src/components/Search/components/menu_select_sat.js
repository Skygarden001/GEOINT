import { Menu,  Checkbox, Button} from 'antd';

export default function Menu_select_radar() {

    return ( 
        <Menu style={{backgroundColor:'GrayText'}}>
          <Menu.Item key="option1" style={{backgroundColor:'#92aa79', color:'#20467d',fontSize:'16px', fontWeight:'bold'}}>Capella</Menu.Item>
            <Checkbox key='1'>Capella 06</Checkbox>
            <Checkbox key='2'>Capella 07</Checkbox>
            <Checkbox key='3'>Capella 08</Checkbox>
            <Checkbox key='4'>Capella 09</Checkbox>
            <Checkbox key='5'>Capella 10</Checkbox>
          <Menu.Item key="option2" style={{backgroundColor:'#92aa79', color:'#20467d',fontSize:'16px', fontWeight:'bold'}}>COSMO-skymed</Menu.Item>
            <Checkbox key='6'>SKYMED 1</Checkbox>
            <Checkbox key='7'>SKYMED 2</Checkbox>
            <Checkbox key='8'>SKYMED 3</Checkbox>
            <Checkbox key='9'>SKYMED 4</Checkbox>
          <Menu.Item key="option3" style={{backgroundColor:'#92aa79', color:'#20467d',fontSize:'16px', fontWeight:'bold'}}>TerraSar</Menu.Item>
            <Checkbox key='10' >TerraSar</Checkbox>
          <Menu.Item key="option4" style={{display: 'flex',justifycontent: 'center', alignItems: 'center'}}>
            <Button size='large' style={{backgroundColor:'#85950b', color:'#fff', display: 'flex',justifycontent: 'center', alignItems: 'center'}}>APPLY
            </Button> 
          </Menu.Item>
        </Menu>
    );
}


// const Mode_table= ({mode, onChange}) => {
//   const handleCheckboxChange = (checkboxId) => {
//     const updateCheckboxes = mode.map((checkbox)=>
//       checkbox.id === checkboxId ? {...checkbox, checked: !checkbox.checked} : checkbox
//   );
//     //const value = event.target.checked;
//     onChange(updateCheckboxes);
//   }

//   return (
//         <Menu style={{backgroundColor:'GrayText'}}>
          
//             {/* <Checkbox key={1} onChange={handleCheckboxChange}>Spotlight</Checkbox>
//             <Checkbox key={1} onChange={handleCheckboxChange}>Sliding_spotlight</Checkbox>
//             <Checkbox key={1} onChange={handleCheckboxChange}>Stripmap</Checkbox> */}
//             {
//             mode.map((checkbox) => (
//               <Menu.Item key={checkbox.id}>
//               <Checkbox key={checkbox.id}
//               checked ={checkbox.checked}
//               onChange ={()=>handleCheckboxChange(checkbox.id)}>
//                {checkbox.label}
//               </Checkbox>
//               </Menu.Item>
//             ))}
//         </Menu>
//     );
// };
// export default Mode_table