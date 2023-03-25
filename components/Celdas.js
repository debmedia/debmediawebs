import React from 'react'
import celdas from "../asset/imgs/circulo_celda.svg"
import calendar from "../asset/imgs/calendar.svg"
import satisfaction from "../asset/imgs/satisfaction.svg"
import teleworker from "../asset/imgs/teleworker.svg"
import windowAlert from "../asset/imgs/window_alert.svg"
import window from "../asset/imgs/window.svg"
import phone from "../asset/imgs/phone.svg"
import Image from 'next/image'
import { useTranslation, Trans } from 'next-i18next';

const imgs = [phone];
const popups = [
  {
    title: "CELDAS.CELL_1.TITLE",
    subtitle: "CELDAS.CELL_1.SUBTITLE",
    img: phone
  },
  {
    title: "CELDAS.CELL_2.TITLE",
    subtitle: "CELDAS.CELL_2.SUBTITLE",
    img: calendar
  },
  {
    title: "CELDAS.CELL_3.TITLE",
    subtitle: "CELDAS.CELL_3.SUBTITLE",
    img: teleworker
  },
  {
    title: "CELDAS.CELL_4.TITLE",
    subtitle: "CELDAS.CELL_4.SUBTITLE",
    img: satisfaction
  },
  {
    title: "CELDAS.CELL_5.TITLE",
    subtitle: "CELDAS.CELL_5.SUBTITLE",
    img: windowAlert
  },
  {
    title: "CELDAS.CELL_6.TITLE",
    subtitle: "CELDAS.CELL_6.SUBTITLE",
    img: window
  }
]
export default function Celdas() {
  const { t } = useTranslation(['components', 'common']);
  return (
    <div className='celdas-container'>
      <div className='celdas-center'>
        <div className='celdas-main-text'>deb<b>Q</b></div>
        <Image src={celdas} alt=""></Image>
      </div>
      <div>
        {popups.map((popup) => <div key={popup.title} className='celdas-popup'>
          <div className='celdas-popup-img'><Image src={popup.img} alt=""></Image></div>
          <div className='celdas-popup-content'>
            <div>{t(popup.title)}</div>
            <div>{t(popup.subtitle)}</div>
          </div>
        </div>)}
      </div>
    </div>
  )
}
