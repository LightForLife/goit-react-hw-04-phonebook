import styled from 'styled-components';

export const ItemContact = styled.li`
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-image: url(http://www.transparenttextures.com/patterns/arches.png);
  & + & {
    margin-top: 30px;
  }
`;

export const NameContact = styled.span`
  display: block;
  font-size: 26px;
  color: #1a7e76;
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const TelContact = styled.span`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
`;

export const DeleteContactBtn = styled.button`
  position: absolute;
  padding: 5px;
  top: 5px;
  right: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: red;
    scale: 1.1;
  }
`;
