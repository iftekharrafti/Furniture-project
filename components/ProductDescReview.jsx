import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", margin: "0 auto", mb:5 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Info" {...a11yProps(1)} />
          <Tab label="Review" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={{border: '1px solid rgb(235, 235, 235)', p:2}}>
        <TabPanel value={value} index={0}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humor,
          or randomized words which don&apos;t look even slightly believable. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything embarrassing hidden in the middle of the
          text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humor.
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={{width: '50px'}} variant="p">
            <b>Color: </b>
          </Typography>
          <Typography variant="p">
            Gray, Green, Chocolate, Blue
          </Typography>

          <Typography variant="body1">
            <b>Size: </b>Semi Double, Double, Single
          </Typography>
          <Typography variant="body1">
            <b>Material: </b>Wood, Metal, Leather
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Review
        </TabPanel>
      </Box>
    </Box>
  );
}
