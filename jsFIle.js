$(document).ready(function() {
    var numeroTela = "";
    var resultadoExpressao = [];
    var controle = false;

    $("table td.number").click(function() {
        if (controle == true) {
            numeroTela = "";
            controle = false;
        }
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
            if (resultadoExpressao[resultadoExpressao.length - 1] == "/" || resultadoExpressao[resultadoExpressao.length - 1] == "*")
                resultadoExpressao.push(1);
            else resultadoExpressao.push(0);

        } else resultadoExpressao.push(parseFloat(numeroTela));
        console.log(resultadoExpressao);

        //Transformar o array em String e retirar as virgulas.
        numeroTela = eval(resultadoExpressao.toString().replace(/,/g, ""));
        resultadoExpressao = [];
        $("#result").html(numeroTela);
        controle = true;

    });

    function colocandoExpressao(operacao) {
        if (numeroTela == "") {
            if (operacao == "/" || operacao == "*")
                resultadoExpressao.push(1);
            else resultadoExpressao.push(0);
        } else resultadoExpressao.push(parseFloat(numeroTela));
        resultadoExpressao.push(operacao);
        numeroTela = "";
    }

});
