var Dados = {
    "quantidadeParedes" : "0",
    "quantidadePortas" : "0",
    "quantidadeJanelas" : "0",
    "metragemParedes" : "0",
    "metragemPortas" : "0",
    "metragemJanelas" : "0"
};

$(".maskValor").mask("###0.00", {reverse: true});



/**
 * Metodo para selecionar a quantidade de paredes
 * de maneira dinamicamente (GAMBIARRA)
 */
$("#quantideParede").change(function () {

    // Pegando a quantidade selecionada
    var quantideParede = $(this).val();
    Dados.quantidadeParedes = $(this).val();
    var i = 1;

    $("#parede1").css("display","none");
    $("#parede2").css("display","none");
    $("#parede3").css("display","none");
    $("#parede4").css("display","none");

    // Mostrando os inputs da parede
    for (i = 1; i <= quantideParede; i++)
    {
        $("#parede"+i).css("display","flex");

        // Passando para IMG
        $("#parede_"+i+"_altura").css('display','block');
        $("#parede_"+i+"_largura").css('display','block');
    }

});



/**
 * Metodo para selecionar a quantidade de paredes
 * de maneira dinamicamente (GAMBIARRA)
 */
$("#quantidadePortas").change(function () {

    // Pegando a quantidade selecionada
    var quantidePortas = $(this).val();
    Dados.quantidadePortas = $(this).val();
    var i = 1;

    $("#porta1").css("display","none");
    $("#porta2").css("display","none");
    $("#porta3").css("display","none");
    $("#porta4").css("display","none");
    $("#porta5").css("display","none");
    $("#porta6").css("display","none");
    $("#porta7").css("display","none");
    $("#porta8").css("display","none");
    $("#porta9").css("display","none");
    $("#porta10").css("display","none");

    // Mostrando os inputs da parede
    for (i = 1; i <= quantidePortas; i++)
    {
        $("#porta"+i).css("display","flex");
    }

});



/**
 * Metodo para selecionar a quantidade de paredes
 * de maneira dinamicamente (GAMBIARRA)
 */
$("#quantidadeJanelas").change(function () {

    // Pegando a quantidade selecionada
    var quantideJanelas = $(this).val();
    Dados.quantidadeJanelas = $(this).val();
    var i = 1;

    $("#janela1").css("display","none");
    $("#janela2").css("display","none");
    $("#janela3").css("display","none");
    $("#janela4").css("display","none");
    $("#janela5").css("display","none");
    $("#janela6").css("display","none");
    $("#janela7").css("display","none");
    $("#janela8").css("display","none");
    $("#janela9").css("display","none");
    $("#janela10").css("display","none");

    // Mostrando os inputs quantideJanelas parede
    for (i = 1; i <= quantideJanelas; i++)
    {
        $("#janela"+i).css("display","flex");
    }

});



/**
 * Metodo por pegar todos os dados do envio do
 * formulario e validar
 */
