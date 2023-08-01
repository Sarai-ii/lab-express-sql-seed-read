const db = require("../db/dbConfig.js");

const getAllPlaylists = async (songs_id) => {
  try {
  const allPlaylists = await db.any(
  "SELECT * FROM playlists WHERE songs_id=$1",
  songs_id
  );
  return allPlaylists;
  } catch (err) {
  return err;
  }
}

const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE songs_id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

const newPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (playlist_name, descrip, songs_id) VALUES($1, $2, $3) RETURNING *",
      [
        playlist.playlist_name,
        playlist.descrip,
        playlist.songs_id,
      ]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id = $1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlists SET playlist_name=$1, descrip=$2, songs_id=$3, where id=$4 RETURNING *",
      [
        playlist.playlist_name,
        playlist.descrip,
        playlist.songs_id,
        id,
      ]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllPlaylists,
  getPlaylist,
  newPlaylist,
  deletePlaylist,
  updatePlaylist,
};