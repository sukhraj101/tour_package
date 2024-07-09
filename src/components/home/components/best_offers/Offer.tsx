import { Box } from "@mui/material";
import './offers.css';
import offerImg from './img/offer_img.png'




const styling = {
    subtitle:{
        textTransform:'uppercase',
        color: '#FBA919',
        fontFamily: "Gluten, cursive",
        fontWeight:'500',
        fontSize:"20px",
        textAlign:'center'
    },
    desc:{
        fontWeight:"500",
        fontSize:"40px",
        lineHeight:'47.08px',
        textAlign:'center',
        color:'white',

    }
}

const Offer = () => {
  return (
    <>
        <Box className="offer_wrpr" marginBottom={'10rem'}>
            <div className="offer_inner_wrpr">
                <Box className="offer_content" sx={{maxWidth:'515px'}}>
                    <Box component={'h3'} className="offer_title" sx={styling.subtitle}>BEST OFFERS FOR YOU</Box>
                    <Box component={'h2'} className="offer_desc" sx={styling.desc}>Get Exclusive <Box component={'span'} sx={{fontWeight:"800"}}>Offers</Box> & Book your <Box component={'span'} sx={{fontWeight:"800"}}>Activities Now!</Box></Box>
                </Box>
                <div className="offer_images_wrpr">
                    <div className="offer_images_card">
                        <Box className="offer_images_list" flex={'0 1 30%'}>
                            <img src={offerImg} alt="Offer Images" />
                        </Box>
                        <Box className="offer_images_list" flex={'0 1 30%'}>
                            <img src={offerImg} alt="Offer Images" />
                        </Box>
                        <Box className="offer_images_list" flex={'0 1 30%'}>
                            <img src={offerImg} alt="Offer Images" />
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    </>
  )
}

export default Offer