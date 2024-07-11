import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function CutomBreadcrumbs({title, tag}) {
  return (
    <>
        <Box py={2}>
            <Container maxWidth={false}>
                <Typography color="initial" fontSize={"12px"} className="breadcrumb_text">
                    {title} · <strong>{tag}</strong>
                </Typography>
            </Container>
        </Box>
    </>
  )
}
