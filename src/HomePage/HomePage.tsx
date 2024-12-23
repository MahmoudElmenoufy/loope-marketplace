import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FeaturedSellers from "./FeaturedSellers/FeaturedSellers";

function HomePage() {
  return (
    <>
      <div className="px-6 py-2 bg-[#FDF8F5] flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <img src="loope.png" alt="Loope logo" />
        </div>
        <div>
          <input
            type="search"
            placeholder="Search"
            className="px-4 py-2 mr-8 rounded-lg"
          />
          <FilterAltIcon />
        </div>
        <NotificationsIcon />
      </div>

      <div className="grid grid-cols-2 grid-rows-1 !max-h-[25vh">
        <div>
          <h1 className="text-3xl font-medium mb-5">Featured Sellers</h1>
          <div className="flex gap-x-5 overflow-x-auto">
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
            <FeaturedSellers imageSrc="robot.jpeg" imageAlt="robot" />
          </div>
        </div>
        <div className="flex justify-end !w-fit">
          <img src="one.jpg" alt="" className="!w-[400px] !h-full rounded-xl" />
        </div>
      </div>

      <div className="flex justify-center ">
        <Stack
          direction="row"
          spacing={1}
          className="fixed bottom-10 m-auto p-3 bg-[#18403C]  rounded-full flex justify-center gap-x-20"
        >
          <IconButton aria-label="delete">
            <HomeIcon fontSize="large" className="text-white cursor-pointer" />
          </IconButton>
          <IconButton aria-label="delete">
            <CategoryIcon
              fontSize="large"
              className="text-white cursor-pointer"
            />
          </IconButton>
          <IconButton aria-label="delete">
            <AddCircleIcon
              fontSize="large"
              className="text-white cursor-pointer"
            />
          </IconButton>
          <IconButton aria-label="delete">
            <LocalMallIcon
              fontSize="large"
              className="text-white cursor-pointer"
            />
          </IconButton>
          <IconButton aria-label="delete">
            <AccountCircleIcon
              fontSize="large"
              className="text-white cursor-pointer"
            />
          </IconButton>
        </Stack>
      </div>
    </>
  );
}

export default HomePage;

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//     React.useState<null | HTMLElement>(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             <img src="loope.png" alt="loope icon" />
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             <IconButton
//               size="large"
//               aria-label="show 4 new mails"
//               color="inherit"
//             >
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }

// import * as React from "react";
// import { extendTheme, styled } from "@mui/material/styles";
// import HomeIcon from "@mui/icons-material/Home";
// import CategoryIcon from "@mui/icons-material/Category";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import StoreIcon from "@mui/icons-material/Store";
// import PersonIcon from "@mui/icons-material/Person";
// import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid2";

// const NAVIGATION: Navigation = [
//   {
//     segment: "home",
//     title: "Home",
//     icon: <HomeIcon />,
//   },
//   {
//     segment: "category",
//     title: "Category",
//     icon: <CategoryIcon />,
//   },
//   {
//     segment: "add-item",
//     title: "Add Item",
//     icon: <AddBoxIcon />,
//   },
//   {
//     segment: "shop",
//     title: "Shop",
//     icon: <StoreIcon />,
//   },
//   {
//     segment: "profile",
//     title: "Profile",
//     icon: <PersonIcon />,
//   },
// ];

// const demoTheme = extendTheme({
//   palette: {
//     mode: "light",
//     background: {
//       default: "#FDF8F5",
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath: string): Router {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path: string | URL) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function DashboardLayoutBasic(props: any) {
//   const { window } = props;

//   const router = useDemoRouter("/home");

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer>
//           <Grid container spacing={1}>
//             <Grid size={5} />
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={4}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={8}>
//               <Skeleton height={100} />
//             </Grid>

//             <Grid size={12}>
//               <Skeleton height={150} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>

//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//           </Grid>
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }
