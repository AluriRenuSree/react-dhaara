import React from 'react';
import Info from '../assets/images/Info.svg';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './WaterConsumption.css';

const WaterConsumption = () => {
  return (
    <div className="cardContainer">
      <h2 variant="h4" className="title">Water Consumption Summary</h2>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
           <Card>
              <CardContent className="cardContent">
              <Box className="report-title">
               <Typography variant="h6">Daily Report</Typography>
               <div className="successLabelContainer">
                <span className="successLabel">Success
               <img src={Info} alt="Info Icon" className="infoIcon" /></span>
               </div>
               </Box>   
                <hr/>
                <Typography className="date-time">Monday, 18 Dec 2023 | 8:00AM - Tuesday, 19 Dec 2023 | 8:00 AM</Typography>
               
              <Grid container spacing={2} style={{marginTop:'1em'}}>
              <Grid item xs={4}>
              <Typography variant="h3" component="div" gutterBottom style={{ color: '#1a237e', fontWeight: 'bold',fontSize:"2rem" }}>
                35.9 KL
              </Typography>
              <Box display="flex" alignItems="center" marginBottom={2} borderColor="red" className="UpWard">
                <ArrowUpwardIcon style={{ color: 'red', marginRight: '8px' }} />
                <Typography variant="body2" style={{ color: 'red' }}>
                  9% 34 KL more From Last Month
                </Typography>
              </Box>
              </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Pump Working Hours
                  </Typography>
                  <Typography variant="body1">
                    1 Hour 54 Mins
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Average Flow Rate
                  </Typography>
                  <Typography variant="body1">
                    1.3 M³/S
                  </Typography>
                </Grid>

</Grid>
             </CardContent>
           </Card>
           </Grid>
           <Grid item xs={12} md={6}>
          <Card>
            <CardContent className="cardContent">
              <Typography variant="h6" gutterBottom>Monthly Report</Typography>
              <hr/>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                December 2023 | 18th November - 19 Dec 2023
              </Typography>
            
              <Grid container spacing={2} style={{marginTop:'1em'}}>
              <Grid item xs={4}><Typography variant="h3" component="div" gutterBottom style={{ color: '#1a237e', fontWeight: 'bold',fontSize:"2rem" }}>
                944.32 KL
              </Typography>
              <Box display="flex" alignItems="center" marginBottom={2} className="DownWard">
                <ArrowDownwardIcon style={{ color: 'green', marginRight: '8px' }} />
                <Typography variant="body2" style={{ color: 'green' }}>
                  8% 345 KL less From Last Month
                </Typography>
              </Box></Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Pump Working Hours
                  </Typography>
                  <Typography variant="body1">
                    1 Hour 54 Mins
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Average Flow Rate
                  </Typography>
                  <Typography variant="body1">
                    1.3 M³/S
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Max Extraction
                  </Typography>
                  <Typography variant="body1">
                    1200 KL
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Average Extraction
                  </Typography>
                  <Typography variant="body1">
                    800 KL
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WaterConsumption;
