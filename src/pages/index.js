import axios from 'axios'
import Image from 'next/image'
import { parseCookies } from 'nookies';
import { useState, useEffect} from 'react'

export default function grade(){
    
     const [user, setUser] = useState();

    useEffect(() => {
        const token = parseCookies().token
        
        setUser(token)
        // console.log(token)
            
            

        
    }, []);
    console.log(parseCookies().token)
    
    return (
        <html class="h-screen">
            <header class="w-screen ">
                <div class='bg-cyan-900 h-14 w-screen flex ml-0'>
                    <div class="text-white flex ml-14 mr-auto  w-96  items-center font-bold text-2xl cursor-pointer">Instituto Educacional de Teresina
                    </div>

                    <div class="text-white flex justify-center items-center ml-auto mr-20 font-semibold text-xl hover:text-gray-400 cursor-pointer" >
                     </div>
                </div>

                <nav class='w-screen flex justify-center items-center gap-x-10 h-12 border-cyan-900 border-solid border-b-2'>
                    <a href="/login" class='flex justify-center items-center font-bold text-cyan-900 hover:text-cyan-600 cursor-pointer'>
                        Login
                    </a>
                    <a  class='flex justify-center items-center font-bold text-cyan-900 hover:text-cyan-600 cursor-pointer'>
                        Calendário Acadêmico
                    </a>
                    { user === '1' ?
                        <a href="/grades" class='flex justify-center items-center font-bold text-cyan-900 hover:text-cyan-600 cursor-pointer'>
                        Boletim
                    </a>:console.log('não')
                    }
                    
                </nav>
            </header>

            <body class="h-max">
                <section class=" w-screen flex justify-center items-center mt-10">
                    <div class='h-3/6 w-3/6 border-cyan-900 border-solid border-2 rounded-xl hover:brightness-90 cursor-pointer hover:border-black'>
                        <Image src={"/feliz2.png"} layout='responsive' width={1920} height={1282} class="h-full w-full rounded-lg" />
                    </div>
                </section>
                <section>
                <h2 class="font-semibold text-2xl w-screen flex justify-center items-center  text-cyan-900 mt-16 border-cyan-900 border-solid border-b-2 border-t-2 cursor-default"> 
                    Atividades Extracurriculares
                    
                </h2>

                    <div class="flex justify-center items-center mt-20 gap-x-32">
                        <div class="border-cyan-900 border-solid border-2 h-1/6 w-1/6 rounded-xl hover:border-amber-600 cursor-pointer">
                            <Image class="rounded-lg" src="/soccer2.png" layout='intrisic' width={960} height={960}/>
                        </div>
                        <div class="border-cyan-900 border-solid border-2 h-1/6 w-1/6 rounded-xl hover:border-amber-600 cursor-pointer">
                             <Image class="rounded-lg" src="/swimming1.png" layout='responsive' width={960} height={960}/>
                        </div>
                        
                        <div class="border-cyan-900 border-solid border-2 h-1/6 w-1/6 rounded-xl flex justify-center items-center hover:border-amber-600 cursor-pointer">
                             <Image  class="rounded-lg" src="/karate1.png" layout='intrinsic' width={960} height={960}/>
                        </div>
                    </div>
                    

                </section>
                <div class=""></div>
                
            </body>
            <footer class="mt-20 mb-0  h-1/6 w-screen flex gap-6 bg-slate-600 text-white text-xl font-bold justify-center items-center">
                <a href="tel:+5541987095757" class="cursor-pointer hover:text-gray-400">Número: (41) 98709-5757</a>
                <a  class="cursor-pointer hover:text-gray-400">Endereço: Rua Alves dos Santos, 4897</a>
                <a href="mailto:davilosoas@gmail.com"class="cursor-pointer hover:text-gray-400">E-Mail: EmailEscolar@gmail.com</a>
                
                
            </footer>
        </html>
    )
}