$("#formQuantidadeParedes").on("submit", function () {

    // NÃ£o atualiza a pÃ¡gina
    event.preventDefault();

    // Bloqueia o Form
    $(this).addClass("bloqueiaForm");

    // Recupera os dados importantes
    var form = new FormData(this);
    var calculo_parede_1 = 0;
    var calculo_parede_2 = 0;
    var calculo_parede_3 = 0;
    var calculo_parede_4 = 0;
    var metragemParedes = 0;



    // PAREDE 1
    if( (form.get("parede_1_altura") !== "" && form.get("parede_1_largura") !== "") ||
        (form.get("parede_1_altura") !== undefined && form.get("parede_1_largura") !== undefined) ||
        (form.get("parede_1_altura") !== null && form.get("parede_1_largura") !== null))
    {
        var parede_1_altura = form.get("parede_1_altura");
        var parede_1_largura = form.get("parede_1_largura");
        var calculo_parede_1 = parede_1_altura * parede_1_largura;

        if (calculo_parede_1 > 0)
        {
            // Passando para IMG
            $("#parede_1_altura").html("Altura: "+parede_1_altura + "m");
            $("#parede_1_largura").html("Largura: "+parede_1_largura + "m");
            $("#tamanho_parede_1").css("display","flex");
        }

    }



    // PAREDE 2
    if( (form.get("parede_2_altura") !== "" && form.get("parede_2_largura") !== "") ||
        (form.get("parede_2_altura") !== undefined && form.get("parede_2_largura") !== undefined) ||
        (form.get("parede_2_altura") !== null && form.get("parede_2_largura") !== null))
    {
        var parede_2_altura = form.get("parede_2_altura");
        var parede_2_largura = form.get("parede_2_largura");
        var calculo_parede_2 = parede_2_altura * parede_2_largura;

        if (calculo_parede_2 > 0)
        {
            // Passando para IMG
            $("#parede_2_altura").html("Altura: "+parede_2_altura + "m");
            $("#parede_2_largura").html("Largura: "+parede_2_largura + "m");
            $("#tamanho_parede_2").css("display","flex");
        }

    }



    // PAREDE 3
    if( (form.get("parede_3_altura") !== "" && form.get("parede_3_largura") !== "") ||
        (form.get("parede_3_altura") !== undefined && form.get("parede_3_largura") !== undefined) ||
        (form.get("parede_3_altura") !== null && form.get("parede_3_largura") !== null))
    {
        var parede_3_altura = form.get("parede_3_altura");
        var parede_3_largura = form.get("parede_3_largura");
        var calculo_parede_3 = parede_3_altura * parede_3_largura;

        if (calculo_parede_3 > 0)
        {
            // Passando para IMG
            $("#parede_3_altura").html("Altura: "+parede_3_altura + "m");
            $("#parede_3_largura").html("Largura: "+parede_3_largura + "m");
            $("#tamanho_parede_3").css("display","flex");
        }

    }



    // PAREDE 4
    if( (form.get("parede_4_altura") !== "" && form.get("parede_4_largura") !== "") ||
        (form.get("parede_4_altura") !== undefined && form.get("parede_4_largura") !== undefined) ||
        (form.get("parede_4_altura") !== null && form.get("parede_4_largura") !== null))
    {
        var parede_4_altura = form.get("parede_4_altura");
        var parede_4_largura = form.get("parede_4_largura");
        var calculo_parede_4 = parede_4_altura * parede_4_largura;

        if (calculo_parede_4 > 0)
        {
            // Passando para IMG
            $("#parede_4_altura").html("Altura: "+parede_4_altura + "m");
            $("#parede_4_largura").html("Largura: "+parede_4_largura + "m");
            $("#tamanho_parede_4").css("display","flex");
        }

    }



    // SOMANDO OS CALCULOS
    metragemParedes = calculo_parede_1 + calculo_parede_2 + calculo_parede_3 + calculo_parede_4;
    Dados.metragemParedes = metragemParedes;

    // Mostrando a parede 3d
    $(".parede3d").css("display","flex");

    setTimeout(function () {

        // Bloqueia o Form
        $(this).removeClass("bloqueiaForm");

        $("#paredes").css("display","none");
        $("#portas").css("display","block");

    },800);

    // Não atualiza mesmo
    return false;
});



/**
 * Metodo por pegar todos os dados do envio do
 * formulario e validar
 */
