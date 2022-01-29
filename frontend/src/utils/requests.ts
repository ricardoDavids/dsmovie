//Aqui em baixo vamos definir a nossa variavel de ambiente BASE_URL. 
//Base_URL  vai ter o valor do Host que é o nosso backend Local
//Quando implementar essa app lá no netlify ela vai conversar na verdade nao com localhost mas sim com o Heroku
//Então vou preparar uma variavel de ambiente para ficar já preparada para receber tambem mais tarde o endereço de Heroku
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";