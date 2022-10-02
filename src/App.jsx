import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CriptoImage from "./assets/cryptocurrency.png";
import Form from "./components/Form";
import Result from "./components/Result";

const Container = styled.div`
  max-width: 1200px;
  margin: 7rem auto;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Heading = styled.h1`
  color: #234e70;
  margin: 20px auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  @media (max-width: 375px) {
    font-size: 22px;
  }
  @media (max-width: 630px) {
    font-size: 29px;
  }
`;
const Image = styled.img`
  max-width: 500px;
  width: 80%;
  margin: 60px auto 0 auto;
  display: block;
  @media (max-width: 992px) {
    width: 50%;
  }
`;

function App() {
  const [search, setSearch] = useState({});
  const [result, setResult] = useState({});

  useEffect(() => {
    // if object not empty
    if (Object.keys(search).length > 0) {
      const fetchResult = async () => {
        const { currency, cripto } = search;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`;
        const response = await fetch(url);
        const result = await response.json();
        // Le estamos diciendo que de forma dinámica busque una propiedad en el objeto DISPLAY que tenga el nombre de la cripto (BIT, DOT) y de la currency (EUR, USD)
        setResult(result.DISPLAY[cripto][currency]);
      };
      fetchResult();
    }
  }, [search]);

  return (
    <>
      <Heading>Cotiza tu cripto en tiempo real</Heading>
      <Container>
        {" "}
        <Form setSearch={setSearch} />
        {result.PRICE ? (
          <Result result={result} />
        ) : (
          <Image src={CriptoImage} alt="cripto" />
        )}
      </Container>
    </>
  );
}

export default App;
