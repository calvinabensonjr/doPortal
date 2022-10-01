module.exports = {
    getAbout: (req, res) => {
        res.render('about.ejs')
    },
    getContact: (req, res) => {
        res.render('contact.ejs')
    },
    getPost: (req, res) => {
        res.render('post.ejs')
    },
}