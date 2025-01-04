import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imageList from '../utils/Structures';
import { Grow } from '@mui/material';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export default function ImageCard() {
    const [expanded, setExpanded] = React.useState(false);
    const [appearImage, setAppearImage] = React.useState(imageList[0]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0 0', padding: '10px' }}
            {...(true ? { timeout: 1000 } : {})}
        >
            <div className='w-full flex items-center justify-center  p-0 md:p-5 lg:p-10 py-0'>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar alt="avatar" sx={{ bgcolor: 'black' }} aria-label="recipe" src="/images/images.png" />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        image={appearImage?.url}
                        alt={appearImage?.alt}
                        id={appearImage?.index}
                        sx={{ display: appearImage?.display }}
                    />
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit >
                        <CardContent sx={{ display: "flex", overflow: "scroll" }}>
                            {imageList.map((d) =>                               
                                        <CardMedia
                                            key={d.index} // Add a unique key here
                                            component="img"
                                            image={d.url}
                                            alt={d.alt}
                                            sx={{ display: d.display, cursor: 'pointer' }}
                                            onClick={(e) => {setAppearImage(d)}}
                                        />                      
                            )}
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        </Grow>

    );
}