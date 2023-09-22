'use client'

import AtletaCard from '@/components/atletaCard'
import { ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'
import Header from '@/components/header'
import { useRef } from 'react'
import AthleteEnable, { IAthleteEnableRefProps } from './enable'
import AthleteDisable, { IAthleteDisableRefProps } from './disable'

export default function Home() {
  const enableRef = useRef<IAthleteEnableRefProps>(null)
  const disableRef = useRef<IAthleteDisableRefProps>(null)

  const handleOpenEnableModal = () => {
    enableRef.current?.open()
  }

  const handleOpenDisableModal = () => {
    disableRef.current?.open()
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:p-18 md:p-14 pt-20 lg:pt-32 bg-gray-200 w-full">
      <Header />
      <div className="sm:border-2 lg:border-gray-300 w-full md:px-2 pt-10 rounded-lg">
        <div className="flex mb-14 w-full justify-between">
          <h1 className="text-3xl">Listagem de atletas</h1>
          <Link
            href="/cadastrar"
            className="lg:p-2 p-1 border-2 rounded-md bg-green-600 text-white hover:scale-105 ease-in-out duration-75"
          >
            Cadastrar novo atleta
          </Link>
        </div>
        <div className="flex justify-end w-full mb-4">
          <Link href="/acessos" className="flex items-center">
            <p className=" underline">Ir para listagem de acessos</p>
            <ArrowRight size={22} weight="thin" />
          </Link>
        </div>
        <div className="grid grid-cols-5 w-full p-1 border-2 rounded-md border-solid border-zinc-400 mb-4 bg-gray-600">
          <div className="flex justify-center items-center text-white">
            <p>ID</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <p>Nome</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <p>Gênero</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <p>Situação</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <p>Ações</p>
          </div>
        </div>
        <AtletaCard
          openDisable={handleOpenDisableModal}
          openEnable={handleOpenEnableModal}
        />
        <AthleteEnable ref={enableRef} />
        <AthleteDisable ref={disableRef} />
      </div>
    </main>
  )
}
