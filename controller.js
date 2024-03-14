const message=require('./message')

module.exports = {
    getWellData: async (req, res) => {
        try {
            const wellData= await message.WellData(); 
            if (wellData == null) {
                res.send("Empty");
            } else {
                res.send(wellData);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    },

    getResData: async (req, res) => {
        try {
            const resData = await message.ResData(); 
            if (resData == null) {
                res.send("Empty");
            } else {
                res.send(resData);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    },


    putWellData: async (req, res) => {
        try {
          
            await message.UpdateWellData(req.params.a,req.params.b)
                res.send("done")

        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    },

    putResData: async (req, res) => {
        
        try {
        
            await message.UpdateResData(req.params.a,req.params.b)
                res.send("done")

        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data");
        }
    }
};