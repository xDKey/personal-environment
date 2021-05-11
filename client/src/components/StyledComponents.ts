import styled from 'styled-components'

export const StyledButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 16px;
  background: #2196f3;

  border-radius: 4px;
  &:focus {
    outline-color: cyan;
  }
`
export const StyledInputText = styled.input`
  width: 300px;
  font-size: 1.5rem;
  padding: 5px;
  margin-bottom: 8px;
  &:focus {
    outline-color: cyan;
  }
`
export const StyledField = styled.label`
  font-size: 2rem;
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-bottom: 10px;
`
