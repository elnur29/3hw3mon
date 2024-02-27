document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    if (username === "" || password === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }
    var data = {
        username: username,
        password: password
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(json => {
        console.log('Успешно отправлено!', json);
        alert('Данные успешно отправлены!');
    })
    .catch(error => {
        console.error('Ошибка при отправке!', error);
        alert('Произошла ошибка при отправке данных:(');
    });
});