import styled from "@emotion/styled";
import useCryptocurrency from "../hooks/useCryptocurrency";
import { divisa } from "../constants";
import { useEffect, useState } from "react";
import Alert from "./Alert";

const Container = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 50px auto 0 auto;
  display: block;
`;
const InputSubmit = styled.input`
  background-color: #234e70;
  border: none;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  color: #fff;
  font-weight: 700;
  font-size: 19px;
  border-radius: 5px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #fff;
    border: 1px solid #234e70;
    cursor: pointer;
    color: #234e70;
  }
`;

const Form = ({ setSearch }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  // state = currency, cripto
  const [currency, SelectCoins] = useCryptocurrency("Elige tu divisa", divisa);
  const [cripto, SelectCrypto] = useCryptocurrency("Elige tu cripto", cryptos);

  useEffect(() => {
    const fetchCrypto = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

      const response = await fetch(url);
      const result = await response.json();

      const arCryp = result.Data.map((cripto) => {
        const obj = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
        return obj;
      });
      setCryptos(arCryp);
    };
    fetchCrypto();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([currency, cripto].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setSearch({ currency, cripto });
  };

  return (
    <Container>
      {error && <Alert>Rellena todos los campos para continuar</Alert>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCrypto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </Container>
  );
};

export default Form;
