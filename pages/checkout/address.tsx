import { ShopLayout } from "@/components/layouts"
import { Box, Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"

const AddressPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección de destino">
        <Typography variant="h1" component={'h1'}>Direccion</Typography>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Apellido' variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Dirección' variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Dirección 2 (Opcional)' variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <Select variant="filled" label='pais' value={1}>
                        <MenuItem value={1}>Costa Rica</MenuItem>
                        <MenuItem value={2}>México</MenuItem>
                        <MenuItem value={3}>Colombia</MenuItem>
                        <MenuItem value={4}>Uruguay</MenuItem>
                        <MenuItem value={5}>Brasil</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Telefono' variant="filled" fullWidth/>
            </Grid>
        </Grid>
        <Box sx={{mt:5}} display={'flex'} justifyContent={'center'}>
           <Button color={'secondary'} className="circular-btn" size='large'>
                Revisar pedido
            </Button> 
        </Box>
    </ShopLayout>
  )
}

export default AddressPage