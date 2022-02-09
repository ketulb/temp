import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import  { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: 280
    },

    carousel: {
        marginTop: 10
    }
})
const Banner = () => {
    const classes = useStyle();
    return (
        
        <Carousel
            autoplay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonProps = {{
                style: {
                    background: '#FFFFFF',
                    color: '#494949',
                    borderRadius: 0,
                    margin: 0
                }
            }}
            // For space between heading and below
            className={classes.carousel}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} />

                ))
            }
        </Carousel>
    )
}

export default Banner;