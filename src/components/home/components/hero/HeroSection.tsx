import { Box} from '@mui/material';
import './hero_section.css';



const styling = {
  heading:{
    fontSize:"48px",
    fontWeight:"800",
    fontFamily:"Inter",
    color:'#FFFFFF',
    lineHeight:'56px',
    textAlign:'center'
  },
  desc:{
    color:"#FFFFFF",
    fontSize:"20px",
    fontWeight:"400"
  }
}

const HeroSection = () => {
  return (
    <>
      <Box className="hero_wrpr" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box className="hero_inner_wrpr">
          <Box>
            <div className="hero_contents">
              <Box component={'h1'} sx={styling.heading} className="hero_txt">Explore Saudi Arabia</Box>
              <Box component={'p'} sx={styling.desc} className="hero_txt">Discover the country's hidden gems and breathtaking landscapes</Box>
            </div>
            <div className="hero_cta"></div>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HeroSection