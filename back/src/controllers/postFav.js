const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gemder } = req.body;

        if([id, name, origin, status, image, species, gemder].every(Boolean)) return res.status(401).json({message: "Faltan datos"});

        await Favorite.findOrCreate({where:{id, name, origin, status, image, species, gemder}})

        const allFavorites = await Favorite.findAll();

        return res.status(200).json(allFavorites);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = postFav;