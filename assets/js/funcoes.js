

$("#quantideParede").change(function () {

    // Pegando a quantidade selecionada
    var quantideParede = $(this).val();
    var i = 1;
    var paredes = "";

    // Gerando os inputs da parede
    for (i = 1; i <= quantideParede; i++)
    {

        paredes += "" +
            "<div class=\"row\">\n" +
            "   <div class=\"col-12\"><p>Parede "+i+"</p><hr></div>\n" +
            "   <div class=\"form-group col-md-6\">\n" +
            "       <label>Altura</label>\n" +
            "       <input type=\"tel\" class=\"form-control\" placeholder=\"Ex. 3.00\">\n" +
            "   </div>\n" +
            "   <div class=\"form-group col-md-6\">\n" +
            "       <label>Largura</label>\n" +
            "       <input type=\"tel\" class=\"form-control\" placeholder=\"Ex. 5.00\">\n" +
            "   </div>\n" +
            "</div>";
    }
    $("#paredes").html(paredes);

});
