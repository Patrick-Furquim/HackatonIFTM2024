$(document).ready(function() {

    $("#pergunta1").show();
    var flag = 0;
    // Função para a primeira pergunta
    $("#botao1").click(function() {
        var resposta1 = $("#resposta1").val();
        if (resposta1 === "sim") {
            $("#pergunta1").hide();
            $("#pergunta2a").show(); // Mostra a pergunta 2A
        } else if (resposta1 === "nao") {
            $("#pergunta1").hide();
            $("#pergunta2b").show(); // Mostra a pergunta 2B
        } else {
            alert("Por favor, selecione 'Sim' ou 'Não'.");
        }
    });

    // Função para a pergunta 2A
    $("#botao2a").click(function() {
        var resposta2a = $("#resposta2a").val();
        if (resposta2a === "sim") {
            $("#pergunta2a").hide();
            $("#pergunta3a1").show(); // Mostra a pergunta 3A1
        } else if (resposta2a === "nao") {
            $("#pergunta2a").hide();
            $("#pergunta3a2").show(); // Mostra a pergunta 3A2
        } else {
            alert("Por favor, selecione 'Sim' ou 'Não'.");
        }
    });

    // Função para a pergunta 2B
    $("#botao2b").click(function() {
        var resposta2b = $("#resposta2b").val();
        if (resposta2b === "sim") {
            $("#pergunta2b").hide();
            $("#pergunta3b1").show(); // Mostra a pergunta 3B1
        } else if (resposta2b === "nao") {
            $("#pergunta2b").hide();
            $("#pergunta3b2").show(); // Mostra a pergunta 3B2
        } else {
            alert("Por favor, selecione 'Sim' ou 'Não'.");
        }
    });
    // Finalizar o caminho da pergunta 3A1
    $("#finalizar3a1").click(function() {
        $("#resposta").text('Você tem o perfil de uma pessoa comunicativa. O treinamento para aprimorar o perfil de liderança será importante para utilizarmos isso. Acesse esse treinamento em na aba de treinamentos disponíveis.')
        if(flag ===1){
            window.location.href = 'tela_inicial.html';
        }
        flag = 1;
    });

    // Finalizar o caminho da pergunta 3A2
    $("#finalizar3a2").click(function() {
        $("#resposta").text('Para que esses desafios sejam vencidos realize o treinamento de comunicação e liderança disponível na área do usuário.')
        if(flag ===1){
            window.location.href = 'tela_inicial.html';
        }
        flag = 1;
    });

    // Finalizar o caminho da pergunta 3B1
    $("#finalizar3b1").click(function() {
        $("#resposta").text('Para seu desenvolvimento como um líder, recomendamos acessar o treinamento na área do usuário.')
        if(flag ===1){
            window.location.href = 'tela_inicial.html';
        }
        flag = 1;
    });

    // Finalizar o caminho da pergunta 3B2
    $("#finalizar3b2").click(function() {
        $("#resposta").text('Para obter aprendizado personalizado, sugerimos acessa a área de treinamentos disponíveis.')
        if(flag ===1){
            window.location.href = 'tela_inicial.html';
        }
        flag = 1;
    });

        


    //Botao de login
    $("#botao_de_login").click(function(){
        var resposta = $("#input_senha").val();
        if(resposta === "123"){
            window.location.href = 'tela_inicial_gestor.html';   
        }
        else
        {
            window.location.href = 'tela_inicial.html';
        }

    });

    //Botao de responder questionário pag funcionario
    $(".responderQuestionario").click(function(){
        window.location.href = 'questionario.html';
    });

    //Botao para o relatorio pag funcionario
    $("#visualizarRelatorioFunc").click(function(){
        window.location.href = 'relatorio.html';
    });

    $("#planoCarreira").click(function(){
        window.location.href = 'plano_de_carreira.html';
    });

    //botao para o quadro de funcionarios pag do gestor
    $(".quadroFuncionarios").click(function(){
        window.location.href = 'quadro_de_funcionarios.html';
    });

    $("#visualizarRelatoriosGes").click(function(){
        window.location.href = 'relatorio_de_funcionarios.html';
    });

    $("#caixaMetricaLink").click(function(){
        window.location.href = 'metricas.html';
    });

    $("#cadastroFuncinario").click(function(){
        window.location.href = 'cadastrar_funcionario.html';
    });

    $(".relatorioFuncGes").click(function(){
        window.location.href = 'relatorio_gestor.html';
    });

    $(".logo_iftm_menuGes").click(function(){
        window.location.href = 'tela_inicial_gestor.html';
    });

    $(".logo_iftm_menuFunc").click(function(){
        window.location.href = 'tela_inicial.html';
    });
});
