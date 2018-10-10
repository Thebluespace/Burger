var rowscount = 0;
function getBurgers(){
  try {
    $.get("/allburgers",data => {
      console.log(data);
      var uneaten = $(".uneaten");
      var eaten = $(".eaten");
      data.forEach(element => {
        rowscount++;
        var row = createNewRow(element);
        if (element.devoured === false){
          uneaten.append(row);
        } else {
          eaten.append(row);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }   
}

function createNewRow(todo) {
  var $newInputRow = $(
    [
      "<li class='list-group-item todo-item'>",
      "<span>",
      todo.burger_name,
      "</span>",
      "<input type='text' class='edit' style='display: none;'>",
      "<button class='delete btn btn-danger'>x</button>",
      "<button class='complete btn btn-primary'>✓</button>",
      "</li>"
    ].join("")
  );

  $newInputRow.find("button.delete").data("id", todo.id);
  $newInputRow.find("input.edit").css("display", "none");
  $newInputRow.data("todo", todo);
  if (todo.complete) {
    $newInputRow.find("span").css("text-decoration", "line-through");
  }
  return $newInputRow;
}

function newBurger(data){
  try {
    $.ajax({
      method: "POST",
      url: "/newburger",
      data: data
    }).then(event => {
      console.log(event);
      rowscount++;
      var row = createNewRow(data);
      $(".eaten").append(row);
    }).error(message => {
      console.log(message);
    });
  } catch (error) {
    console.log(error);
  }
}
$(document).ready(event => {
    $(".delete").on("click", data => {
        try {
          console.log(data);
          if (data.id < 4)   {
            alert("Cannot delete original burgers!");
            $.delete("/burger/"+data.id, res => {
              console.log(res);
            });
          }
        } catch (error) {
          console.log(error);
        }
    });

    $(".burgerbtn").on("click", data => {
      try {
        var burger = {
          "name": $("#name").val(),
        }
        newBurger(burger);
      } catch (error) {
        console.log(error);
      }
    });
    getBurgers();
  });