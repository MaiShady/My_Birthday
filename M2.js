document.getElementById('greetingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const listItem = document.createElement('li');
    listItem.textContent = '${name}: ${message}';

    document.getElementById('greetingsList').appendChild(listItem);

    document.getElementById('greetingForm').reset();
});