function updateDateTime() {
    var currentDate = new Date();
    var datetimeElement = document.getElementById('datetime');

    datetimeElement.innerHTML = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
}


updateDateTime();


setInterval(updateDateTime, 1000);

