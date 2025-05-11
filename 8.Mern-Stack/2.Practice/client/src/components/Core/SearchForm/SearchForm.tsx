import React, { useState } from "react";
import Search from "../../Ui/Search/Search";

type SearchFormProps = {
  label?: string;
  onSubmit: (term: string) => void;
};

const SearchForm = ({ label, onSubmit }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Search
          label={label || ""}
          setSearchTerm={setSearchTerm}
          term={searchTerm}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
