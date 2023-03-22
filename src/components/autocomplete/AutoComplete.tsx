import React, { useEffect, useRef, useState } from "react";
import InputContainer from "./InputContainer";
import SearchResultsContainer from "./SearchResultsContainer";

interface props {
  options: any;
  placeholder: string;
}
const AutoComplete: React.FC<props> = ({ options, placeholder }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const ref: any = useRef(null);

  const filteredOptions = options?.filter((item: any) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    // If typed text is not a option, clear text filed
    if (!showSearchResults && !options.includes(searchText)) setSearchText("");
  }, [showSearchResults]);

  return (
    <div className="autocomplete-container" ref={ref}>
      <InputContainer
        setSearchText={setSearchText}
        searchText={searchText}
        setShowSearchResults={setShowSearchResults}
        showSearchResults={showSearchResults}
        placeholder={placeholder}
      />
      <div className="searchResults-container">
        {showSearchResults && (
          <SearchResultsContainer
            options={filteredOptions}
            setSearchText={setSearchText}
            setShowSearchResults={setShowSearchResults}
          />
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
