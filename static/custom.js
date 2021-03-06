function getInput() {
    const datePicked = document.querySelector('.chooseDate input').value;
    const dt1 = new Date("Dec 31, 2015 08:11:00");
    var dt2 = new Date(datePicked);
    var diffMonths = diff_months(dt1, dt2);
    const queryString = "?date=" + datePicked + "&diffMonths=" + diffMonths;
    console.log(queryString);
    window.location.href = document.getElementById("location").value + queryString;
}

/* Compute Months */
function diff_months(dt2, dt1)
 {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
 }

var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

if (document.querySelector('body.chs .newDate')) {
    document.querySelector('body.chs .newDate').innerHTML += urlParams['date'];

}

var tempImg = document.querySelectorAll('.temp');
tempImg.forEach(input => input.addEventListener('mouseover', function() {
    if (this.classList.contains('1')) {
        document.querySelector('.temp-img img').src='/static/img/cool.png';
    } else if (this.classList.contains('2')) {
        document.querySelector('.temp-img img').src='/static/img/Little Hot.png';
    } else if (this.classList.contains('3')) {
        document.querySelector('.temp-img img').src='/static/img/Hot temp.png';
    } else if (this.classList.contains('4')) {
        document.querySelector('.temp-img img').src='/static/img/dripping.jpeg';
    } else if (this.classList.contains('5')) {
        document.querySelector('.temp-img img').src='/static/img/Hot Sweaty Person_image.gif';
    }
}));

