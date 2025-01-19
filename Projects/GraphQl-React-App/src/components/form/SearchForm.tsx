import { useState } from "react";

type SearchFormProps = {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
    const [text, setText] = useState<string>(userName);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter a username")
            return;
        }
        setUserName(text);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchForm