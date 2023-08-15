import React from 'react'
import { Badge } from 'react-bootstrap'
import { useTranslation } from 'next-i18next';

export default function CategoryBadge({slug, badgeColor, className, ...props}) {
    const { t } = useTranslation(['blogHome', 'common']);
    const badgeBgClass = badgeColor ?  `bg-${badgeColor}`: "";
  return (
    <Badge className={`${className} ${badgeBgClass}`} {...props}>{t("CATEGORIES_SLUG." + slug)}</Badge>
  )
}
