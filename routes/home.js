const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Asosiy sahifa',
        isHome: true
    })
})

module.exports = router