const API_BASE_URL = "http://localhost:5000/api/contas";

export const adicionarConta = async (novaConta) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaConta),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Erro ao adicionar conta");
    }

    return data.conta; 
  } catch (error) {
    throw error;
  }
};

export const listarContasPorUsuario = async (idUsuario, mes, ano) =>{
  let API_URL = `${API_BASE_URL}/usuario/${idUsuario}`;


  if(mes && ano){
    API_URL += `?mes=${mes}&ano=${ano}`;
  }

  try{
    const response = await fetch(API_URL);

    if(!response.ok){
      const data = await response.json();
      throw new Error(data.error || "Erro ao buscar contas");
    }

    return await response.json();
  } catch(error){
    throw error;
  }
};

export const buscarSalarioUsuario = async (idUsuario) =>{
  try{
    const response = await fetch(`http://localhost:5000/api/usuario/${idUsuario}/salario`);
    if(!response.ok){
      throw new Error("Erro ao buscar salário");
    }
    return await response.json();
  } catch(error){
    throw error;
  }
};