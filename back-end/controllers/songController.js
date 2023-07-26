const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const { checkNameAndArtist, checkBoolean } = require("../validations/checkSongs.js");

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    console.log(allSongs)
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
});

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
songs.post("/", checkBoolean, checkNameAndArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    console.log("working")
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

// UPDATE
songs.put("/:id", checkNameAndArtist, checkBoolean,  async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  if(updateSong) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

module.exports = songs;