import { setCookie, parseCookies } from "nookies";
import { router } from "next/router";
import axios from 'axios';

function login() {
    async function auth (email, psw) {
        const password = 1
        const response = await axios.post('http://localhost:3001/login/', { email, password });
        
        
        const { token, userId } = response.data;
        
        setCookie(undefined, 'token', userId, {
            maxAge: 60 * 60 * 1 
         })
         
        
        router.push('/')
        
    }

    return(
        <div class="overflow-hidden bg-cyan-700">
            <div class="lgnBody overflow-hidden "> 
                <div class="lgnMain bg-cyan-700  divide-transparent">
                    <div class="form">
                            <h1 class="lgnH1 cursor-default text-5xl font-bold mt-10 text-white">
                                Bem-vindo
                            </h1>

                            <section>
                                <label  class="lbl text-white">
                                    Nome de usuário*
                                </label>
                                <input id="email" type="text" placeholder="Digite seu nome de usuário aqui!" class="ipt"></input>
                            </section>

                            <section>
                                <label  class="lbl text-white border-gray-100">
                                    Senha*
                                </label>
                                <input id="psw" type="password" placeholder="Digite sua senha aqui!" class="ipt text-black"></input>
                            </section>
                            <section class="flex items-center  mt-0">
                                <input type="checkbox" class="">
                                
                                </input>

                                <span class=" text-gray-400 border-gray-100">
                                    Lembrar de mim
                                </span>
                            </section>
                            

                            <div class="center">
                                <button   class="lgnBtn bg-cyan-700 rounded text-white shadow-inner cursor-pointer hover:bg-cyan-600" onClick={() => auth(document.getElementById('email').value, document.getElementById('psw').value)}>
                                    ENTRAR
                                </button>
                            </div>
                            
                            <section class="links">
                                <a href="/" class="linkRgst font-bold text-white">
                                    Não tem uma conta?
                                </a>
                                <a href="/" class="linkPsw font-bold text-white">
                                    esqueceu sua senha?
                                </a>
                            </section>
                        
                    </div>
                </div>
            </div>
         </div>
    )     
} 
    
export default login;