$("#formQuantidadePortas").on("submit", function () {

    // NÃ£o atualiza a pÃ¡gina
    event.preventDefault();

    // Bloqueia o Form
    $(this).addClass("bloqueiaForm");

    // Recupera os dados importantes
    var form = new FormData(this);
    var calculo_porta_1 = 0;
    var calculo_porta_2 = 0;
    var calculo_porta_3 = 0;
    var calculo_porta_4 = 0;
    var calculo_porta_5 = 0;
    var calculo_porta_6 = 0;
    var calculo_porta_7 = 0;
    var calculo_porta_8 = 0;
    var calculo_porta_9 = 0;
    var calculo_porta_10 = 0;
    var metragemPortas = 0;



    // PORTA 1
    if( (form.get("porta_1_altura") !== "" && form.get("porta_1_largura") !== "") ||
        (form.get("porta_1_altura") !== undefined && form.get("porta_1_largura") !== undefined) ||
        (form.get("porta_1_altura") !== null && form.get("porta_1_largura") !== null))
    {
        var porta_1_altura = form.get("porta_1_altura");
        var porta_1_largura = form.get("porta_1_largura");
        var calculo_porta_1 = porta_1_altura * porta_1_largura;
    }

    // PORTA 2
    if( (form.get("porta_2_altura") !== "" && form.get("porta_2_largura") !== "") ||
        (form.get("porta_2_altura") !== undefined && form.get("porta_2_largura") !== undefined) ||
        (form.get("porta_2_altura") !== null && form.get("porta_2_largura") !== null))
    {
        var porta_2_altura = form.get("porta_2_altura");
        var porta_2_largura = form.get("porta_2_largura");
        var calculo_porta_2 = porta_2_altura * porta_2_largura;
    }

    // PORTA 3
    if( (form.get("porta_3_altura") !== "" && form.get("porta_3_largura") !== "") ||
        (form.get("porta_3_altura") !== undefined && form.get("porta_3_largura") !== undefined) ||
        (form.get("porta_3_altura") !== null && form.get("porta_3_largura") !== null))
    {
        var porta_3_altura = form.get("porta_3_altura");
        var porta_3_largura = form.get("porta_3_largura");
        var calculo_porta_3 = porta_3_altura * porta_3_largura;
    }

    // PORTA 4
    if( (form.get("porta_4_altura") !== "" && form.get("porta_4_largura") !== "") ||
        (form.get("porta_4_altura") !== undefined && form.get("porta_4_largura") !== undefined) ||
        (form.get("porta_4_altura") !== null && form.get("porta_4_largura") !== null))
    {
        var porta_4_altura = form.get("porta_4_altura");
        var porta_4_largura = form.get("porta_4_largura");
        var calculo_porta_4 = porta_4_altura * porta_4_largura;
    }

    // PORTA 5
    if( (form.get("porta_5_altura") !== "" && form.get("porta_5_largura") !== "") ||
        (form.get("porta_5_altura") !== undefined && form.get("porta_5_largura") !== undefined) ||
        (form.get("porta_5_altura") !== null && form.get("porta_5_largura") !== null))
    {
        var porta_5_altura = form.get("porta_5_altura");
        var porta_5_largura = form.get("porta_5_largura");
        var calculo_porta_5 = porta_5_altura * porta_5_largura;
    }

    // PORTA 6
    if( (form.get("porta_6_altura") !== "" && form.get("porta_6_largura") !== "") ||
        (form.get("porta_6_altura") !== undefined && form.get("porta_6_largura") !== undefined) ||
        (form.get("porta_6_altura") !== null && form.get("porta_6_largura") !== null))
    {
        var porta_6_altura = form.get("porta_6_altura");
        var porta_6_largura = form.get("porta_6_largura");
        var calculo_porta_6 = porta_6_altura * porta_6_largura;
    }

    // PORTA 7
    if( (form.get("porta_7_altura") !== "" && form.get("porta_7_largura") !== "") ||
        (form.get("porta_7_altura") !== undefined && form.get("porta_7_largura") !== undefined) ||
        (form.get("porta_7_altura") !== null && form.get("porta_7_largura") !== null))
    {
        var porta_7_altura = form.get("porta_7_altura");
        var porta_7_largura = form.get("porta_7_largura");
        var calculo_porta_7 = porta_7_altura * porta_7_largura;
    }

    // PORTA 8
    if( (form.get("porta_8_altura") !== "" && form.get("porta_8_largura") !== "") ||
        (form.get("porta_8_altura") !== undefined && form.get("porta_8_largura") !== undefined) ||
        (form.get("porta_8_altura") !== null && form.get("porta_8_largura") !== null))
    {
        var porta_8_altura = form.get("porta_8_altura");
        var porta_8_largura = form.get("porta_8_largura");
        var calculo_porta_8 = porta_8_altura * porta_8_largura;
    }

    // PORTA 9
    if( (form.get("porta_9_altura") !== "" && form.get("porta_9_largura") !== "") ||
        (form.get("porta_9_altura") !== undefined && form.get("porta_9_largura") !== undefined) ||
        (form.get("porta_9_altura") !== null && form.get("porta_9_largura") !== null))
    {
        var porta_9_altura = form.get("porta_9_altura");
        var porta_9_largura = form.get("porta_9_largura");
        var calculo_porta_9 = porta_9_altura * porta_9_largura;
    }

    // PORTA 10
    if( (form.get("porta_10_altura") !== "" && form.get("porta_10_largura") !== "") ||
        (form.get("porta_10_altura") !== undefined && form.get("porta_10_largura") !== undefined) ||
        (form.get("porta_10_altura") !== null && form.get("porta_10_largura") !== null))
    {
        var porta_10_altura = form.get("porta_10_altura");
        var porta_10_largura = form.get("porta_10_largura");
        var calculo_porta_10 = porta_10_altura * porta_10_largura;
    }

    // SOMANDO OS CALCULOS
    metragemPortas = calculo_porta_1 + calculo_porta_2 + calculo_porta_3 + calculo_porta_4 + calculo_porta_5 + calculo_porta_6 + calculo_porta_7 + calculo_porta_8 + calculo_porta_9 + calculo_porta_10;
    Dados.metragemPortas = metragemPortas;


    setTimeout(function () {

        // Bloqueia o Form
        $(this).removeClass("bloqueiaForm");

        $("#paredes").css("display","none");
        $("#portas").css("display","none");
        $("#janelas").css("display","block");

    },500);


    if (Dados.quantidadePortas > 0 || Dados.quantidadePortas > "0")
    {
        if (Dados.quantidadePortas === 1 || Dados.quantidadePortas === "1")
        {
            $("#qtdePorta").html(Dados.quantidadePortas+" porta");
        }
        else
        {
            $("#qtdePorta").html(Dados.quantidadePortas+" portas");
        }

        $("#quantidadePorta").fadeIn(800)
    }

    // Não atualiza mesmo
    return false;
});



