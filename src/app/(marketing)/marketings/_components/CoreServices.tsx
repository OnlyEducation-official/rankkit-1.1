import { Box, Container, Grid } from "@mui/material"
import Image from "next/image"
import c from '@/assets/images/c.jpg'
import ServicesSwiper from "./ServicesSwiper"

const services = [
    {
        title: "Digital Marketing",
        description: "Crafting memorable brand experiences that resonate with your audience and stand out in the market.",
        image: c
    },
    {
        title: "Digital Marketing",
        description: "Building high-performance, visually stunning websites that convert visitors into customers.",
        image: c
    },
    {
        title: "Digital Marketing",
        description: "Driving targeted traffic and maximizing your ROI through strategic, data-driven marketing campaigns.",
        image: c
    },
    {
        title: "Digital Marketing",
        description: "Driving targeted traffic and maximizing your ROI through strategic, data-driven marketing campaigns.",
        image: c
    }
]

export default function CoreServices() {
    return (
        <Container
            maxWidth="lg"
        >

            <Grid
                container
                sx={{ justifyContent: "center", px: { xs: 2, md: 4 }, paddingBottom: 10, paddingTop: 10 }}
            >
                <ServicesSwiper services={services} />
            </Grid>
        </Container>




    )
}