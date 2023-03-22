import React, { Dispatch, SetStateAction } from "react";
import "./styles/autocomplete.styles.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineClear,
} from "react-icons/md";

interface props {
  setSearchText: Dispatch<SetStateAction<string>>;
  setShowSearchResults: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  searchText: string;
  showSearchResults: boolean;
  placeholder: string
}

const InputContainer: React.FC<props> = ({
  setSearchText,
  setShowSearchResults,
  disabled = false,
  searchText,
  showSearchResults,
  placeholder
}) => {
  return (
    <div className="input-container">
      <input
        placeholder={placeholder}
        onChange={(e) => {
          setSearchText(e.target.value);
          setShowSearchResults(true);
        }}
        onClick={() => setShowSearchResults(true)}
        disabled={disabled}
        value={searchText}
      />
      <div className="icon-container">
        {searchText && (
          <MdOutlineClear
            fontSize={"20px"}
            cursor={"pointer"}
            onClick={() => setSearchText("")}
          />
        )}
        {showSearchResults ? (
          <MdOutlineArrowDropUp
            fontSize={"22px"}
            onClick={() => !disabled && setShowSearchResults(false)}
            cursor={"pointer"}
          />
        ) : (
          <MdOutlineArrowDropDown
            fontSize={"22px"}
            onClick={() => !disabled && setShowSearchResults(true)}
            cursor={"pointer"}
          />
        )}
      </div>
    </div>
  );
};

export default InputContainer;
