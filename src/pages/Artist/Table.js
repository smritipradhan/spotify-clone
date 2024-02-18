import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import classes from "./Artist.module.scss";

function createData(name, subscribers, duration) {
  return { name, subscribers, duration };
}

const SongsTable = ({ songsList }) => {
  const handleTableRowClick = (row) => {
    console.log(row);
  };

  const rows = songsList?.map((songItem) => {
    return {
      name: songItem?.name,
      subscribers: songItem?.subscribers,
      duration: songItem?.duration,
    };
  });
  console.log(songsList);
  return (
    <Table
      sx={{
        marginTop: "20px",
        minWidth: 650,
        color: "white",
        ".MuiTableRow-root": {
          border: "2px solid #ffc0cb00",
          padding: "0px 10px !important",
        },

        "& .MuiTableRow-root:hover": {
          backgroundColor: "#272727 !important",
        },
      }}
    >
      <TableBody>
        {rows?.map((row, index) => (
          <TableRow
            hover={true}
            key={row.name}
            onClick={(e) => {
              handleTableRowClick(row);
            }}
          >
            <TableCell
              component="th"
              scope=""
              sx={{
                color: "#8A8A89",
                padding: "15px 10px",
                width: "20px",
              }}
            >
              {index + 1}
            </TableCell>
            <TableCell
              component="th"
              scope=""
              sx={{
                color: "#8A8A89",
                padding: "15px 10px",
                width: "30px",
              }}
            >
              <div className={classes.image}>{/* <img src={image} /> */}</div>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{ color: "white", padding: "15px 0" }}
            >
              {row.name}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "white",
                padding: "15px 0",
                color: "#8A8A89",
              }}
            >
              {row.subscribers}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "white",
                padding: "15px 30px",
                color: "#8A8A89",
              }}
            >
              {row.duration}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SongsTable;
