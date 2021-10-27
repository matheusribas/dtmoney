import styled from "styled-components";

interface TotalType {
  value: number
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div:not(:last-child) {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;

const colors = {
  green: '#33CC95',
  red: '#E62E4D'
}

export const Total = styled.div<TotalType>`
  background: ${props => props.value >= 0 ? colors.green : colors.red};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: #FFF;
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`