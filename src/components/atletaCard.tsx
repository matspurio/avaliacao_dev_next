'use client'

import { Check, PencilLine, X } from '@phosphor-icons/react'

interface IAtletas {
  id: string
  name: string
  gender: string
  status: string
}

const atletas: IAtletas[] = [
  {
    id: '1',
    name: 'Matheus Spurio',
    gender: 'Masculino',
    status: 'Ativo',
  },
  {
    id: '2',
    name: 'Maria Eduarda',
    gender: 'Feminino',
    status: 'Inativo',
  },
  {
    id: '3',
    name: 'Carlos Henrique',
    gender: 'Masculino',
    status: 'Ativo',
  },
]

interface Props {
  openEnable: () => void
  openDisable: () => void
}

export default function AtletaCard({ openEnable, openDisable }: Props) {
  return (
    <div className="grid grid-cols-5 w-full p-2">
      {atletas.map((atleta, index) => (
        <>
          <div key={index} className="flex justify-center items-center mb-4">
            <p>{atleta.id}</p>
          </div>
          <div className="flex text-sm justify-center items-center">
            <p>{atleta.name}</p>
          </div>
          <div className="flex text-sm justify-center items-center">
            <p>{atleta.gender}</p>
          </div>
          <div className="flex text-sm justify-center items-center">
            <p>{atleta.status}</p>
          </div>
          <div className="flex justify-center items-center ml-2">
            <button title="Editar">
              <PencilLine
                className="text-blue-600 mr-2 cursor-pointer"
                size={24}
              />
            </button>
            {atleta.status === 'Inativo' ? (
              <button
                onClick={openDisable}
                title="Ativar"
                className="text-white bg-green-600 p-px text-xs rounded-md mr-2 cursor-pointer"
              >
                <Check size={22} />
              </button>
            ) : (
              <button
                onClick={openEnable}
                title="Inativar"
                className="text-white bg-red-600 p-px text-xs rounded-md mr-2 cursor-pointer"
              >
                <X size={22} />
              </button>
            )}
          </div>
        </>
      ))}
    </div>
  )
}
