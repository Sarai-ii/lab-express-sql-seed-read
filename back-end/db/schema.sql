DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite BOOLEAN
);

DROP TABLE IF EXISTS playlists;
-- Create playlists table
CREATE TABLE playlists (
  id SERIAL PRIMARY KEY,
  playlist_name TEXT,
  descrip TEXT, 
  songs_id INTEGER REFERENCES songs (id)
  ON DELETE CASCADE
)