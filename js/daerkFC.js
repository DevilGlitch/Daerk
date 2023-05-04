const readline = require('readline');
const fs = require('fs');

// Get user input for username and password
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter username: ', (username) => {
  rl.question('Enter password: ', (password) => {

    // Get current date
    const date = new Date().toLocaleDateString();

    // Define file contents
    const fileContents = `>>%thelostmoon#&@&#%<_|#${username}%|_# -/-%>$~("#${password}");#-/-%UCDaT#<>-/-$$
>>%STRLOKK#<> -/-%ITRUN#<> -/-%HRS#<> -/- %Prn#<> -/-%ITDaT#<> -/- ${date}#<> -/-%U2UD#<>$$`;

    // Write contents to file with .drk extension
    fs.writeFile('file.drk', fileContents, (err) => {
      if (err) throw err;
      console.log('File saved as file.drk');
    });

    // Close readline interface
    rl.close();
  });
});
