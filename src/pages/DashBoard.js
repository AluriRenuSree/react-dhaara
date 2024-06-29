import { 
    Typography, 
    Container, 
    Grid, 
    Card, 
    CardContent, 
    Button,IconButton,Box
  } from '@mui/material';
import './DashBoard.css';
import userManual from '../assets/images/UserManual.svg'
import RenderDetails from './RenderDetails';
import BarChart from './BarChart';
import WaterConsumption from './WaterConsumption';

const DashBoard=()=>{
    return(
        <>
      <Container maxWidth="lg" className="dashboard-container">
      <Box className="title">
          <Typography variant="h4" gutterBottom style={{ flexGrow: 1 }}>
            Welcome to Dhaara Live Dashboard!
          </Typography>
          <Box className="User-manual-layout">
          <IconButton color="inherit" >
            <img src={userManual} alt="User Manual" className="user-manual-image" style={{ height: 24, width: 'auto', marginLeft: 8 }} />
          </IconButton>
          </Box>
        </Box>
<RenderDetails/>
<WaterConsumption/>
<BarChart/>
      </Container>
      </>
    )
}
export default DashBoard;