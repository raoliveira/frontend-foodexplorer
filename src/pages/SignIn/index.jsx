import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';


import { Link } from 'react-router-dom';


export function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
  
    const { signIn } = useAuth();
  
    async function handleSignIn() {
      setLoading(true);
      const loadingStatus = await signIn({ email, password });
      setLoading(loadingStatus);
    }
    return (
        <Container>
            <header>
            <Logo/>
            </header>
            <main>
                <form action="">
                    <h1>Faça login</h1>
                    <Input 
                        title="Email" 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input 
                        type="password" 
                        title="Senha" 
                        placeholder="No mínimo 6 caracteres"
                        onChange={(e) => setPassword(e.target.value)}    
                    />

                    <Button 
                        title="Entrar"
                        onClick={handleSignIn}
                        disabled={loading}
                    />
                    
                    <Link to="/register">Criar Conta</Link>

                </form>
            </main>
        </Container>
    )
}