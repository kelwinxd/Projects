<?php
 
require_once 'classe-pessoa.php';
$p = new Pessoa("study","root","root8");

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   
  
   
   <?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Processa os dados do formulário e salva no banco de dados
  
    // Redireciona o usuário para a mesma página do formulário
 
if(isset($_POST['nome'])){

    if(isset($_GET['id_up']) && !empty($_GET['id_up'])){
        $id = addslashes($_GET['id_up']);
        $nome = addslashes($_POST['nome']);
        $telefone = addslashes($_POST['telefone']);
        $email = addslashes($_POST['email']);
    
        #verifica se o campo está vazio
        if (!empty($nome) && !empty($email) && !empty($telefone)) {

            $p->atualizarPessoa($id,$nome,$telefone,$email);
            header('location:index.php');
            
            #adicionou uma flag false la no classe, se der falso, exiba essa mensagem
            if(!$p->atualizarPessoa($id,$nome,$telefone,$email)){
                    echo "Email já cadastrado!";
            }
        } else {
            echo "Preencha todos os campos";
        }

    } else {
        
        
        $nome = addslashes($_POST['nome']);
        $telefone = addslashes($_POST['telefone']);
        $email = addslashes($_POST['email']);
    
        #verifica se o campo está vazio
        if (!empty($nome) && !empty($email) && !empty($telefone)) {
            
            #adicionou uma flag false la no classe, se der falso, exiba essa mensagem
            if(!$p->cadastrarPessoa($nome,$email,$telefone)){
                    echo "Email já cadastrado!";
            }
        } else {
            echo "Preencha todos os campos";
        }
    }

        
    }


    
header('Location: ' . $_SERVER['PHP_SELF']);
exit;
}

?>

<?php 
if(isset($_GET["id_up"])){
    $id_up = addslashes($_GET["id_up"]);
    $res = $p->selecionarPessoa($id_up);

}




?>











  
<section id="esquerda">

<form action="" method="post" class="form-container
">
<h2></h2>
<label for="nome">Nome</label>
<input type="text" name="nome" id="nome" placeholder="Nome" value="<?php if(isset($res)){
    echo $res['nome'];
}     ?>">
<label for="email">E-mail</label>
<input type="email" name="email" id="email" placeholder="E-mail" value="<?php if(isset($res)){
    echo $res['email'];
}     ?>">
<label for="telefone">Telefone</label>
<input type="tel" name="telefone" id="telefone" placeholder="Telefone" value="<?php if(isset($res)){
    echo $res['telefone'];
}     ?>">
<input type="submit" value="<?php if(isset($res)){
    echo "Atualizar";
} else {
    echo "Cadastrar";
}   ?>">




</form>

</section>


<section id="direita">
    <table>
        <tr id="titulo">
<td>Nome</td>
<td>Telefone</td>
<td colspan="2">Email</td>

        </tr>

        <tr>
        <?php 
    
    $dados = $p->buscarPessoa();
    if(count($dados) > 0){
        for ($i=0; $i < count($dados) ; $i++) { 
           echo "<tr>";
            foreach ($dados[$i] as $k => $v) {
                if($k != "id"){
                    echo "<td>".$v."</td>";
                }
            }
            ?> <td><a href="index.php?id_up=<?php echo $dados[$i]['id'] ?>">Editar</a> <a href="index.php?id=<?php echo $dados[$i]['id'] ?>">Excluir</a></td> <?php
            echo "</tr>";
        }
    }
    
    else {
        echo "<tr><td>Nenhum registro encontrado</td></tr>";
    }
    
    ?> 
        
        
        
        
            
       
    </table>

    
</section>

<?php

if(isset($_GET['id'])){
    $idpessoa = addslashes($_GET['id']);
    $p->excluirPessoa($idpessoa);
    header("location: index.php");
}

?>





</body>
</html>

