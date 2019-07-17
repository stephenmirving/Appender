(function() {
  $('#btn_more_fields').click(function() {
    const lastInputId = $('.input--file--last').attr('id'),
          lastNum = lastInputId.substr(lastInputId.length - 1),
          section = $(
      '<section class="section" id="last">' +
        '<label for="file_input_4" class="label--last">File No. ' + lastNum + '</label>' +
        '<input class="input--file--last" id="file_input_"' + lastNum + ' type="file" value="fileupload">' +
      '</section>'
    ),

    section.appendTo($('#upload_area'));
  });
})();

// function handleFileSelect() {
//   if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
//     alert('The File APIs are not fully supported in this browser.');
//     return;
//   }

//   let input = document.getElementById('file_input_1'),
//       file,
//       fr;
//   if (!input) {
//     alert("Couldn't find a file input.");
//   }
//   else if (!input.files) {
//     alert("This browser doesn't seem to support the `files` property of file inputs.");
//   }
//   else if (!input.files[0]) {
//     alert("Please select a file before clicking 'Load'");
//   }
//   else {
//     file = input.files[0];
//     fr = new FileReader();
//     fr.onload = receivedText;
//     //fr.readAsText(file);
//     fr.readAsDataURL(file);
//   }
// }

// function receivedText() {
//   document.getElementById('editor').appendChild(document.createTextNode(fr.result));
// }
