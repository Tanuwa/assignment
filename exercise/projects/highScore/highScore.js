//var clickingBtn;
//var checkVal;
//var TrashMassage;

$("#btn").click(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var game = $("#game").val();
    var date = $("#date1").val();
    var highScore = $("#highScore").val();
    var msgTalk = '';
    var trashMessages = ["you suck", "too bad", "looser"];

    if (highScore == 0) {
        console.log("Enter your score");
    } else {
        if ($('input[name=msg]:checked').val() === 'yes') {
            msgTalk = trashMessages[Math.floor(Math.random() * trashMessages.length)];
        }
        var newRow = `
        <tr>
            <td>${name}</td>
<td>${game}</td>
<td> ${date} </td>
<td>${highScore}</td>
<td>${msgTalk}</td>
        </tr>
`

        $('#postHighScore').append(newRow);
    }
})
