import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@mui/material";
import { useSelector } from 'react-redux'
import SideProductModal from '../components/SideProductModal';

const useStyles = makeStyles((theme) => ({
  list: {
    fontWeight: 600,
    color: "red",
  },
}));

// const pages = ['home', 'about']
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const styles = useStyles();
  const quantity = useSelector(state => state.cart.quantity)

  const toggleDrawer = (open) => (event) => {
    setDrawer(open)
  }

  const pages = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Home Furniture",
      href: "/homeFurniture",
    },
    {
      id: 4,
      name: "Office Furniture",
      href: "/officeFurniture",
    },
    {
      id: 5,
      name: "Hospital Furniture",
      href: "/hospitalFurniture",
    },
    {
      id: 6,
      name: "Contact",
      href: "/contact",
    },
  ];
  const persons = [
    {
      id: 1,
      name: "Signin",
      href: "/signIn",
    },
    {
      id: 1,
      name: "Cart",
      href: "/cart",
    },
    {
      id: 3,
      name: "Wishlist",
      href: "/wishlist",
    },
    {
      id: 4,
      name: "Compare",
      href: "/Compare",
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Image src="/img/logo.png" alt="" width="150" height="45" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "auto",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link href={page.href} passHref>
                    <Typography
                      style={{ fontSize: "16px", fontWeight: 400 }}
                      variant="h5"
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Image src="/img/logo.png" alt="" width="150" height="45" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href={page.href} passHref>
                  <Typography
                    style={{ fontSize: "16px", fontWeight: 400 }}
                    variant="h5"
                  >
                    {page.name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SearchIcon></SearchIcon>
              <Tooltip
                style={{ margin: "0 10px 0 10px" }}
                title="Open settings"
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PersonOutlineIcon sx={{ color: "#fff" }}></PersonOutlineIcon>
                </IconButton>
              </Tooltip>

              {/* Shopping cart Icon */}
              <Badge badgeContent={quantity} color="secondary" onClick={toggleDrawer(true)} sx={{cursor: "pointer" }}>
                <ShoppingBagIcon color="action" sx={{color:'#fff'}} />
              </Badge>
              <SideProductModal toggleDrawer={toggleDrawer} drawer={drawer} />
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {persons.map((person) => (
                <MenuItem key={person.name} onClick={handleCloseNavMenu}>
                  <Link href={person.href} passHref>
                    <Typography
                      style={{ fontSize: "16px", fontWeight: 400 }}
                      variant="h5"
                    >
                      {person.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
