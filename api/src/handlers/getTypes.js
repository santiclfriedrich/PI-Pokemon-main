const getType = require('../controllers/getTypes')

const getTypeHandlers = async (req, res) => {

    try {
        
        const type = await getType();
        res.status(200).json(type);

    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

module.exports = getTypeHandlers;