/**
 * Metodo por pegar todos os dados do envio do
 * formulario e validar
 */
$("#formQuantidadeJanelas").on("submit", function () {

    // NÃ£o atualiza a pÃ¡gina
    event.preventDefault();

    // Bloqueia o Form
    $(this).addClass("bloqueiaForm");

    // Recupera os dados importantes
    var form = new FormData(this);
    var calculo_janela_1 = 0;
    var calculo_janela_2 = 0;
    var calculo_janela_3 = 0;
    var calculo_janela_4 = 0;
    var calculo_janela_5 = 0;
    var calculo_janela_6 = 0;
    var calculo_janela_7 = 0;
    var calculo_janela_8 = 0;
    var calculo_janela_9 = 0;
    var calculo_janela_10 = 0;
    var metragemJanelas = 0;



    // JANELA 1
    if( (form.get("janela_1_altura") !== "" && form.get("janela_1_largura") !== "") ||
        (form.get("janela_1_altura") !== undefined && form.get("janela_1_largura") !== undefined) ||
        (form.get("janela_1_altura") !== null && form.get("janela_1_largura") !== null))
    {
        var janela_1_altura = form.get("janela_1_altura");
        var janela_1_largura = form.get("janela_1_largura");
        var calculo_janela_1 = janela_1_altura * janela_1_largura;
    }

    // JANELA 2
    if( (form.get("janela_2_altura") !== "" && form.get("janela_2_largura") !== "") ||
        (form.get("janela_2_altura") !== undefined && form.get("janela_2_largura") !== undefined) ||
        (form.get("janela_2_altura") !== null && form.get("janela_2_largura") !== null))
    {
        var janela_2_altura = form.get("janela_2_altura");
        var janela_2_largura = form.get("janela_2_largura");
        var calculo_janela_2 = janela_2_altura * janela_2_largura;
    }

    // JANELA 3
    if( (form.get("janela_3_altura") !== "" && form.get("janela_3_largura") !== "") ||
        (form.get("janela_3_altura") !== undefined && form.get("janela_3_largura") !== undefined) ||
        (form.get("janela_3_altura") !== null && form.get("janela_3_largura") !== null))
    {
        var janela_3_altura = form.get("janela_3_altura");
        var janela_3_largura = form.get("janela_3_largura");
        var calculo_janela_3 = janela_3_altura * janela_3_largura;
    }

    // JANELA 4
    if( (form.get("janela_4_altura") !== "" && form.get("janela_4_largura") !== "") ||
        (form.get("janela_4_altura") !== undefined && form.get("janela_4_largura") !== undefined) ||
        (form.get("janela_4_altura") !== null && form.get("janela_4_largura") !== null))
    {
        var janela_4_altura = form.get("janela_4_altura");
        var janela_4_largura = form.get("janela_4_largura");
        var calculo_janela_4 = janela_4_altura * janela_4_largura;
    }

    // JANELA 5
    if( (form.get("janela_5_altura") !== "" && form.get("janela_5_largura") !== "") ||
        (form.get("janela_5_altura") !== undefined && form.get("janela_5_largura") !== undefined) ||
        (form.get("janela_5_altura") !== null && form.get("janela_5_largura") !== null))
    {
        var janela_5_altura = form.get("janela_5_altura");
        var janela_5_largura = form.get("janela_5_largura");
        var calculo_janela_5 = janela_5_altura * janela_5_largura;
    }

    // JANELA 6
    if( (form.get("janela_6_altura") !== "" && form.get("janela_6_largura") !== "") ||
        (form.get("janela_6_altura") !== undefined && form.get("janela_6_largura") !== undefined) ||
        (form.get("janela_6_altura") !== null && form.get("janela_6_largura") !== null))
    {
        var janela_6_altura = form.get("janela_6_altura");
        var janela_6_largura = form.get("janela_6_largura");
        var calculo_janela_6 = janela_6_altura * janela_6_largura;
    }

    // JANELA 7
    if( (form.get("janela_7_altura") !== "" && form.get("janela_7_largura") !== "") ||
        (form.get("janela_7_altura") !== undefined && form.get("janela_7_largura") !== undefined) ||
        (form.get("janela_7_altura") !== null && form.get("janela_7_largura") !== null))
    {
        var janela_7_altura = form.get("janela_7_altura");
        var janela_7_largura = form.get("janela_7_largura");
        var calculo_janela_7 = janela_7_altura * janela_7_largura;
    }

    // JANELA 8
    if( (form.get("janela_8_altura") !== "" && form.get("janela_8_largura") !== "") ||
        (form.get("janela_8_altura") !== undefined && form.get("janela_8_largura") !== undefined) ||
        (form.get("janela_8_altura") !== null && form.get("janela_8_largura") !== null))
    {
        var janela_8_altura = form.get("janela_8_altura");
        var janela_8_largura = form.get("janela_8_largura");
        var calculo_janela_8 = janela_8_altura * janela_8_largura;
    }

    // JANELA 9
    if( (form.get("janela_9_altura") !== "" && form.get("janela_9_largura") !== "") ||
        (form.get("janela_9_altura") !== undefined && form.get("janela_9_largura") !== undefined) ||
        (form.get("janela_9_altura") !== null && form.get("janela_9_largura") !== null))
    {
        var janela_9_altura = form.get("janela_9_altura");
        var janela_9_largura = form.get("janela_9_largura");
        var calculo_janela_9 = janela_9_altura * janela_9_largura;
    }

    // JANELA 10
    if( (form.get("janela_10_altura") !== "" && form.get("janela_10_largura") !== "") ||
        (form.get("janela_10_altura") !== undefined && form.get("janela_10_largura") !== undefined) ||
        (form.get("janela_10_altura") !== null && form.get("janela_10_largura") !== null))
    {
        var janela_10_altura = form.get("janela_10_altura");
        var janela_10_largura = form.get("janela_10_largura");
        var calculo_janela_10 = janela_10_altura * janela_10_largura;
    }

    if (Dados.quantidadeJanelas > 0 || Dados.quantidadeJanelas > "0")
    {
        if (Dados.quantidadeJanelas === 1 || Dados.quantidadeJanelas === "1")
        {
            $("#qtdeJanela").html(Dados.quantidadeJanelas+" janela");
        }
        else
        {
            $("#qtdeJanela").html(Dados.quantidadeJanelas+" janelas");
        }

        $("#quantidadeJanela").fadeIn(800)
    }

    // SOMANDO OS CALCULOS
    metragemJanelas = calculo_janela_1 + calculo_janela_2 + calculo_janela_3 + calculo_janela_4 + calculo_janela_5 + calculo_janela_6 + calculo_janela_7 + calculo_janela_8 + calculo_janela_9 + calculo_janela_10;
    Dados.metragemJanelas = metragemJanelas;

    var resultado = CalculaMetragem();

    if (resultado > 0)
    {
        var aux = resultado;
        resultado = resultado.toFixed(2);
        var qtdePapel = Math.ceil(aux);

        $("#metragemTotal").html(resultado+"m²");
        $("#qtdePapel").html(qtdePapel);

        // Bloqueia o Form
        $(this).removeClass("bloqueiaForm");

        setTimeout(function () {

            $("#paredes").css("display","none");
            $("#portas").css("display","none");
            $("#janelas").css("display","none");
            $(".remover").css("display","none");

            $(".resultado").css("display","flex");

        },1000);
    }
    else
    {

        Swal.fire({
            title: 'Oops...',
            text: 'Houve um erro, faça o cálculo novamente',
            icon: 'error',
            confirmButtonColor: '#f0a47e ',
            confirmButtonText: 'Calcular novamente!'
        }).then((result) => {
            if (result.value)
            {
                location.reload();
            }
        })

    }


    // Não atualiza mesmo
    return false;
});



function CalculaMetragem() {

    var resultado = 0;

    resultado = Dados.metragemParedes - (Dados.metragemPortas + Dados.metragemJanelas);

    return resultado;
}