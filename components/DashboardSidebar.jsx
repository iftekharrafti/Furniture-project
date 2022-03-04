import { List, ListItem, ListItemText, Box } from '@mui/material';
import React from 'react';
import useAuth from '../hooks/useAuth';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listItem:{
        fontSize:"36px", 
        cursor: "pointer", 
        borderBottom:"1px solid rgb(235,235,235)", 
        "&:hover":{
            color:"#fff", 
            backgroundColor:"#FF7004"
        }
    },
    icons: {
        fontSize:"20px",
        marginRight:"10px"
    },
    item:{
        fontSize:"34px",
        textTransform:"uppercase"
    }
  }));

const DashboardSidebar = () => {
    const {logOut} = useAuth()
    const styles = useStyles()

    return (
        <Box sx={{border: "1px solid rgb(235,235,235)", m:0, p:0}}>
            <List sx={{m:0, p:0}}>
                <ListItem className={styles.listItem}>
                    <DashboardOutlinedIcon className={styles.icons} />
                    <ListItemText sx={{fontSize:"36px"}} className={styles.item}>DASHBOARD</ListItemText>
                </ListItem>
                <ListItem className={styles.listItem}>
                    <StorefrontOutlinedIcon className={styles.icons} />
                    <ListItemText className={styles.item}>ORDERS</ListItemText>
                </ListItem>
                <ListItem className={styles.listItem}>
                    <ContactsOutlinedIcon className={styles.icons} />
                    <ListItemText className={styles.item}>ADDRESS</ListItemText>
                </ListItem>
                <ListItem className={styles.listItem}>
                    <SettingsOutlinedIcon className={styles.icons} />
                    <ListItemText className={styles.item}>SETTINGS</ListItemText>
                </ListItem>
                <ListItem onClick={logOut}  className={styles.listItem}>
                    <LogoutIcon className={styles.icons} />
                    <ListItemText className={styles.item}>LOGOUT</ListItemText>
                </ListItem>
            </List>
        </Box>
    );
};

export default DashboardSidebar;