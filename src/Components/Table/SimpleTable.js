import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import './SimpleTable.scss'
import { addIcon } from '../../Assets/Icons';
import { Navigate, useNavigate } from 'react-router-dom';
import Tab from '../Tab/Tab';
import HideAndDisplay from '../../Hooks/HideAndDisplay';
import { useDispatch } from 'react-redux';
import { updateState } from '../../Redux/common/action';


export default function SimpleTable({ list }) {
  const navigate=useNavigate();
  const { screenSize,
    getDimension,
    setDimension,
    headerFlag,
    setHeaderFlag}=HideAndDisplay();
    const dispatch=useDispatch();
  const grayColor='rgba(136, 148, 160, 0.1)';


  return (
    <>
  
 <TableContainer component={Paper}>

<Table aria-label="simple table">
  <TableHead>
    <TableRow>

      <TableCell><Typography variant='subtitle1'>Product Information</Typography></TableCell>
      <TableCell >Cart Name</TableCell>
      <TableCell >Shipping Point</TableCell>
      <TableCell >Created by</TableCell>
      <TableCell >Expiry</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {list?.map((row,index) => (
      <TableRow
        key={row.title}
        sx={{ '&:last-child td, &:last-child th': { border: 0 },background:(index%2===0)&& grayColor }}
      >
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell >{row.groupName}</TableCell>
        <TableCell >{row.shipping}</TableCell>
        <TableCell >{row.createdBy}</TableCell>
        <TableCell ><div className="flex">
          {row.expires < 7 ? <span style={{ color: 'orange' }}>Expires in {row.expires} days</span> : <span>Expires in {row.expires} days</span>}
          {row.status && <div className="product_list_status ml-10">
            <Typography variant="h5">
              {row.status}
            </Typography>
          </div>}
        </div></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
<div className='floating_add_button' >
  <img src={addIcon} alt="" onClick={()=>{navigate('/order'); dispatch(updateState({flag:true,component:''}));}}/>
</div>
    </>
  
  );
}
