// daerkFC.js
function createDrkFile() {
  const username = prompt('Enter username:');
  const password = prompt('Enter password:');
  const fileName = prompt('Enter file name:');
  const date = new Date().toLocaleDateString();

  const fileContents = `>>%thelostmoon#&@&#%<_|#${username}%|_# -/-%>$~("#${password}");#-/-%UCDaT#<>-/-$$
>>%STRLOKK#<> -/-%ITRUN#<> -/-%HRS#<> -/- %Prn#<> -/-%ITDaT#<> -/- ${date}#<> -/-%U2UD#<>$$`;

  const blob = new Blob([fileContents], { type: 'text/plain' });
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);
  anchor.download = `${fileName}.drk`;
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
