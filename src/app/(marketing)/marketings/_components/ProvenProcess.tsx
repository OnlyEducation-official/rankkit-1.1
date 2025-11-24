import { Search } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const process = [
    {
        image: <SearchIcon />,
        name: "Discover",
        desc: "We dive deep into your brand, goals, and audience to build a solid strategic foundation."
    },
    {
        image: <DesignServicesIcon />,
        name: "Design",
        desc: "Our creative team translates strategy into stunning visuals and intuitive user experiences."
    },
    {
        image: <CodeIcon />,
        name: "Develop",
        desc: "We bring the designs to life with clean, efficient code and robust technical implementation."
    },
    {
        image: <RocketLaunchIcon />,
        name: "Deliver & Scale",
        desc: "We launch your project and provide ongoing support and optimization to ensure continued growth."
    },
]


export default function ProvenProcess() {
    return (
        <Container maxWidth="lg">
            <Grid>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}
                >
                    <Typography variant="h2">
                        Our Prooven Process
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            paddingTop: 2
                        }}
                    >
                        We follow a clear and collaborative process to ensure your project's success from start to finish.
                    </Typography>
                </Box>

                <Grid 
                    container 
                    spacing={2}
                    paddingTop={8}
                >

                    {process.map((p, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 12, sm: 6, md: 3 }} // 1 per row on mobile, 2 on tablet, 3 on desktop
                        >
                            <Box>
                               {index + 1}. {p.name}
                            </Box>
                        </Grid>
                    ))}

                </Grid>

            </Grid>
        </Container>
    )
}