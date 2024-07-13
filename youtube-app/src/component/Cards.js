import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import "../Styling/card.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cards({avatar,image,title,authorname,view,timestamp}) {
  return (
    <Card sx={{ maxWidth: 345, m:3 ,}}>
        
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={image}
        />
        </CardActionArea>
        <CardContent>
          <div className='avatar'>
        <Avatar aria-label="recipe">
            {avatar}
          </Avatar>
          <Typography gutterBottom variant="h5" sx={{marginLeft:"10px",marginBottom:"0px"}}>
            {title}
          </Typography>
          <Button>
          <EditIcon/>
          </Button>
          <Button>
          <DeleteIcon sx={{color:'red'}}/>
          </Button>
          </div>
          <Typography variant="body2" color="text.secondary">
          {authorname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {view} views <sup>.</sup> {timestamp} ago
          </Typography>
        </CardContent>
      
    </Card>
  );
}
