const express = require('express')
const router = express.Router()

const ConsumerController = require('../controller/consumers_controller')

//////////////Authentication///////////////////////////
const User = require('../models/Consumer')

const passportService = require('../services/passportConsumer')
const passport = require('passport')

const requireAuth = passport.authenticate('jwtConsumer', { session: false })
const requireSignin = passport.authenticate('localConsumer', { session: false })
//////////////////////End of Authentication/////////////////
//consumers

router.get('/',ConsumerController.viewAllConsumers)
router.get('/signin',ConsumerController.viewSignInConsumer)
router.get('/signup',ConsumerController.viewSignUp)
router.get('/success',ConsumerController.viewSuccessCreateAccount)
router.get('/checkin/:idConsumer',requireAuth,ConsumerController.viewAConsumer)
router.get('/update/:idConsumer',requireAuth,ConsumerController.viewUpdateAConsumer)
router.get('/delete/:idConsumer',requireAuth,ConsumerController.viewDeleteAConsumer)
router.get('/booking/:idConsumer',requireAuth,ConsumerController.viewStep1Booking)
//router.get('/booking/:idConsumer/:id/confirmed',requireAuth,ConsumerController.viewSelectedTailor)

//router.get('/booking/:idConsumer/:id',requireAuth,ConsumerController.viewStep3Booking)
router.get('/booking/:idConsumer/:id',requireAuth,ConsumerController.viewStep2Booking)
/////////////Authentication ////////////

router.post('/booking/:idConsumer/:id',ConsumerController.step2Booking)         
router.post('/signin', requireSignin, ConsumerController.signin)

router.post('/signout', ConsumerController.signout)
router.post('/signup', ConsumerController.signup)
//////////// end of authentication//////////////

router.post('/add',ConsumerController.newConsumer)
router.post('/update/:idConsumer',ConsumerController.updateAConsumer)
router.post('/delete/:idConsumer',ConsumerController.deleteAConsumer)


module.exports = router