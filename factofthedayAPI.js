function showNumber(str) {
    document.getElementById('number-fact').innerText = str;
}

(function() {
    var scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = "http://numbersapi.com/42";
    document.body.appendChild(scriptTag);
})();