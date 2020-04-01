//backend
function pigLatin(str) {
  var vowelsArr = ['a', 'e', 'i', 'o', 'u']
  var splitStr = str.split(' ')
  var final = []
  splitStr.forEach(function (word) {
    if (vowelsArr.includes(word[0])) {
      final.push(word + 'ay')
    } else {
      final.push(word)
    }
  });
  // console.log(splitStr[0], splitStr[0][0]);
  return final.join(' ')
}

//front end
$(document).ready(function () {
  $('#sentence').submit(function (event) {
    event.preventDefault();
    var input = $("#input").val();
    var output = pigLatin(input);
    $("#result-box").slideToggle('.no-show');
    $('#result').text(output);
  })

})