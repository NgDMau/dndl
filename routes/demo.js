module.exports = function (app) {
    app.get('/demo/audio_classification', function (req, res) {
        res.render("demo/audio_classification.ejs");
    });

    app.get('/demo/audio_regions', function (req, res) {
        res.render("demo/audio_regions.ejs");
    });

    app.get('/demo/audio_transcription', function (req, res) {
        res.render("demo/audio_transcription.ejs");
    });

    app.get('/demo/audio_emotions', function (req, res) {
        res.render("demo/audio_emotions.ejs");
    });

    app.get('/demo/image_polygons', function (req, res) {
        res.render("demo/image_polygons.ejs");
    });

    app.get('/demo/image_classification', function (req, res) {
        res.render("demo/image_classification.ejs");
    });

    app.get('/demo/image_object_detection', function (req, res) {
        res.render("demo/image_object_detection.ejs");
    });

    app.get('/demo/image_key_point', function (req, res) {
        res.render("demo/image_key_point.ejs");
    });

    app.get('/demo/image_segmentation', function (req, res) {
        res.render("demo/image_description.ejs");
    });

    app.get('/demo/image_ellipse', function (req, res) {
        res.render("demo/image_ellipse.ejs");
    });

    app.get('/demo/text_ner', function (req, res) {
        res.render("demo/text_named_entity_recognition.ejs");
    });

    app.get('/demo/text_sentiment_analysis', function (req, res) {
        res.render("demo/text_sentiment_analysis.ejs");
    });

    app.get('/demo/dialogue_analysis', function (req, res) {
        res.render("demo/dialogue_analysis.ejs");
    });

    app.get('/demo/pairwise_comparison', function (req, res) {
        res.render("demo/pairwise_comparison.ejs");
    });

    app.get('/demo/video_classifier', function (req, res) {
        res.render("demo/video_classifier.ejs");
    });
}
