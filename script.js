//para acessar e salvar um elemento
const mensagem = document.getElementById("mensagem"); 

console.log(mensagem);

//para acessar e salvar mais de um elemento
const perfil = document.getElementsByClassName("dados"); 

//console.log(perfil);
console.log(perfil[0]);

//selecionando elementos
const segundoTitulo = document.querySelector("div h2"); 

console.log(segundoTitulo);



const textosPorClasse = document.querySelectorAll(".texto-simples"); 

console.log(textosPorClasse);



function validarFormulario() {
    const nome = document.getElementById("nome").value;
    if (nome === "") {
      alert("Por favor, preencha o campo Nome.");
      return false;
    }
    // Restante do código para enviar o formulário
  }

  
  function validarEmail() {
    const email = document.getElementById("email").value;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }
    // Restante do código para enviar o formulário
  }

  
  function validarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return false;
    }
    // Restante do código para enviar o formulário
  }

  function validarTelefone() {
    const telefone = document.getElementById("telefone").value;
    const regexTelefone = /^\d{10}$/; // Formato: 10 dígitos
    if (!regexTelefone.test(telefone)) {
      alert("Insira um número de telefone válido (apenas números).");
      return false;
    }
    // Restante do código para enviar o formulário
  }
  
  <!DOCTYPE html>
<html>
<head>
    <title>Validação de formulários</title>
</head>
<body>
    <form action="pagina_de_acao" method="post" name="dados" onsubmit="return validarFormulario();">
        <input name="tx_nome" type="text" placeholder="Nome completo">
        <input name="tx_email" type="text" placeholder="E-mail">
        <textarea name="tx_mensagem" cols="50" rows="8" placeholder="Mensagem"></textarea>
        <input type="submit" value="Enviar dados">
    </form>

    <script>
        function validarFormulario() {
            const nome = document.dados.tx_nome.value;
            const email = document.dados.tx_email.value;

            if (nome === "" || nome.length < 8) {
                alert("Preencha o campo NOME corretamente!");
                document.dados.tx_nome.focus();
                return false;
            }

            if (email === "" || !email.includes("@")) {
                alert("Preencha um e-mail válido!");
                document.dados.tx_email.focus();
                return false;
            }

            // Outras validações podem ser adicionadas aqui

            return true; // Permite o envio do formulário se tudo estiver válido
        }
    </script>
</body>
</html>

<!-- Inclua o jQuery antes do fechamento da tag </body> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Inclua o plugin após o jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>

<div class="container">
    <h2>Registro</h2>
    <form action="" name="registro">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" placeholder="Seu nome"/>
        <!-- Outros campos aqui -->
        <button type="submit">Registrar</button>
    </form>
</div>

<script>
    $(document).ready(function() {
        $("form[name='registro']").validate({
            rules: {
                nome: {
                    required: true,
                    minlength: 3 // Mínimo de 3 caracteres
                },
                // Outros campos e regras aqui
            },
            messages: {
                nome: {
                    required: "Por favor, informe seu nome",
                    minlength: "O nome deve ter pelo menos 3 caracteres"
                },
                // Mensagens de erro para outros campos
            }
        });
    });
</script>

