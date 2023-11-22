

var timeRef = '';
timeRef = parseInt(dayjs().format('H'))
console.log(timeRef);

$(function () {
  
// Click event for saving text to local storage in text areas
  $('button').on('click', function() {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, value);

      $('.saveText').removeClass('hide')

      setTimeout(function() {
        $('.saveText').addClass('hide')
      }, 3000)
  })

var i = '';
  
  console.log(divID);
//Loop for referencing current time to hour ids and applying the correct class
for ( i = 9; i < 18; i++) {
  var divID = '#hour-' + i;
  console.log(timeRef, i)
  if (i < timeRef) {
    $(divID).addClass('past')
    console.log(i)
    console.log(timeRef);
  } else if (i === timeRef) {
    $(divID).addClass('present')

  } else {
    $(divID).addClass('future')
  }
// Pulling data from local storage while utilizing loop
  $(divID + ' .description').val(localStorage.getItem('hour-' + i));

}
});

// Time display at the top of the page
setInterval (function() {

  var currentTime = dayjs().format('dddd, MMMM D, YYYY')
  console.log(currentTime);
  $('#currentDay').text(currentTime);

}, 1000);