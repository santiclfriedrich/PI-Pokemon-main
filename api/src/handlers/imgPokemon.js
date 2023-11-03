const getImage = require ('../controllers/imagePokemon');

const imageHandler = async (req, res) => {

    try {

        const newPoke = await getImage()
        res.status(200).json(newPoke)
    } catch (error) {
        res.status(404).json({error: error.message})
    }

}

module.exports = imageHandler