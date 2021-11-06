import { Avatar, IconButton, Paper, Typography } from "@mui/material";

import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Box } from "@mui/system";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoodIcon from "@mui/icons-material/Mood";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Jan",
    fb: 2.5,
  },
  {
    name: "Feb",
    fb: 1.4,
  },
  {
    name: "Mar",
    fb: 6,
  },
  {
    name: "Avr",
    fb: 4,
  },
];

const CustomSmallCard = ({ arrowColor, Icon, iconBgColor, Arrow }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "1.5rem",
        py: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          sx={{
            bgcolor: `${iconBgColor}.main`,
            color: "common.white",
          }}
        >
          <Icon />
        </Avatar>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeigth: 300,
            }}
          >
            26,789
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Likes
          </Typography>
        </Box>
      </Box>
      <Arrow
        sx={{
          color: arrowColor,
        }}
      />
    </Paper>
  );
};

const ViewsSection = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: "1.5rem",
        py: "1.9rem",
      }}
    >
      <Typography variant="caption" fontSize="1rem" gutterBottom>
        Views
      </Typography>
      <Typography variant="h2" gutterBottom>
        6.967.431
      </Typography>
      <ResponsiveContainer width="100%" height={224}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            axisLine={false}
            dataKey="name"
            interval="preserveStartEnd"
            tick={{
              fill: theme.palette.text.secondary,
              fontSize: 12,
              fontWeight: 800,
            }}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: 16,
              boxShadow: theme.shadows[3],
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.background.paper,
            }}
          />
          <Area
            type="monotone"
            dataKey="fb"
            fill={theme.palette.primary.main}
            fillOpacity={0.3}
            stroke={theme.palette.primary.main}
            strokeWidth={6}
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <Paper
        sx={{
          bgcolor: "background.default",
          mt: "1.5rem",
          py: "2rem",
          px: "1.5rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            gap: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "background.paper",
              color: "common.white",
            }}
          >
            <DashboardIcon />
          </Avatar>
          <Typography variant="body1" fontWeight={700} color="textPrimary ">
            View Dashboard
          </Typography>
        </Box>
        <IconButton component={Link} to="/dashboard">
          <ArrowForwardIosIcon
            sx={{
              fontSize: "1rem",
            }}
          />
        </IconButton>
      </Paper>
    </Paper>
  );
};

const likes = [
  {
    id: 1,
    Icon: ThumbUpIcon,
    name: "Likes",
    value: "26,789",
    Arrow: ArrowDropUpIcon,
    arrowColor: "success.light",
    iconBgColor: "primary",
  },
  {
    id: 2,
    Icon: FavoriteIcon,
    name: "Love",
    value: "6,754",
    Arrow: ArrowRightIcon,
    arrowColor: "grey.500",
    iconBgColor: "error",
  },
  {
    id: 3,
    Icon: MoodIcon,
    name: "Smiles",
    value: "52,789",
    Arrow: ArrowDropDownIcon,
    arrowColor: "error.main",
    iconBgColor: "warning",
  },
];

const LikesAndViews = () => {
  return (
    <Box
      sx={{
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {likes.map((item) => (
        <CustomSmallCard
          key={item.id}
          arrowColor={item.arrowColor}
          Icon={item.Icon}
          iconBgColor={item.iconBgColor}
          Arrow={item.Arrow}
        />
      ))}
      <ViewsSection />
    </Box>
  );
};

export default LikesAndViews;
