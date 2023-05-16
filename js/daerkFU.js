// function to handle file upload
function handleFileUpload(event) {
  const file = event.target.files[0];

  // create a FileReader object
  const reader = new FileReader();

  // define the function to be executed when the file is loaded
  reader.onload = function() {
    // get the contents of the file
    const fileContents = reader.result;

    // decode the file contents from base64
    const decodedContents = atob(fileContents);

    // parse the file contents and extract snippets of code
    const codeSnippets = parseCodeSnippets(decodedContents);

    // do something with the code snippets (e.g. add to a global data array)
    addToDataArray(codeSnippets);

    // print the updated data array
    console.log(dataArray);
  };

  // read the file as text
  reader.readAsText(file);
}

// function to parse code snippets from file contents
function parseCodeSnippets(fileContents) {
  const regex = /%<_\|#([\s\S]*?)#_\|%>/g;
  const codeSnippets = [];

  let match = regex.exec(fileContents);
  while (match) {
    const snippet = match[1].trim(); // Trim whitespace from the extracted snippet
    codeSnippets.push(snippet);
    match = regex.exec(fileContents);
  }

  codeSnippets.forEach((snippet, index) => {
    console.log(`Code Snippet ${index + 1}: ${snippet}`);
  });

  return codeSnippets;
}

// function to add code snippets to a global data array
function addToDataArray(codeSnippets) {
  // your logic to add code snippets to a global data array here
  // for example:
  globalDataArray.push(...codeSnippets);
}

// add event listener for file upload input
const fileUploadInput = document.getElementById('file-upload');
fileUploadInput.addEventListener('change', handleFileUpload);
