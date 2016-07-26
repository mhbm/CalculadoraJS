$(document).ready(function() {
    var numeroTela = "";
    var resultadoExpressao = [];

    $("table td.number").click(function() {
        numeroTela += $(this).html();
        $("#result").html(numeroTela);
    });

    $("table td.operation").click(function() {
        var operation = $(this).html();

        switch (operation) {
            case "/":
                colocandoExpressao("/");
                break;

            case "*":
                colocandoExpressao("*");
                break;

            case "+":
                colocandoExpressao("+");
                break;

            case "-":
                colocandoExpressao("-");
                break;

            case "Clear":
                $("#result").html(0);
                resultadoExpressao = [];
                numeroTela = "";
                break;
        }

    });

    $('#resultadoOperacao').click(function() {
        if (numeroTela == "") {
            resultadoExpressao.push(0);
        } else resultadoExpressao.push(parseFloat(numeroTela));
        // console.log(resultadoExpressao);
        
        //Transformar o array em String e retirar as virgulas.
        numeroTela = eval(resultadoExpressao.toString().replace(/,/g, ""));
        resultadoExpressao = [];
        $("#result").html(numeroTela);

    });

    function colocandoExpressao(operacao) {
        if (numeroTela == "") {
            resultadoExpressao.push(0);
        } else resultadoExpressao.push(parseFloat(numeroTela));
        resultadoExpressao.push(operacao);
        numeroTela = "";
    }


});
