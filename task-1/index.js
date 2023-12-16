$(document).ready(function () {
  $('#submit').click(function (e) {
    e.preventDefault();
    $('#warning').empty()
    var name = $("#name").val();
    var email = $("#email").val();
    var department = $("#department").val();
    var gender = $("input[name='gender']:checked").val();
    var hobbies = ""
    $("input[type='checkbox']:checked").each(function (i, item) {
      hobbies += $(item).val() + ', '
    })
    hobbies = hobbies.substring(0, hobbies.length - 2)

    if (name != "" && email != "" && department != "" && department != "Choose..." && gender != "" && hobbies != "") {
      $('#student-table tbody').append('<tr><td>' + name + '</td><td>' + email + '</td><td>' + department + '</td><td>' + gender + '</td><td>' + hobbies + '</td><tr>')
    }
    else {
      $('#warning').append('<span>Please fill all the necessary details in the form</span>')
    }




  })
  $('#reset').click(function (e) {
    e.preventDefault();
    $("#name").val("");
    $("#email").val("");
    $("#department").val("");
    $("input[type='checkbox']:checked").each(function () {
      $(this).prop('checked', false)
    });
    $("input[name='gender']:checked").each(function () {
      $(this).prop('checked', false)
    });

  });

});
