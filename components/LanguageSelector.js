import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

export default function LanguageSelector({ langs, className }) {
    const { t } = useTranslation(["components", "common"]);
    const { locale, pathname } = useRouter();
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

    return (
            <div ref={ref} className={"language-selector-container "+className}>
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
                                    <Link
                                        href={pathname}
                                        key={lang.key}
                                        locale={lang.key}
                                        scroll={false}>
                                        <li className="dropdown-item">
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
