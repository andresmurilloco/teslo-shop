import { Grid, Typography } from "@mui/material"

export const OrdenSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>3</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{`$${155.36}`}</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Impuestos (15%)</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{`$${33.35}`}</Typography>
        </Grid>
        <Grid item xs={6} sx={{mt:2}}>
            <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} sx={{mt:2}} justifyContent={'end'}>
            <Typography variant="subtitle1">{`$${155-36}`}</Typography>
        </Grid>
    </Grid>
  )
}
