
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
    },
    
    wrapper: {
        margin: '0 5% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            
            fontSize: 12,
            alignItems: 'center',
            color: '#fff'
        }
    },
    container: {
        display: 'flex',
    }
})

const HeaderButtons = () => {

    const classes = useStyle();
    return (
        <Box className={classes.wrapper}>
            <Link><Button variant='contained' className={classes.login}>
                Login
            </Button></Link>
            <Link><Typography style={{marginTop: 5}}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={2} color='secondary'>
                    <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
        </Box>
    )
}

export default HeaderButtons;