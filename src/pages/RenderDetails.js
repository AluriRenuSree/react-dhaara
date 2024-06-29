import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Typography,
} from '@material-ui/core';
import Edit from '../assets/images/Edit.svg';
import Vector from '../assets/images/Vector.svg';
import Airtel from '../assets/images/Airtel.svg';
import Vodafone from '../assets/images/Vodafone.svg';
import HighBattery from '../assets/images/Battery.svg';
import DownloadCertificate from '../assets/images/Download.svg';

const useStyles = makeStyles((theme) => ({
  meterDetailsContainer: {
    margin: theme.spacing(3, 0),
  },
  meterDetailsBox: {
    backgroundColor: '#f0f0f07a',
    borderRadius: 8,
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: '0 0 70%',
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    lineHeight:"2.5em"
  },
  row: {
    marginBottom: theme.spacing(2),
  },
  label: {
    color: 'darkgrey',
    fontSize: '0.8rem',
    marginBottom: theme.spacing(0.5),
  },
  value: {
    fontSize: '0.9rem',
    fontWeight: 'medium',
  },
  select: {
    minWidth: 120,
    fontSize: '0.9rem',
  },
  statusActive: {
    backgroundColor: '#4caf50',
    color: '#ffffff',
    padding: theme.spacing(0.5, 1),
    borderRadius: 4,
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.8rem',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    marginRight: theme.spacing(1),
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: theme.spacing(1),
    backgroundColor: '#4caf50',
  },
  editIcon: {
    width: 16,
    height: 16,
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
  },
  iconGroup: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginLeft: theme.spacing(1),
    },
  },
  downloadButton: {
    marginTop: theme.spacing(2),
  },
}));

const RenderDetails = () => {
  const classes = useStyles();
  const [selectedMeter, setSelectedMeter] = React.useState('FM019152339');

  const handleMeterChange = (event) => {
    setSelectedMeter(event.target.value);
  };

  return (
    <div className={classes.meterDetailsContainer}>
      <Paper className={classes.meterDetailsBox}>
        <div className={classes.leftContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
            <Typography className={classes.label}>Select Meter</Typography>
             <select
              className={classes.select}
              value={selectedMeter}
              onChange={handleMeterChange}
              className={classes.statusValue}
            >
              <option value="">Select Meter</option>
              <option value="FM019152338">FM019152337</option>
              <option value="FM019152338">FM019152338</option>
              <option value="FM019152339">FM019152339</option>
            </select>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.label}>Meter Status</Typography>
              <div className={classes.statusActive}>
                <div className={classes.dot}></div>
                <span>Active</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.label}>Address</Typography>
              <Typography className={classes.value}>
                Castrol Lucknow Plant 2, Plot No. 98, Industrial Area, Basti - 209809
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography className={classes.label}>Meter Name</Typography>
                <img src={Edit} alt="Edit" className={classes.editIcon} />
              </div>
              <Typography className={classes.value}>Basement Borewell 1</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.label}>Device Model | Make</Typography>
              <Typography className={classes.value}>DN - 150 | 2023</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.label}>Device Last Calibration Date</Typography>
              <Typography className={classes.value}>23/08/2023</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.label}>Next Calibration Due Date</Typography>
              <Typography className={classes.value}>
                <span className={classes.greenDot}></span>20/08/2024
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.iconGroup}>
            <img src={Vodafone} alt="Vodafone" />
            <img src={Vector} alt="Vector" />
            <img src={Airtel} alt="Airtel" />
            <img src={Vector} alt="Vector" />
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
              <span style={{ marginRight: '4px' }}>Battery</span>
              <img src={HighBattery} alt="High Battery" />
            </div>
           
          </div>
          <div className={classes.row}>
            <img src={DownloadCertificate} alt="Download Certificate" className={classes.icon} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default RenderDetails;