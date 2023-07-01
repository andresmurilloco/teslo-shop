import NextLink from 'next/link'
import { CartList, OrdenSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"

const SummaryPage = () => {
  return (
    <ShopLayout title="Resumen de la orden" pageDescription="Resumen de la orden">
      <Typography variant="h1" component={'h1'}>Resumen de la orden</Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen(3 Productos)</Typography>
              <Divider sx={{my:1}}/>
              <Box display={'flex'} justifyContent={'end'}>
                <NextLink href={'/checkout/address'} passHref legacyBehavior>
                    <Link>Editar</Link>
                </NextLink>
              </Box>
              <Typography variant='subtitle1'>Dirección de entrega</Typography>
              <Typography>Andrés Murillo</Typography>
              <Typography>Av. Circunvalar #6-45</Typography>
              <Typography>Jamundí</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 3176755861</Typography>
              <Divider sx={{my:1}}/>
              <Box display={'flex'} justifyContent={'end'}>
                <NextLink href={'/checkout/cart'} passHref legacyBehavior>
                    <Link>Editar</Link>
                </NextLink>
              </Box>
              <OrdenSummary/>
              <Box sx={{mt:3}}>
                <Button color="secondary" className='circular-btn' fullWidth>Confirmar Orden</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage