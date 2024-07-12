import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { Card } from '../data/Carddata';

export default function Cards({image,title,authorname,view,timestamp}) {
  return (
    <Card sx={{ maxWidth: 345, m:3 ,}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {authorname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {view} views <sup>.</sup> {timestamp} ago
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
