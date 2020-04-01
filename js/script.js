//backend
function pigLatin(str) {
  var vowelsArr = ['a', 'e', 'i', 'o', 'u']
  var splitStr = str.split(' ')
  var final = []

  splitStr.forEach(function (word) {
    if (vowelsArr.includes(word[0])) {
      final.push(word + 'way')
    } else if (!vowelsArr.includes(word[0]) && word[1] === 'q' && word[2] === 'u') {
      final.push(word.slice(3, word.length) + word[0] + 'qu' + 'ay')
    } else if (!vowelsArr.includes(word[0])) {
      final.push(word.slice(1, word.length) + word[0] + 'ay')

    } else {
      final.push(word)
    }
  });
  return final.join(' ');
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