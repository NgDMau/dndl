var path = require('path')

module.exports = function (app) {
    app.get('/image_object_detection', function (req, res) {
        if (req.isAuthenticated()) {
            res.render("full_system/image_object_detection.ejs")
        } else {
            res.redirect('/login');
        }
    });

    app.get('/text_named_entity', function (req, res) {
        if (req.isAuthenticated()) {
            res.render("full_system/text_named_entity.ejs")
        } else {
            res.redirect('/login');
        }
    });

    app.get('/audio_transcription', function (req, res) {
        if (req.isAuthenticated()) {
            res.render("full_system/audio_transcription.ejs")
        } else {
            res.redirect('/login');
        }
        //res.render("full_system/audio_transcription.ejs");
    });

    app.get('/audio_emotions', function (req, res) {
        if (req.isAuthenticated()) {
            res.render("full_system/audio_emotions.ejs")
        } else {
            res.redirect('/login');
        }
    });

    app.get('/image_classification', function (req, res) {
        if (req.isAuthenticated()) {
            res.render("full_system/image_classification.ejs")
        } else {
            res.redirect('/login');
        }
    });

}