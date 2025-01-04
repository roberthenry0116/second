import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Grow } from '@mui/material';

export default function AboutCard() {
    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0 0', padding: '10px' }}
            {...(true ? { timeout: 1000 } : {})}
        >
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                    component="img"
                    image="/images/6912596.jpg"
                    alt='face'
                    title="My Face"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Robert Henry
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        I am a full-stack web developer.
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center", margin: '20px' }}>
                    <Rating name="half-rating-read" defaultValue={5} precision={1} readOnly size='large' />
                </CardActions>
            </Card>
        </Grow>

    );
}