\c tuner;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Wednesday Night Interlude', 'Drake, PARTYNEXTDOOR', 'If Youre Reading This Its Too Late', '3:01', true),
('Wassup', 'A$AP ROCKY', 'LONG LIVE A$AP', '2:37', true),
('22', 'JayO',' ', '2:21', true),
('Ron Artest', 'Babyface Ray, 42 Dugg',' ','2:32', true),
('She in Ha Mood', 'Ice Spice',' ','2:00', true),
('Summer Time', 'Will Smith, DJ.Jazzy Jeff',' ','3:10', false),
('Put it on Da Floor', 'Latto, Cardi B',' ','2:45', true);


INSERT INTO playlists (songs_id, playlist_name, descrip) VALUES
  ('3', 'POOL PARTY', 'The latest tunes that turn every summer up.'),
  ('4', 'POOL PARTY', 'The latest tunes that turn every summer up.'),
  ('4', 'POOL PARTY', 'The latest tunes that turn every summer up.'),
  ('4', 'WORKOUT JAMS', 'Energetic tunes for your workout.'),
  ('7', 'WORKOUT JAMS', 'Energetic tunes for your workout.'),
  ('5', 'WORKOUT JAMS', 'Energetic tunes for your workout.'),
  ('1', 'ROMANTIC RAP', 'Relaxing music to unwind and provide sensual vibes.'),
  ('2', 'ROMANTIC RAP', 'Relaxing music to unwind and provide sensual vibes.'),
  ('3', 'ROMANTIC RAP', 'Relaxing music to unwind and provide sensual vibes.');
