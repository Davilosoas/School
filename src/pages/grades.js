import axios from 'axios';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';

export default function grade(){
    
    const [user, setUser] = useState();

    useEffect(() => {
        const readCookies = parseCookies()
        const token = readCookies.token;
        console.log(token)
        const getUsers = async () => {
            const response = await axios.post('http://localhost:3001/getUser/', { token });
            setUser(response.data);
            
            
        };
        getUsers();
        
    }, []);
    
    const createUser = async () => {
        const userId = document.getElementById('userId').value
        const teacherId = document.getElementById('teacherId').value
        const response = await axios.post('http://localhost:3001/createUser/', {userId, teacherId});

        setUser(response.data);
};
    const changeUser = async (idToChange) => {
        const id = idToChange
        console.log(id)
        const response = await axios.put('http://localhost:3001/changeUser/', { id });
        setUser(response.data);
    }
    const deleteUser = async (idToDelete) => {
        const id = idToDelete
        console.log(id)
        const response = await axios.post('http://localhost:3001/deleteUser/', { id });
        setUser(response.data);
    }
    const changeGrade1 = async (userId, gradeToChange) => {
        const id = userId
        const g1 = gradeToChange

        console.log(id, g1)

        const response = await axios.put('http://localhost:3001/changeGrade1/', { id, g1 });
        setUser(response.data);
}

    return (
    <html class="h-screen">
        <header class=" mt-0  h-20  w-screen flex justify-center items-center bg-indigo-900">
            <h2 class="text-white font-bold text-5xl">Boletim</h2>
        </header>
        
        <body class="">
   
            <div id="grades"class="flex mt-14  flex-col justify-center bg-white">
                
                <div class="flex justify-center items-center">
                    <div  type="text"  class="ml-8 w-28 cursor-default font-bold">Disciplina</div>
                        
                    <div  type="number" placeholder="1°AV"  class=" h-8 w-14 flex justify-center items-center text-center font-bold">1°AV</div>
                    <div  type="text" placeholder="2°AV" class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold">2°AV</div>
                    <div  type="text" placeholder="3°AV" class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold">3°AV</div>
                    <div  type="text" placeholder="4°AV" class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold">4°AV</div>
                    <div  type="text" placeholder="5°AV" class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold">5°AV</div>
                    <div  type="text" placeholder="6°AV" class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold">6°AV</div>
                    <div  type="text" placeholder="7°AV" class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold">7°AV</div>
                    <div  type="text" placeholder="8°AV" class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold">8°AV</div>
                    <div  type="text"  class=" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 font-bold text-xs mr-5 ">Média Final</div>
                        
                        
                    

                    <div class="text-center rounded  h-6 w-16"></div>
                </div>
            {user?.map((service) => (
                <div class="flex  justify-center items-center">
                    
                    
                    <div id="subj" type="text"  class="ml-8 w-28 cursor-default ">{service.subject}</div>
                    
                    <input id={`g1${service.id}`} type="number" placeholder={service.grade1}  class={`${service.grade1 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none`}/>

                    {/* <button onClick={() => (document.getElementById(`g1${service.id}`).value != '' && document.getElementById(`g1${service.id}`).value <= 10)?changeGrade1(service.id, document.getElementById(`g1${service.id}`).value):console.log('não')} class="border-solid border-gray-500 border-2 h-8 w-14 flex justify-center items-center text-center rounded bg-amber-300">Alt</button> */}
                    
                    <input id="g2" type="text" placeholder={service.grade2} class={`${service.grade2 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none`}/>
                    <input id="g3" type="text" placeholder={service.grade3} class={`${service.grade3 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none`}/>
                    <input id="g4" type="text" placeholder={service.grade4} class={`${service.grade4 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none`}/>
                    <input id="g5" type="text" placeholder={service.grade5} class={`${service.grade5 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none`}/>
                    <input id="g6" type="text" placeholder={service.grade6} class={`${service.grade6 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none`}/>
                    <input id="g7" type="text" placeholder={service.grade7} class={`${service.grade7 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none`}/>
                    <input id="g8" type="text" placeholder={service.grade8} class={`${service.grade8 >= 7?'placeholder:text-rose-700':'placeholder:text-indigo-600'} placego" h-8 w-14 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none border-r-4 "`} />
                    <input id="media" type="text" placeholder={((service.grade1 + service.grade2 + service.grade3 + service.grade4 + service.grade5 + service.grade6 + service.grade7 + service.grade8)/8).toFixed(2)} class={`${(service.grade1 + service.grade2 + service.grade3 + service.grade4 + service.grade5 + service.grade6 + service.grade7 + service.grade8)/8 >= 7?'placeholder:text-indigo-600':'placeholder:text-rose-700'} placego" h-8 w-14 mr-5 flex justify-center items-center text-center border-solid border-gray-500 border-2 outline-none border-r-4 "`} />
                    
                    
                    

                    <button onClick={() => changeUser(service.id)} class="text-center rounded bg-amber-300 h-6 w-16">Alterar</button>
                    {/* <button onClick={() => deleteUser(service.id)} >Deletar</button> */}
                </div>
                

            ))}
                <form>
                    {/* <input id ="test" placeholder="teste"></input> */}
                    {/* <button  onClick={() => (document.getElementById('test').value)}>teste</button> */}
                    
                    {/* <input type='number' id='userId' placeholder="userId"/>
                    <input type='number' id='teacherId' placeholder="teacherId"/>
                    <button type="button" onClick={() => createUser()}>Criar Usuário</button> */}

                </form>
            </div>
            
    </body>
</html>        
    )
}