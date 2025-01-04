import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ProjectPage from './projectsPage';
import AboutCard from '../components/AboutCard';
import ImageCard from '../components/ImageCard';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function DashBoardPage() {
    const navigate = useNavigate();
    return (    
            <Box sx={{ flexGrow: 1, height:'100vh' }}>
                <Grid container spacing={2} sx={{height:'100%', padding:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Item id='about me' sx={{height:'500px', display:'block'}}>
                            <AboutCard />
                            <Button id='about me' sx={{padding:'5px', width:'100%' }} onClick={(event)=>{navigate(event.target.id)}}>About Me</Button>
                        </Item>                        
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Item id='project' sx={{height:'500px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <ProjectPage />
                        </Item> 
                        <Button onClick={navigate('project')}>Project</Button>                       
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Item id='skills' sx={{height:'500px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <ImageCard />
                        </Item>                        
                    </Grid>
                </Grid>
            </Box>
    );
}