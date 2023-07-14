import { Select } from 'antd';

const name_nation = {
        "CN": "China",
        "RU": "Russia",
        "US": "United States",
        "IN": "India",
        "GB": "United Kingdom",
        "ES": "Spain",
        "JP": "Japan",
        "TR": "Turkey",
        "NO": "Norway",
        "CL": "Chile",
        "NG": "Nigeria",
        "FR": "France",
        "ID": "Indonesia",
        "AE": "United Arab Emirates",
        "DE": "Germany",
        "KR": "South Korea",
        "CO": "Colombia",
        "IT": "Italy",
        "UA": "Ukraine",
        "ZA": "South Africa",
        "KP": "North Korea",
        "PE": "Peru",
        "CZ": "Czechia",
        "VN": "Vietnam",
        "CA": "Canada",
        "SE": "Sweden",
        "SA": "Saudi Arabia",
        "AR": "Argentina",
        "BR": "Brazil",
        "DK": "Denmark",
        "VE": "Venezuela",
        "SG": "Singapore",
        "DZ": "Algeria",
        "EG": "Egypt",
        "EE": "Estonia",
        "TH": "Thailand",
        "KZ": "Kazakhstan",
        "CH": "Switzerland",
        "AU": "Australia",
        "PL": "Poland",
        "BY": "Belarus",
        "NL": "Netherlands",
        "IL": "Israel",
        "AZ": "Azerbaijan",
        "MY": "Malaysia",
        "PT": "Portugal",
        "EC": "Ecuador",
        "BE": "Belgium",
        "AT": "Austria",
        "UY": "Uruguay",
        "PK": "Pakistan",
        "IQ": "Iraq",
        "MX": "Mexico",
        "IR": "Iran",
        "LU": "Luxembourg",
        "FI": "Finland",
        "MA": "Morocco",
        "PH": "Philippines",
        "JO": "Jordan",
        "LT": "Lithuania",
        "NZ": "New Zealand",
        "BG": "Bulgaria",
        "HU": "Hungary"     
    }
const Array_nations = Object.values(name_nation);
const National_Options = [];
const size= Array_nations.length 

for (let i = 0; i < size; i++) {
    National_Options.push({
        value: `${i+1}`,
        label: `${Array_nations[i]}`,
      });
}
const options = National_Options
console.log(National_Options)
const Select_nation = () => ( 
  <Select
    showSearch
    size='small'
    
    style={{
      width: 80,
      color: 'white',
    }}
    
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options = {options}
    inputStyle={{ '::placeholder': { color: 'white' } }}
  />
);
export default Select_nation;