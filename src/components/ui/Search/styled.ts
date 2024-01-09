import styled from "styled-components";

export const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  > [name="search-input"] {
    width: 90%;
    height: 50px;
    padding: 0 16px;
    border-radius: 100px;
    border: 0px solid transparent;

    > [name="submit-btn"] {
      height: auto;
      padding: 0 16px;

      img {
        height: inherit;
        width: inherit;
      }
    }
  }
`;