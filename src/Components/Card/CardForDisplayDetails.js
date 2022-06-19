import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { TypoGraphy } from "../Typography/Typography";

import "./CardForDisplayDetails.scss";
import { Checkbox, Typography } from "@mui/material";
import CheckBox from "../CheckBox/CheckBox";
import { useNavigate } from "react-router-dom";

const CardForDisplayDetails = ({showCheckbox,title,description,onclick,lableBold}) => {
  const navigate=useNavigate();
  const brownArrow=lableBold&&'#66332B !important';
  return (
    <div className="Card_for_dispaly_details_container" >
      <div className="main" onClick={onclick}>
        {showCheckbox&&<div>
          <CheckBox lable={title} lableBold />
        </div>}
        {!showCheckbox&&<div>
         {title&& <Typography variant="h4" className={lableBold&&'lable_class'}>{title}</Typography>}
          {description&&<Typography variant="body2">{description}</Typography>}
        </div>}
        <div><ArrowForwardIosIcon sx={{fontSize:'16px',color:brownArrow}}/></div>
      </div>
    </div>
  ); 
};

export default CardForDisplayDetails;
