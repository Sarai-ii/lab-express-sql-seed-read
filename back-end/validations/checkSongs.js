const checkNameAndArtist = (req, res, next) => {
    // console.log("Checking name")
    // console.log(req.body.name)
    // console.log(req.body.artist)
    if (req.body.name && req.body.artist) {
      next();
    } else {
      res.status(400).json({ error: "Name of Song and Artist is required" });
    }
  };
  
const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (
      is_favorite == "true" ||
      is_favorite == "false" ||
      is_favorite == true ||
      is_favorite == false ||
      is_favorite == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
};
  
module.exports = { checkBoolean, checkNameAndArtist};