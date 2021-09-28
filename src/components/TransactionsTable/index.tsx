import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transations')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário</td>
            <td className='deposit'>R$2.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$1.000,00</td>
            <td>Casa</td>
            <td>17/09/2021</td>
          </tr>
          <tr>
            <td>Matriz</td>
            <td className='withdraw'>- R$60,00</td>
            <td>Alimentação</td>
            <td>16/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}