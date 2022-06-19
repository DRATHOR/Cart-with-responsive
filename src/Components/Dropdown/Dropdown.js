import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import './Dropdown.scss'



export default function SelectTextFields({ item }) {
  const [currency, setCurrency] = React.useState('dev');
  React.useEffect(
    () => {
      setCurrency(item?.list[0]?.value)
    }, []
  );
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        fontSize:'3px',
      
        '& .MuiTextField-root': { mb: 1, width: '100%' },
        '& .MuiOutlinedInput-input':{ padding:'6px 5px'}
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          className='input_field'
          sx={{  
            border: '1px solid #E4E4E4',
          borderRadius: '4px'}}
          error={item?.helperText}
          // label="Select"
          value={currency}
          onChange={handleChange}
          // helperText={item?.helperText}
        >
          {item?.list?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
             <Typography variant="h5"> {option.value}</Typography>
            </MenuItem>
          ))}
        </TextField>
       {item?.helperText&& <div className="pb-20"><Typography variant='h6' sx={{color:'#D50000'}}>{item?.helperText}</Typography></div>}
      </div>


    </Box>
  );
}
