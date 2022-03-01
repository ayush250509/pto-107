function startClassification()
{
    navigator = mediaDevices.getUserMedia({audio: true });
    classifier = ml5.classification('https://teachablemachine.withgoogle.com/models/5UOFAXoFR/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}