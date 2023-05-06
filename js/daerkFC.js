// daerkFC.js

document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.getElementById('create-file-btn');
  createButton.addEventListener('click', createDrkFile);
});

function createDrkFile() {
  const username = prompt('Enter username:');
  const password = prompt('Enter password:');
  const date = new Date().toLocaleDateString();

  const fileContents = `>>%thelostmoon#&@&#%<_|#${username}%|_# -/-%>$~("#${password}");#-/-%UCDaT#<>-/-$$
>>%STRLOKK#<> -/-%ITRUN#<> -/-%HRS#<> -/- %Prn#<> -/-%ITDaT#<> -/- ${date}#<> -/-%U2UD#<>$$`;

  const blob = new Blob([fileContents], { type: 'text/plain' });
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);
  anchor.download = 'file.drk';
  anchor.click();
}
