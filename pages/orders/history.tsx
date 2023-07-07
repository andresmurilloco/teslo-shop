import NextLink from 'next/link'
import { ShopLayout } from "@/components/layouts";
import { Box, Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React from "react";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 100 },
//   {
//     field: "paid",
//     headerName: "Pagado",
//     description: "Muestra si la orden ya fue pagada o no",
//     width: 200,
//     renderCell: (params:GridValueGetterParams)=>{
//         return (
//             params.row.paid ? <Chip color='success' label='Pagada' variant="outlined"/> : <Chip color='error' label='No pagada' variant="outlined"/>)
//     }
//   },
//   { field: "fullname", headerName: "Nombre Completo", width: 300 },
//   {
//     field: "orden",
//     headerName: "Ver orden",
//     sortable:false,
//     width: 200,
//     renderCell: (params:GridValueGetterParams)=>{
//         return (
//             <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
//                 <Link underline='always'>Ver orden</Link>
//             </NextLink>
//         )
//     }
//   },
// ];

const rows = [
  { id: 1, paid: false, fullname: "Andrés Murillo"},
  { id: 2, paid: true, fullname: "Alfonso Lopez" },
  { id: 3, paid: false, fullname: "Monica Galindo" },
  { id: 4, paid: true, fullname: "Alberto Ramirez" },
  { id: 5, paid: false, fullname: "Armando Paredes" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes del cliente"
    >
      <Typography variant="h1" component={"h1"}>
        Historial de ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: "650", width: "100%" }}>
          {/* <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
          /> */}
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
