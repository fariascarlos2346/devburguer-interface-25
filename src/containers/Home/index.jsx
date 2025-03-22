import { Banner, Container, Content } from "./styles";

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Home</h1>
            </Banner>
            <Container>
                <Content>
                    <div>Carrossel Categori</div>
                    <div>Carrossel Produtos</div>
                </Content>
            </Container>
            
        </main>
    );
}