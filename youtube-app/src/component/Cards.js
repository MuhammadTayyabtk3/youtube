import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
  Box,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Styling/card.css";

export default function Cards({
  uniquekey,
  avatar,
  image,
  title,
  authorname,
  view,
  timestamp,
  onEditCard,
  onDeleteCard,
}) {
  const [open, setOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState({
    key: uniquekey,
    avatar,
    image,
    title,
    authorname,
    view,
    timestamp,
  });

  const handleEdit = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    onDeleteCard(uniquekey);
  };

  const handleSave = () => {
    onEditCard(currentCard.key, currentCard);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCard({ ...currentCard, [name]: value });
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "16px auto", width: "100%" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={image} />
        </CardActionArea>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Avatar aria-label="recipe">{avatar}</Avatar>
            <Typography gutterBottom variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
              {title}
            </Typography>
            <Button onClick={handleEdit} sx={{ minWidth: "auto" }}>
              <EditIcon />
            </Button>
            <Button onClick={handleDelete} sx={{ minWidth: "auto" }}>
              <DeleteIcon sx={{ color: "red" }} />
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {authorname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {view} views &bull; {timestamp} ago
          </Typography>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Card</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="avatar"
            label="Avatar"
            type="text"
            fullWidth
            value={currentCard.avatar}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={currentCard.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="authorname"
            label="Author Name"
            type="text"
            fullWidth
            value={currentCard.authorname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="image"
            label="Image"
            type="url"
            fullWidth
            value={currentCard.image}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="view"
            label="Views"
            type="number"
            fullWidth
            value={currentCard.view}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="timestamp"
            label="Timestamp"
            type="text"
            fullWidth
            value={currentCard.timestamp}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
