const express = require("express");

const { getPlaylists } = require("../queries/playlists.js");

const playlists = express.Router({ mergeParams: true });
const {
  getAllPlaylists,
  getPlaylist,
  newPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists");

// INDEX
playlists.get("/", async (req, res) => {
  const { songsId } = req.params;
    // console.log(songsId)
    // console.log(req.params)
  try {
    const allPlaylists = await getAllPlaylists(songsId);
    res.json(allPlaylists);
  } catch (err) {
    res.json(err);
  }
});

// SHOW
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  if (playlist) {
    res.json(playlist);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
playlists.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPlaylist = await updatePlaylist(id, req.body);
  if (updatedPlaylist.id) {
    res.status(200).json(updatedPlaylist);
  } else {
    res.status(404).json("Playlist not found");
  }
});

playlists.post("/", async (req, res) => {
  const playlist = await newPlaylist(req.body);
  res.status(200).json(playlist);
});

// DELETE
playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedPlaylist = await deletePlaylist(id);
  if (deletedPlaylist.id) {
    res.status(200).json(deletedPlaylist);
  } else {
    res.status(404).json({ error: "Playlist not found" });
  }
});
module.exports = playlists;