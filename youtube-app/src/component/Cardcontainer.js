import React, { useState } from "react";
import Cards from "./Cards";
import { Carddata } from "../data/Carddata";
import "../Styling/card.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Box,
} from "@mui/material";

const CardContainer = () => {
  const [cards, setCards] = useState(Carddata);

  const handleEditCard = (key, updatedCard) => {
    setCards(
      cards.map((card) => (card.key === key ? { ...card, ...updatedCard } : card))
    );
  };

  const handleDeleteCard = (key) => {
    setCards(cards.filter((card) => card.key !== key));
  };

  const [open, setOpen] = useState(false); // State to control dialog visibility
  const [newCard, setNewCard] = useState({
    key: Date.now(),
    avatar: "", // Example values, replace with actual data
    image: "",
    title: "",
    authorname: "",
    view: 0,
    timestamp: new Date().toLocaleString(),
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const addNewCard = () => {
    setCards([...cards, newCard]);
    setNewCard({
      key: Date.now(),
      avatar: "",
      image: "",
      title: "",
      authorname: "",
      view: 0,
      timestamp: new Date().toLocaleString(),
    });
    setOpen(false); // Close the dialog after adding a new card
  };

  return (
    <>
      <Box display="flex" justifyContent="center" p={2}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Card
        </Button>
      </Box>
      <Grid container spacing={2} className="cards">
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.key}>
            <Cards
              uniquekey={card.key}
              avatar={card.avatar}
              image={card.image}
              title={card.title}
              authorname={card.authorname}
              timestamp={card.timestamp}
              view={card.view}
              onEditCard={handleEditCard}
              onDeleteCard={handleDeleteCard}
            />
          </Grid>
        ))}
      </Grid>
      {/* Dialog for adding new card */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Card</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={newCard.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="authorname"
            label="Author Name"
            type="text"
            fullWidth
            value={newCard.authorname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="view"
            label="Views"
            type="number"
            fullWidth
            value={newCard.view}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="image"
            label="Image URL"
            type="text"
            fullWidth
            value={newCard.image}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="timestamp"
            label="Timestamp"
            type="text"
            fullWidth
            value={newCard.timestamp}
            onChange={handleChange}
          />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addNewCard} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardContainer;
