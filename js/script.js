//backend
function pigLatin(str) {
  return str
}

//front end
$(document).ready(function () {
  $('#sentence').submit(function (event) {
    event.preventDefault();
    var input = $("#input").val();
    var output = pigLatin(input);
    $("#result").removeClass('no-show')
    $('#result').text(output)
  })

})