import { LinearProgress, Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, useTheme } from "@mui/system";

const teams = [
  {
    id: "1",
    color: "primary.main",
    name: "Marketing Team",
    progress: 75,
    value: 122,
  },
  {
    id: "2",
    color: "warning.main",
    name: "Operations Team",
    progress: 50,
    value: 82,
  },
  {
    id: "3",
    color: "error.main",
    name: "Sales Team",
    progress: 25,
    value: 39,
  },
  {
    id: "4",
    color: "text.secondary",
    name: "Research Team",
    progress: 10,
    value: 9,
  },
];

const TeamProgress = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only("xs"))
  console.log(isXs)
  return (
    <Paper
      sx={{
        p: "1.5rem",
      }}
    >
      <Typography
        fontWeight={900}
        color="textPrimary"
        variant="h5"
        sx={{
          mb: "1rem",
        }}
      >
        Team Progress
      </Typography>
      <TableContainer>
        <Table
          size="small"
          sx={{
            "& td, & th": {
              border: 0,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell align="center">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team) => {
              return (
                <TableRow key={team.id}>
                  <TableCell>
                    <Typography color="textSecondary">{team.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {!isXs && <Box sx={{ flexGrow: 1, mr: 3 }}>
                        <LinearProgress
                          color="inherit"
                          sx={{ color: team.color }}
                          value={team.progress}
                          variant="determinate"
                        />
                      </Box>}
                      <Box sx={{ minWidth: 35 }}>
                        <Typography
                          component="span"
                          variant="h6"
                          color={team.color}
                        >{`${team.progress}%`}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" textAlign="center">
                      {team.value}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TeamProgress;
