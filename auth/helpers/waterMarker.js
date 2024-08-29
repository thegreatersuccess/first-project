const Jimp = require('jimp');
module.exports = async (req,res,next) => {
    if (!req.files.length) {
        return next()
    }

    let results = req.files.map(async file=>{
        const imagePath = file.path
        const main = await Jimp.read(imagePath);
       
        return main.quality(100).write(imagePath);
    })

    await Promise.all(results)
    next()
}