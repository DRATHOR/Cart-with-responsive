import { Divider, Drawer, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { applyMpq, copy, deleteBox, edit, heart } from '../Assets/Icons';
import CheckBox from '../Components/CheckBox/CheckBox';
import DerivedDropdown from '../Components/DerivedDropdown/DerivedDropdown';
import FooterActionBar from '../Components/FooterActionBar/FooterActionBar';
import { useDispatch } from 'react-redux';
import './Cart.scss'
import { updateState } from '../Redux/common/action';

export const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(updateState({ flag: true, component: 'cart', message: 'Classic_John45012', cartRef: '#123456723', paging: '' }))
    const cartData = [
        {
            title: `10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR`,
            jobName: 'Front door with glass',
            product: '#CWD',
            from: 'Garage Door',
            availability: 'IN STOCK',
            netPrice: '$4500.00',
            unitPrice: '$4800.00',
            // (Available for Pickup)',


        }
    ]
    const footerAction = [
        {
            name: 'Add more',

        },
        {
            name: 'Place Order',
            onclick: () => navigate('/'),
        }
    ];

    return (
        <>
            {cartData?.map((items) => {
                return (

                    <div className="Container mb-8 border_box_card">
                        <div className='p-24'>
                            <div className=''>
                                <Grid container columns={{ xs: 5, sm: 8, md: 12 }} spacing={1}>
                                    <Grid item xs={5} sm={6} md={9} >
                                        <div className=''>
                                            <div className='pb-8'>
                                                <Typography variant='h5' className="cart_title">
                                                    {items.title}
                                                </Typography>
                                            </div>
                                            <div className='flex'>

                                                <Typography variant='subtitle1'>
                                                    Job Name :{items.jobName}
                                                </Typography>
                                            </div>
                                            <div className='flex'>

                                                <Typography variant='subtitle1'>
                                                    Product : {items.product}
                                                </Typography><span style={{ color: 'green' }}>&#8226;</span>
                                                <Typography variant='subtitle1'>
                                                    {items.from}
                                                </Typography>
                                            </div>
                                            <div className='flex'>
                                                <Typography variant='subtitle1'>Availability:</Typography>
                                                <Typography variant='subtitle1'>
                                                    <span style={{ color: '#17A85F', fontWeight: 800, padding: '0px 5px' }}>{items.availability}</span>

                                                </Typography>
                                                <Typography variant='h6'>
                                                    {'(Available for Pickup)'}
                                                </Typography>

                                            </div>

                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='pb-24 pt-24'>
                                <Grid container columns={{ xs: 5, sm: 8, md: 12 }}>

                                    <Grid item xs={5} sm={5.33} md={8} >
                                        <Grid container columns={{ xs: 5, sm: 8, md: 8 }}>
                                            <Grid item xs={2.5} sm={4} md={4} >
                                                <div>
                                                    <button className='increament_button mr-8'>-</button>
                                                    <input className='input_increament' />
                                                    <button className='increament_button ml-8' >+</button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={2.5} sm={4} md={4} >

                                                <div className='flex align-item-center flex-direction-col'>
                                                    <Typography variant='subtitle1' sx={{ color: '#17A85F', }}>
                                                        Standard Multiplier: .432
                                                    </Typography>
                                                    <Typography variant='subtitle1' sx={{ color: '#17A85F' }}>
                                                        Secondary Multipliers Applied
                                                    </Typography>
                                                    <Typography variant='subtitle1' className='apply_mpq flex '>
                                                        <span className='pr-8'>
                                                            <img src={applyMpq} alt="" width='16px' height="16px" />
                                                        </span>Apply MPQ
                                                    </Typography>
                                                </div>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} sm={2.66} md={4} >
                                        <div className='flex flex-direction-col align-item-end '>
                                            <Typography variant='subtitle2' className='flex'>
                                                Net Price:<span style={{ fontSize: '16px', fontWeight: 700 }}>
                                                    <strong>$2400.00</strong>
                                                </span>

                                            </Typography>
                                            <Typography variant='subtitle2'>
                                                Unit Price: $1200.00
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <Grid container columns={{ xs: 5, sm: 8, md: 12 }}>
                                <Grid item xs={1.25} sm={2} md={3} >
                                    <div className='bottom_button p-t-b-13 border-right w-700'>
                                        <span className='pr-8'>
                                            <img src={heart} alt="" width='16px' height="16px" />
                                        </span>
                                        Favorites
                                    </div>
                                </Grid>
                                <Grid item xs={1.25} sm={2} md={3} >
                                    <div className='bottom_button p-t-b-13 border-right w-700'>
                                        <span className='pr-8'>
                                            <img src={edit} alt="" width='16px' height="16px" />
                                        </span>
                                        Edit
                                    </div>
                                </Grid>
                                <Grid item xs={1.25} sm={2} md={3} >
                                    <div className='bottom_button p-t-b-13 border-right w-700'>
                                        <span className='pr-8'>
                                            <img src={copy} alt="" width='16px' height="16px" />
                                        </span>
                                        Copy
                                    </div>
                                </Grid>
                                <Grid item xs={1.25} sm={2} md={3} >
                                    <div className='bottom_button p-t-b-13 w-700'>
                                        <span className='pr-8'>
                                            <img src={deleteBox} alt="" width='16px' height="16px" />
                                        </span>
                                        Delete
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                )
            })}
            <div className="cart_section mb-8 ">
                <Grid container columns={{ xs: 5, sm: 8, md: 12 }} spacing={1}>
                    <Grid item xs={5} sm={4} md={6} >
                        <div className='mb-8'>
                            <Grid container columns={{ xs: 5, sm: 4, md: 6 }} spacing={1}>

                                <Grid item xs={5} sm={4} md={6}>
                                    <div className='sub_section_date'>
                                        <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '8px' }}>Change Delivery Date</Typography> <TextField type="date" sx={{ '& .MuiOutlinedInput-input': { padding: '10px 9px' } }} />
                                        <Typography variant='h6' sx={{ color: '#34495E', paddingTop: '8px' }}>Standard Delivery: Tue May 28 - 2019</Typography>
                                    </div>

                                </Grid>
                                <Grid item xs={5} sm={4} md={6}>
                                    <div className='sub_section_date'>
                                        <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '8px' }}>Purchase Order Number</Typography> <TextField type="text" placeholder='Enter PO Number' sx={{ '& .MuiOutlinedInput-input': { padding: '10px 9px' } }} />
                                        <Typography variant='h6' sx={{ color: '#34495E', paddingTop: '8px' }}>This PO will be useful to track this order items </Typography>
                                    </div>
                                </Grid>



                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={5} sm={4} md={6}>
                        <div className='sub_section_billing mb-8 '>
                            <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '10px', fontWeight: 700 }}>Bill Summary</Typography>
                            <div className='flex justify-content-space-between'>
                                <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '10px' }}>Sub Total</Typography>
                                <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '10px' }}>$ 4500.00</Typography>
                            </div>
                            <div className='flex justify-content-space-between'>
                                <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '10px' }}>Energy Surcharge</Typography>
                                <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '10px' }}>$ 70.18</Typography>
                            </div>
                            <div className='flex justify-content-space-between'>
                                <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '10px' }}>Sales Tax</Typography>
                                <Typography variant='h6' sx={{ color: '#34495E', paddingBottom: '10px' }}>$ 490.93</Typography>
                            </div>
                            <div className='flex justify-content-space-between pb-16'>
                                <Typography variant='h5' sx={{ color: '#2A292A', paddingBottom: '', fontWeight: 700 }}>Total</Typography>
                                <Typography variant='h5' sx={{ color: '#2A292A', paddingBottom: '', fontWeight: 700 }}>$ 5061.11</Typography>
                            </div>
                            <Divider sx={{ border: '1px solid #DDDDDD ' }} />
                            <div className='pt-4'>
                                <CheckBox lable='Apply Tax' lableBold />
                                {/* <Typography></Typography> */}
                                <Typography variant='body2'>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</Typography>
                            </div>


                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='Container border_box_card mb-8 '>
                <Grid container columns={{ xs: 5, sm: 8, md: 12 }}>
                    <Grid item xs={5} sm={4} md={6}>
                        <div className='sub_section p-16'>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>Billing to</Typography>
                            <div className='sub_section pt-16 ' >
                                {/*  style={{ borderRight: '1px solid #DDDDDD ' }} */}
                                <Typography variant='h5' sx={{ fontWeight: 700, color: '#2A292A', paddingBottom: '8px' }}>Bement Jared</Typography>
                                <Typography variant='h5'>144 Curt Shores, 50, Madison Avenue
                                </Typography>
                                <Typography variant='h5'>
                                    Hixson - 42040</Typography>




                            </div>
                            <div className='sub_section pt-8'>
                                <Typography variant='h5'>Contact: (123) 456 7890</Typography>
                            </div>
                        </div>

                    </Grid>

                    <Grid item xs={5} sm={4} md={6}>

                        <div className='sub_section p-16'>
                            <Typography variant='h6' sx={{ fontWeight: 700 }}>Shipping To</Typography>
                            <div className='sub_section pt-16 ' >
                                <Typography variant='h5' sx={{ fontWeight: 700, color: '#2A292A', paddingBottom: '8px' }}>Bement Jared</Typography>
                                <Typography variant='h5'>144 Curt Shores, 50, Madison Avenue
                                </Typography>
                                <Typography variant='h5'>
                                    Hixson - 42040</Typography>




                            </div>
                            <div className='sub_section pt-8 '>
                                <Typography variant='h5'>Contact: (123) 456 7890</Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>
            <FooterActionBar buttonList={footerAction} />
        </>
    );
}