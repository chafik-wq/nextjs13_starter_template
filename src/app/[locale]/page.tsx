'use client';

import { useAppSelector } from "@/redux/store"
import { ReactNode } from 'react'
import {useTranslations} from 'next-intl';

export default function Page({children} : { children : ReactNode }) {

  const starterName = useAppSelector((state) => state.starterReducer.value.name)
  const t = useTranslations('Index')

  return (
    <>
      <h1>{starterName}</h1>
      <h6>{t('helloWorld')}</h6>
    </>
  );
}
