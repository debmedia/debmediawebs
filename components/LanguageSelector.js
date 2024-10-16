import Link from "next-translate-routes/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

export default function LanguageSelector({ langs, className }) {
    const { t } = useTranslation(["components", "common"]);
    const { locale, asPath } = useRouter();
    const [dropdownState, setDropdownState] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setDropdownState(false);
    }, [locale]);

    const onClickOutside = () => {
        setDropdownState(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    const setLangCookie = (locale) => {
        document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
    }

    return (
            <div ref={ref} className={"language-selector-container "+className} style={{"alignSelf": "center"}}>
                <button
                    type="button"
                    className="btn lang-selector text-nowrap"
                    onClick={() => setDropdownState(!dropdownState)}>
                    <i className="bi bi-globe"></i>{" "}
                    <span>
                    {t(langs.filter((lang) => lang.key === locale)[0].label)}
                    </span>
                    {" "}
                    <i className="bi bi-caret-down-fill"></i>
                </button>
                {dropdownState && (
                    <div className="dropdown-container">
                        <ul>
                            {langs.map((lang) => {
                                return (
                                    // usamos asPath, porque pathname devuelve la rutas dinámicas con los corchetes y sin los params, 
                                    // asi podemos cambiar de idioma sin romper en las páginas dinámicas del blog
                                    <Link
                                        href={asPath}
                                        key={lang.key}
                                        locale={lang.key}
                                        scroll={false}
                                        
                                        >
                                        {/* El on click de aca abajo no se si esta del todo bien dado que 
                                        tal vez podría el navegador navegar antes que se ejecute (?)
                                        Por ahora anda y lo dejamos asi. */}
                                        <li id={`lang-selector-button-${lang.key}`} className="dropdown-item" onClick={()=>setLangCookie(lang.key)}>
                                            <span>{t(lang.dropdownLabel)}</span>
                                            {locale === lang.key && (
                                                <i className="bi bi-check"></i>
                                            )}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
    );
}
