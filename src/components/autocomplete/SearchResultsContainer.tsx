import React, { Dispatch, SetStateAction } from "react";

const SearchResultsContainer = ({
  options,
  setSearchText,
  setShowSearchResults,
}: {
  options: any;
  setSearchText: Dispatch<SetStateAction<string>>;
  setShowSearchResults: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="search-results">
      {options.length > 0 ? (
        options.map((item: any, index: number) => (
          <p
            onClick={() => {
              setSearchText(item);
              setShowSearchResults(false);
            }}
            key={`${item}-${index}`}
          >
            {item}
          </p>
        ))
      ) : (
        <p>No Options</p>
      )}
    </div>
  );
};

export default SearchResultsContainer;
