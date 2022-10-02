import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #234e70;
  font-weight: 700;
  font-size: 25px;
  display: block;
  margin: 10px 0px;
`;
const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const useCryptocurrency = (label, options) => {
  const [state, setState] = useState("");

  const SelectCoins = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Selecciona</option>

        {options.map((op) => (
          <option key={op.id} value={op.id}>
            {op.name}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectCoins];
};

export default useCryptocurrency;
