import react, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import './service.css'
const Services = () => {
    const [value, setValue] = useState(new Date());
    console.log(value.toDateString());
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, []);
  
    return (
        <div>
            <Container>

                <Grid container direction="row"  justifyContent="center"
                        alignItems="center"  spacing={2}>
                    {
                        data.map((item, index) => <Grid key={index} item lg={4} xs={12} md={6} sm={6}> <Card  xs={{ maxWidth: 340 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <Link to={`/specialities/${item.routername}`} >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                              
                            </CardActions></Link>
                        </Card> </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Services;