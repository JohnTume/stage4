
import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class MyComponent extends React.Component {

  // MediaCard = () => {
  //   const useStyles = makeStyles({
  //     root: {
  //       maxWidth: 345,
  //     },
  //     media: {
  //       height: 140,
  //     },
  //   });
    
  //   const classes = useStyles();
  //   return (
  //       <Card className={classes.root}>
  //       <CardActionArea>
  //           <CardMedia
  //           className={classes.media}
  //           image="/static/images/cards/contemplative-reptile.jpg"
  //           title="Contemplative Reptile"
  //           />
  //           <CardContent>
  //           <Typography gutterBottom variant="h5" component="h2">
  //               Lizard
  //           </Typography>
  //           <Typography variant="body2" color="textSecondary" component="p">
  //               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
  //               across all continents except Antarctica
  //           </Typography>
  //           </CardContent>
  //       </CardActionArea>
  //       <CardActions>
  //           <Button size="small" color="primary">
  //           Share
  //           </Button>
  //           <Button size="small" color="primary">
  //           Learn More
  //           </Button>
  //       </CardActions>
  //       </Card>
  //   );
  // }


  render() {
    return ( 
      <StackGrid columnWidth={"70%"}>
        <div key="key1">Item 1</div>
        <div key="key2">
        </div>
        <div key="key3">Item 3</div>
        <div key="key4">Item 1</div>
        <div key="key5">Item 2</div>
        <div key="key6">
        </div>
        <div key="key7">Item 1</div>
        <div key="key8">Item 2</div>
        <div key="key9">Item 3</div>
      </StackGrid>
    );
  }
}
