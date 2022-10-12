import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  margin-bottom: 70px;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  justify-items: center;
  align-items: stretch;
  margin-bottom: 30px;
`;

export const FormLabel = styled.label`
  color: #fff;
  margin-bottom: 4px;
  text-align: center;
  align-items: center;
`;

export const FormInput = styled(Field)`
  display: block;
  margin-top: 5px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 1.1em;
  outline: none;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 6px 15px;
`;

export const AddContactBtn = styled.button`
  width: 200px;
  height: 40px;
  color: #fff;
  background-color: #7a75a9;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ErrorText = styled.p`
  width: 240px;
  display: block;
  color: red; ;
`;
