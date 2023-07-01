import NextLink from "next/link";
import { CartList, OrdenSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout
      title="Resumen de la orden 123456"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component={"h1"}>
        Orden: ABC123
      </Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen(3 Productos)</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display={"flex"} justifyContent={"end"}>
                <NextLink href={"/checkout/address"} passHref legacyBehavior>
                  <Link>Editar</Link>
                </NextLink>
              </Box>
              <Typography variant="subtitle1">Dirección de entrega</Typography>
              <Typography>Andrés Murillo</Typography>
              <Typography>Av. Circunvalar #6-45</Typography>
              <Typography>Jamundí</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 3176755861</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display={"flex"} justifyContent={"end"}>
                <NextLink href={"/checkout/cart"} passHref legacyBehavior>
                  <Link>Editar</Link>
                </NextLink>
              </Box>
              <OrdenSummary />
              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip
                sx={{ my: 2 }}
                label="Orden ya fue pagada"
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
