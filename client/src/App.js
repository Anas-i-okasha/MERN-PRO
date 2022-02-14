import React, { Component } from "react";
import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core'
import Posts from '../src/Component/posts/post'
import Form from './../src/Component/form/form'
class App extends Component {
  render() {
    return (
     <Container maxidth="lg">
       <AppBar position="static" color="inherit">
         <Typography variant="h2" align="center">Memo</Typography>
       </AppBar>
       <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
          <Grid item xs={12} sm={7}>
            <Posts/>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Form/>
          </Grid>
          </Grid>
        </Container>
       </Grow>
     </Container>
    );
  }
}

export default App;
