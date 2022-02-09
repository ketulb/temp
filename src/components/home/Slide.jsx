import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { products } from '../../constants/data.js';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        height: 150,
    },
    component: {
        marginTop: 12,
        background: '#FFFFFF',
    },
    deal: {
        padding: '15px, 20px',
    }
})

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Slide = () => {

    const classes = useStyle(); 
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography>Deal of the day</Typography>
                <img src={timerURL} />

            </Box>
            
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <img src={product.url} className={classes.image} />
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;