<?php 

Class Pessoa {


    private $pdo;
 public function __construct($db,$user,$pass){
   try {
    $this->pdo = new PDO('mysql:host=localhost;dbname='.$db,$user,$pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



   } catch (PDOException $e) {
    echo "Data Base error: ".$e->getMessage();
   }
   catch (Exception $e) {
    echo "Some error: ".$e->getMessage();
   }

 }


 public function buscarPessoa(){
   #transforma a variavel em array para que não de problemas se estiver vazio
    $res = array();
    $sql = $this->pdo->query("SELECT * FROM people ORDER BY nome");
    $cmd = $sql->fetchAll(PDO::FETCH_ASSOC);
    return $cmd;

    
 }

 public function cadastrarPessoa($nome,$email,$telefone){
     $sql = $this->pdo->prepare("SELECT id from people WHERE email = :e");
     $sql->bindValue(":e",$email);
     $sql->execute();
     #verifica se existe algum registro igual no DB
     
     if($sql-> rowCount() > 0){
        return false;
        echo "email já cadastrado";
     } else {
       
        
        $sql = $this->pdo->prepare("INSERT INTO people (nome,email,telefone) VALUES (:n,:e,:t)");
        $sql->bindValue(":n",$nome);
        $sql->bindValue(":e",$email);
        $sql->bindValue(":t",$telefone);    
        $sql->execute();
        return true;
     }
 }

 public function excluirPessoa($id){
    $sql=$this->pdo->prepare("DELETE FROM people WHERE id = :i");
    $sql->bindValue(":i",$id);
    $sql->execute();

 }

 public function selecionarPessoa($id){
    $res = array();
    $sql=$this->pdo->prepare("SELECT * FROM people WHERE id = :i");
    $sql->bindValue(":i",$id);
    $sql->execute(); 
    $res = $sql->fetch(PDO::FETCH_ASSOC); #para uma linha, basta fetch
    return $res;

 }

 public function atualizarPessoa($id,$nome,$telefone,$email){
  

  
      $sql = $this->pdo->prepare("UPDATE people SET nome = :n, telefone = :t, email = :e WHERE id = :i ");
      $sql->bindValue(":n",$nome);
      $sql->bindValue(":t",$telefone);
      $sql->bindValue(":e",$email);
      
      $sql->bindValue(":i",$id);
      $sql->execute();

   
   
   
  

 }

}





?>