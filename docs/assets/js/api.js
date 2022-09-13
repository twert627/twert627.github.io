const xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        let repos = JSON.parse(xhr.responseText);
        let list = document.createElement('ul');
        repos.forEach(function (repo) {
            let title = repo.name;
            console.log(title);
            let listItem = document.createElement('li');
            listItem.textContent = title;
            list.appendChild(listItem);
        });
    } else {
        console.log(xhr.responseText);
    }
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://api.github.com/users/twert627/repos');
xhr.send();

