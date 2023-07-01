import NextLink from 'next/link';
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ml:0.5}}>Shop</Typography>
                </Link>
            </NextLink>
            <Box flex={1}/>
            <Box sx={{}}>
                <NextLink href='/category/men' passHref legacyBehavior>
                    <Link>
                        <Button>Hombres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/women' passHref legacyBehavior>
                    <Link>
                        <Button>Mujeres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/kid' passHref legacyBehavior>
                    <Link>
                        <Button>Niños</Button>
                    </Link>
                </NextLink>
            </Box>
            <Box flex={1}/>
            <IconButton>
                <SearchOutlined/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
