import Modal from "react-modal";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransctionsTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        onClick={onRequestClose} 
        className='react-modal-close'
      >
        <img src={closeImg} alt='Fechar modal' />
      </button>

      <Container>
        <h2>Cadastro de Transação</h2>

        <input type='text' placeholder='Título'/>
        <input type='number' placeholder='Valor'/>

        <TransctionsTypeContainer>
          <button
            type='button'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button
            type='button'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransctionsTypeContainer>

        <input type='text' placeholder='Categoria'/>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}