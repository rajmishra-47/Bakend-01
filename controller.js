const message=require('./message')

module.exports = {
    get1: async (req, res) => {
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

    get2: async (req, res) => {
        try {
            const a = await message.message2(); 
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


    post1: async (req, res) => {
        try {
          
            await message.message3(req.params.a,req.params.b)
                res.send("done")

        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    },

    post2: async (req, res) => {
        console.log('resPost2 called');
        try {
        
            await message.message4(req.params.a,req.params.b)
                res.send("done")

        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    }
};