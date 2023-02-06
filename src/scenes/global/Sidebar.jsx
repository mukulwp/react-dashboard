import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutline,
  HomeOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleOutline,
  PersonOutline,
  PieChartOutline,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import ProfileImage from "../../assets/t1.jpg";
import { Link } from "react-router-dom";

//Item component
const Item = ({ title, titleTag, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      title={titleTag}
    >
      <Typography>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
};

const Leftbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width: 990px)");
  const [isCollapsed, setIsCollapsed] = useState(isMobile? true : false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          marginRight: "3px !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="squre">
          {/* Logo and Menu Icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography varian="h3" color={colors.grey[100]}>
                  DASHBOARD
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={ProfileImage}
                  alt="profileuser"
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  John
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "13%"}>
            <Item
              title="Dashboard"
              titleTag={!isCollapsed ? undefined : "Dashboard"}
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              titleTag={!isCollapsed ? undefined : "Manage Team"}
              to="team"
              icon={<PeopleOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Information"
              titleTag={!isCollapsed ? undefined : "Contact Information"}
              to="/contact"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              titleTag={!isCollapsed ? undefined : "Invoices Balances"}
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              titleTag={!isCollapsed ? undefined : "Profile Form"}
              to="/form"
              icon={<PersonOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calanedar"
              titleTag={!isCollapsed ? undefined : "Calanedar"}
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              titleTag={!isCollapsed ? undefined : "FAQ"}
              to="/faq"
              icon={<HelpOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              titleTag={!isCollapsed ? undefined : "Bar Chart"}
              to="/bar-chart"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              titleTag={!isCollapsed ? undefined : "Pie Chart"}
              to="/pie-chart"
              icon={<PieChartOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              titleTag={!isCollapsed ? undefined : "Line Chart"}
              to="/line-chart"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              titleTag={!isCollapsed ? undefined : "Geography Chart"}
              to="/geography-chart"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Leftbar;
