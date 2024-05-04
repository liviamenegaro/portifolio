emailjs.init("-Zwh7MJ0jXSns5IYy"); //please encrypted user id for malicious attacks

const notificacao = document.getElementById('notificacao');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(notificacao);

document.getElementById('formularioContato').addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nomeid').value;
    const email = document.getElementById('emailid').value;
    const mensagem = document.getElementById('mensagemid').value;

    var templateParams = {
        to_name: 'Lívia Menegaro',
        from_name: nome,
        message: mensagem,
        from_email: email
      };
    
      emailjs.send('service_fjy4wd9', 'template_whqmawj', templateParams)
        .then(function(response) {
            document.getElementById('mensagemToast').textContent = "Sua mensagem foi enviada e será retornada em breve.";
            toastBootstrap.show();
        }, function (error) {
            document.getElementById('mensagemToast').textContent = "Erro ao enviar a sua mensagem. Verifique sua conexão com a internet e as informações do formulário.";
            toastBootstrap.show();
        });

})
    
