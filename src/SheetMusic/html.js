module.exports = function () {
  return `<!DOCTYPE html>
    <html>
    <script src="opensheetmusicdisplay.min.js"></script>
    <script src="createMusXml.js"></script>
    <div id="osmdContainer">Hi</div>
    
    
    <script>
    var scoreDoc = new Document().implementation.createDocument("", "", null);
    var newEle = scoreDoc.createElement("score-partwise");
    newEle.setAttribute('version', '4.0')
    scoreDoc.appendChild(newEle);
    create_element(scoreDoc, 'score-partwise', 'part-list')
    create_element(scoreDoc, 'part-list', 'score-part', '', 'id', 'Shaker')
    create_element(scoreDoc, 'score-partwise', 'part', '', 'id', 'Shaker')
    createMeasure(scoreDoc, 1, createNoteArray())
    createMeasure(scoreDoc, 2, createNoteArray())
    
    var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdContainer");
      osmd.setOptions({
        backend: "svg",
        drawTitle: false,
        drawingParameters: "compacttight" // don't display title, composer etc., smaller margins
      });
    
      osmd
        .load(scoreDoc)
        .then(
          function() {
            osmd.render();
          }
        );
    
    </script>
    </html>`;
};
