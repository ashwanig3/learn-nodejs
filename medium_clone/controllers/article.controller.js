const Articles = require('../models/article');


module.exports = {

    articlesfound : (req, res) => {
        Articles.find((err, data) => {
          if(err) {
            res.json({
              msg: 'Could not find'
            })
          } else {
            res.json({
              data
            })
          }
        })
      },

      newArticle : (req, res) => {
        const blogDetails = req.body;
        var newArticle = new Articles({ title: blogDetails.title,
                                        description: blogDetails.description,
                                        body: blogDetails.body,
                                            claps: blogDetails.claps })
        newArticle.save((err, blogDetails) => {
            if(err) {
            res.json({
                msg: 'Error'
            })
            } else {
            res.json({
                blog: blogDetails
            })
            }
        })
        }

}

