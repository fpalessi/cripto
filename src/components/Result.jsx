import styled from "@emotion/styled";

const Container = styled.div`
  color: #234e70;
  font-weight: 700;
  font-size: 20px;
  margin-left: 25px;
  margin-top: 10px;
  @media (max-width: 800px) {
    /* margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center; */
    display: flex;
    gap: 10px;
    margin-top: 50px;
  }
`;

const Image = styled.img`
  display: block;
  width: 120px;
  margin-left: 60px;
  @media (max-width: 630px) {
    display: none;
  }
`;

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL } = result;
  return (
    <Container>
      <div>
        <Image
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="logo cripto"
        />
      </div>
      <div>
        <p>
          El precio actual es de <span>{PRICE}</span>
        </p>
        <p>
          El precio más alto de hoy ha sido <span>{HIGHDAY}</span>
        </p>
        <p>
          El precio más alto de hoy ha sido <span>{LOWDAY}</span>
        </p>
        <p>
          La variación diaria ha sido de <span>{CHANGEPCT24HOUR}</span>
        </p>
      </div>
    </Container>
  );
};

export default Result;
