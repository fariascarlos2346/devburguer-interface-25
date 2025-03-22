import { 
    Button, 
    Container, 
    Form, 
    InputContainer, 
    LeftContainer, 
    Link, 
    RightContainer, 
    Title 
} from './styles';
import Logo from '../../assets/logo.png';

export function Login() {

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='image logo' />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>DevCarlos!</span> Acesse com seu
                    <span>Login e senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Link>Esqueci minha Senha.</Link>
                    <Button>Entrar</Button>
                </Form>
                <Link>Não possui conta? Clique aqui.</Link>
            </RightContainer>
        </Container>
    );
}