// Calcular em quanto tempo a carteira de motorista irá vencer de acordo com a legislação.

/* 
 1- Se você está tirando a carteira pela 1° vez, o tempo de vencimento é de um ano;
 2- Se você tem idade inferior a 50 anos, o vencimento é de 10 anos;
 3- Se for igual ou superior a 50 anos ou inferior a 70 anos o vencimento é de 5 anos;
 4- Se for igual ou superior a 70 anos, o vencimento serã de 3 anos;
*/

(function validarCarteiraMotorista(primeiraVezTirandoCarteira, idade) {
  if (primeiraVezTirandoCarteira) {
    console.log('O tempo de vencimento é de um ano');
    return;
  }

  if (idade < 50) {
    console.log('O vencimento é de 10 anos');
  } else if (idade >= 50 && idade < 70) {
    console.log('O vencimento é de 5 anos');
  } else {
    console.log('O vencimento é de 3 anos');
  }
})(false, 70);
