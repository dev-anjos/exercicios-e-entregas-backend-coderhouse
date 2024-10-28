// Função para gerar números aleatórios entre 1 e 20
function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  // Função principal para gerar 10.000 números e contar as ocorrências
  function generateNumbers(limit) {
    const occurrences = {};
  
    // Gerando 10.000 números aleatórios
    for (let i = 0; i < limit; i++) {
      const randomNumber = generateRandomNumber();
  
      // Se o número já existe no objeto, incrementa a contagem, senão, inicia com 1
      if (occurrences[randomNumber]) {
        occurrences[randomNumber]++;
      } else {
        occurrences[randomNumber] = 1;
      }
    }
  
    return occurrences;
  }
  
  // Exibindo o resultado no console
  const result = generateNumbers(10000);
  console.log(result);