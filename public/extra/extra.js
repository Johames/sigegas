function menuDerecha() {
  $.ajax({
    type: "POST",
    url: "main/principal/menu_left.html",
    success: function(data) {
      $("#menu_left").html(data);
    }
  });
}

function menuSuperior() {
  $.ajax({
    type: "POST",
    url: "main/principal/menu_superior.html",
    success: function(data) {
      $("#menu_superior").html(data);
    }
  });
}

function dashboard() {
  $.ajax({
    type: "POST",
    url: "main/dashboard/dashboard.html",
    success: function(data) {
      $("#page-wrapper").html(data);
    }
  });
}

function piePagina() {
  $.ajax({
    type: "POST",
    url: "main/principal/footer.html",
    success: function(data) {
      $("#piePagina").html(data);
    }
  });
}
