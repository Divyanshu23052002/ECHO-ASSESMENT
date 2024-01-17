const users = [
    { name: 'John Doe', age: 25 },
    { name: 'Alexander', age: 17 },
    { name: 'Nelson Mandela', age: 78 },
    { name: 'Mahatma Gandhi', age: 56 },
    { name: 'Nikol Tesla', age: 39 }
];

document.getElementById('continueWithEmail').addEventListener('click', function () {
    // Sorting the array based on the age property
    const sortedUsers = users.slice().sort((a, b) => a.age - b.age);

    // Extracting names from the sorted array
    const sortedNames = sortedUsers.map(user => user.name);

    // Displaying names using window.alert
    window.alert('Sorted Names: ' + sortedNames.join(', '));
});

document.getElementById('continueWithMobile').addEventListener('click', function () {
    // Replace '[your name]' with your actual name
    const yourName = 'Your Name';

    // Displaying a thank-you message using window.alert
    window.alert('Thank you for choosing mobile, ' + yourName);
});
