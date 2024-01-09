import { useState } from "react";
import { Button } from "../Button";
import { InputContainer } from "./styled";
import searchIcon from "../../../assets/icons/search.svg";

interface SearchProps {
  name?: string;
  handleSearch: (event: any) => void;
}

const SearchBar = ({ handleSearch, name }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <InputContainer onSubmit={handleFormSubmit}>
      <input
        name="search-input"
        type="text"
        placeholder="Enter a movie name..."
        value={query}
        onChange={handleInputChange}
        aria-label="search-input"
      />
      <Button name="submit-btn" type="submit">
        <img className="icon" src={searchIcon} alt="search button" />
      </Button>
    </InputContainer>
  );
};

export default SearchBar;
