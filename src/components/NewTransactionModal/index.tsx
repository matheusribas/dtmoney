import { FormEvent, useState } from "react";
import Modal from "react-modal";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransctionsTypeContainer, RadioBox } from "./styles";
import { api } from "../../services/api";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('dedposit');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      type,
      category
    };

    api.post('/transactions', data)
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastro de Transação</h2>

        <input 
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder='Título'
        />
        <input 
          type='number'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
          placeholder='Valor'
        />

        <TransctionsTypeContainer>
          <RadioBox
            type='button'
            onClick={_ => setType('deposit') }
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={_ => setType('withdraw') }
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransctionsTypeContainer>

        <input 
          type='text' 
          value={category}
          onChange={event => setCategory(event.target.value)}
          placeholder='Categoria'
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}