import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation, Trans } from 'next-i18next';
import { useRouter } from 'next-translate-routes';
import { Spinner } from 'react-bootstrap';
import { BLOG_SEARCH_URL } from '../../constants/urls';

export default function SearchField() {
    const { t } = useTranslation(['blogHome', 'common']);
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
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

    const search = async () => {
        if(searchText) {
            const uri = encodeURI(`${BLOG_SEARCH_URL}?q=${searchText}`);
            setLoading(true);
            await router.push(uri);
            setLoading(false);
        }
    }
  return (
    <InputGroup className={`search-field ${open ? "active" : ""}`}>
        <Form.Label htmlFor="blog-search-box" visuallyHidden>{t("NAVBAR.SEARCH")}</Form.Label>
        <Form.Control
        name="blog-search-box"
        id="blog-search-box"
        placeholder={t("NAVBAR.SEARCH")}
        aria-label={t("NAVBAR.SEARCH")}
        aria-describedby="basic-addon2"
        type='text'
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={!open}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleClick} >
            {loading? <Spinner animation="border" role="status" size="sm"/>: <i className="bi bi-search"></i>}
        </Button>
    </InputGroup>
  )
}
