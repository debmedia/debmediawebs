import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation, Trans } from 'next-i18next';

export default function SearchField() {
    const { t } = useTranslation(['blogHome', 'common']);
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const handleClick = () => {
        if(searchText) {
            search();
        } else {
            setOpen(!open);
        }
    };
    const handleInputChange = (event) =>{
        setSearchText(event.target.value);
    }
    const handleKeyDown = (event) =>{
        // si es enter buscamos
        if (event.keyCode === 13) {
            search();
          }
        // si es escape borramos y cerramos el search
        if(event.keyCode === 27){
            setSearchText("");
            setOpen(false);
        }
    }

    const search = () => {
        console.log("Search for: ", searchText);
    }
  return (
    <InputGroup className={`search-field ${open ? "active" : ""}`}>
        <Form.Control
        placeholder={t("NAVBAR.SEARCH")}
        aria-label={t("NAVBAR.SEARCH")}
        aria-describedby="basic-addon2"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={!open}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleClick} >
        <i className="bi bi-search"></i>
        </Button>
    </InputGroup>
  )
}
