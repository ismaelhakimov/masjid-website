var namazstyle3 = document.getElementsByClassName('time-list3')
if (namazstyle3.length > 0) {
  dataOffset = document
    .querySelector('.next-namaz-li')
    .getAttribute('data-offset')
  currentDate = new Date()
  utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
  currentDate = new Date(utc + 3600000 * dataOffset)
  Day = currentDate.getDate()
  Month = currentDate.getMonth() + 1
  Year = currentDate.getFullYear()
  getnextNamazTime = document.querySelector(
    '.next-namaz-li span.ntime'
  ).innerText
  var countDownDate = new Date(
    Year + ' ' + Month + ' ' + Day + ' ' + ' ' + getnextNamazTime
  ).getTime()
  var x = setInterval(function () {
    currentDate = new Date()
    utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
    currentDate = new Date(utc + 3600000 * dataOffset)
    var now = currentDate.getTime()
    var distance = countDownDate - now
    if (distance < 0) {
      var tomorrow = currentDate
      nextDay = tomorrow.getDate() + 1
      nextMonth = tomorrow.getMonth() + 1
      nextYear = tomorrow.getFullYear()
      var tomorrowCountDownDate = new Date(
        nextYear +
          ' ' +
          nextMonth +
          ' ' +
          nextDay +
          ' ' +
          ' ' +
          getnextNamazTime
      ).getTime()
      distance = tomorrowCountDownDate - now
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    document.getElementById('namaz-counter').innerHTML =
      '<p>Next In: </p><span id="hours">' +
      hours +
      ' Hours </span>' +
      '<span id="minutes">' +
      minutes +
      ' Minutes </span>' +
      '<span id="seconds">' +
      seconds +
      ' Seconds</span>'
  }, 1000)
}
var namazstyle2 = document.getElementsByClassName('time-list2')
if (namazstyle2.length > 0) {
  dataOffset = document
    .querySelector('.next-namaz-li')
    .getAttribute('data-offset')
  currentDate = new Date()
  utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
  currentDate = new Date(utc + 3600000 * dataOffset)
  Day = currentDate.getDate()
  Month = currentDate.getMonth() + 1
  Year = currentDate.getFullYear()
  getnextNamazTime = document.querySelector(
    '.next-namaz-li span.ntime'
  ).innerText
  var countDownDate = new Date(
    Year + ' ' + Month + ' ' + Day + ' ' + ' ' + getnextNamazTime
  ).getTime()
  var x = setInterval(function () {
    currentDate = new Date()
    utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
    currentDate = new Date(utc + 3600000 * dataOffset)
    var now = currentDate.getTime()
    var distance = countDownDate - now
    if (distance < 0) {
      var tomorrow = currentDate
      nextDay = tomorrow.getDate() + 1
      nextMonth = tomorrow.getMonth() + 1
      nextYear = tomorrow.getFullYear()
      var tomorrowCountDownDate = new Date(
        nextYear +
          ' ' +
          nextMonth +
          ' ' +
          nextDay +
          ' ' +
          ' ' +
          getnextNamazTime
      ).getTime()
      distance = tomorrowCountDownDate - now
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    document.getElementById('namaz-counter').innerHTML =
      '<p>Next In: </p><span id="hours">' +
      hours +
      ' Hours </span>' +
      '<span id="minutes">' +
      minutes +
      ' Minutes </span>' +
      '<span id="seconds">' +
      seconds +
      ' Seconds</span>'
  }, 1000)
}
