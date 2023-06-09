import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { makeStyles } from './';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = makeStyles();
     
    useEffect(() => {
       dispatch(getPosts());
    }, [currentId, dispatch])
     
    return (
        <Grow in classNamehviu>
    <Container>
        <Grid  container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                 <Posts  setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                 <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
              </Grid> 
    </Container>
  </Grow>
      
 )
};

export default Home