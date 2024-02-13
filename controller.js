const message=require('./message')

module.exports = {
    get: async (req, res) => {
        try {
            const a = await message.message1(); 
            if (a == null) {
                res.send("Empty");
            } else {
                res.send(a);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    },
};