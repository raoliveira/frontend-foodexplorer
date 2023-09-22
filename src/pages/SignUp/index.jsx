import { useState } from 'react';
import { api } from '../../services/api';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";

import { Link, useNavigate } from 'react-router-dom';


export function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    function handleSignUp() {

        if (!name || !email || !password) {
          return alert('Preencha todos os campos!');
        }
    
        setLoading(true);
        api.post('/users', { name, email, password })
           .then(() => {
                alert('Usuário cadastrado com sucesso!');
                navigate('/');
          
          })
          .catch((err) => {
            setLoading(false);
            if (err.response) {
              alert(err.response.data.message);
            } else {
              alert('Não foi possível cadastrar');
              navigate('/');
            }
          });
      }
    
    return (
        <Container>
            <header>
                <Logo/>
            </header>
            <main>
                <form action="">
                    <h1>Registre-se</h1>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="exemplo@email.com.br"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Mínimo de 6 caracteres"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="button" title="Criar conta" onClick={handleSignUp} disabled={loading}/>
                    <Link to="/">Já tenho uma conta</Link>

                </form>
            </main>

           
            
                   
        </Container>
    )
}