import styled from "@emotion/styled";

export const StyledAuthButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  height: 3.5rem;
  padding: 0 1.5rem;
  margin-top: 1rem;
  font-size: 20px;
  transition: background-color 100ms, color 100ms;
  background: var(--Neutral-Colors-White, #fff);
  border: 1px solid #e0e0e9;
  color: var(--Neutral-Colors-Black, #1d1c2b);
  border-radius: 50px;
  gap: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e9;
  }
`;
