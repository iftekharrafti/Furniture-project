import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import NewArrival from "./NewArrival";
import Featured from "./Featured";
import OnSale from "./OnSale";
import Tending from "./Tending";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    width: "40%",
    margin: "0 auto",
    textAlign: "center",
    [theme.breakpoints.down("xs")]:{
      width: "80%",
    }
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Products() {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Box className={styles.titleContainer}>
          <Typography className="title" variant="h4">
            Our Products
          </Typography>
          <Typography className="desc" variant="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mt:3 }}>
          <Box sx={{ display:'flex', justifyContent:'center' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="New Arrival" {...a11yProps(0)} />
              <Tab label="Featured" {...a11yProps(1)} />
              <Tab label="On Sale" {...a11yProps(2)} />
              <Tab label="Tending" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <NewArrival />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Featured />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <OnSale />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Tending />
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}
