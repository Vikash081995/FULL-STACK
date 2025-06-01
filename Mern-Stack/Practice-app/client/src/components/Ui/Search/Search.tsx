type SearchProps = {
  label: string;
  term: string;
  setSearchTerm: (term: string) => void;
};

const Search = ({ label, setSearchTerm, term }: SearchProps) => {
  const onChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">{label}</label>
      <input type="text" id="search" value={term} onChange={onChangehandler} />
    </div>
  );
};

export default Search;
