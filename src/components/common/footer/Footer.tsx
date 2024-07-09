import { Box } from '@mui/material';
import './footer.css';
import copyright from '@assets/img/footer/copyright.png'


const Footer = () => {
  return (
    <>
      <div className="footer_wrpr">
        {/* <Box className='footer_top_wrpr'>
          <div className="footer_top">
            <div className="footer_top_left"></div>
            <div className="footer_top_right"></div>
          </div>
        </Box> */}
        <Box className='footer_bottom_wrpr' sx={{background:"#000"}}>
          <Box className="footer_bottom" sx={{maxWidth:"1400px",marginInline:'auto',padding:"0 20px"}}>
            <Box className="footer_copyright" sx={{display:'flex',alignItems:'center',columnGap:"1%"}}>
              <Box component={'p'} className="footer_copyright_txt" sx={{fontWeight:'500',fontSize:'16px',color:"#fff",padding:"12px 0"}}>Powered by:</Box>
              <div className="footer_copyright_img">
                <img src={copyright} alt="copyright" />
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Footer