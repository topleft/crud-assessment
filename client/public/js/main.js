// add scripts

$(document).on('ready', function() {
  console.log('sanity check!!!');
});


$("#add-program").on("click", function(e){
  e.preventDefault();
  console.log("in add")
  var $program = $("#program-input");
  var $language = $("#lang-input");
  $.ajax({
    method: "POST",
    url: "/api/v1/programs",
    data:{
      name: $program.val(),
      language: $language.val()
    }
  }).done(function(data){
    console.log(data);
    getPrograms();
  }).fail(function(err){
    console.log(err);
  });
});

function getPrograms(){
  $.ajax({
    method: "GET",
    url: "/api/v1/programs"
  }).done(function(data){
    $results = $($("#results")[0])
    for (var i = 0; i < data.length; i++) {
      $results.append("<tr><td>"+data[i].name+"</td><td>"+data[i].language+'</td></tr>');
    }
  }).fail(function(err){
    console.log(err);
  })
}



