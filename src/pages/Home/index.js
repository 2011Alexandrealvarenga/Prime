import {useEffect, useState} from 'react';
import api from '../../services/api';

function Home(){
    const [filmes, setFilmes] = useState([]);
    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {

                params:{
                    api_key: '5944ad4642e92ce6363ae933ad541e58',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            console.log(response.data);

        }
        loadFilmes();
    }, []); 
    return(
        <div>
            <h1>Home</h1>
            <p>Bem-vindo à página inicial!</p>
        </div>
    );
}
export default Home;