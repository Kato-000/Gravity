function handleFile() {
    var fileInput = document.getElementById("csvFile");
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
    var contents = e.target.result;
    displayCSVContents(contents);
    };

    reader.readAsText(file);
}

function displayCSVContents(contents) {
    console.log(contents);
}
