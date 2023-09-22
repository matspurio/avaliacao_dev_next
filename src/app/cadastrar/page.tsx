'use client'

import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react'

export default function cadastrarAtleta() {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full min-h-screen">
        <div className="bg-gray-600 px-8 py-10 sm:w-2/3 md:w-3/5 lg:w-1/3 rounded-md">
          <h1 className="text-xl mb-8 text-gray-300 text-center">
            Preencha as informações abaixo:
          </h1>
          <div>
            <div className="border-b-2 border-gray-300 mb-6">
              <input
                placeholder="Nome completo"
                className="bg-transparent focus:outline-none text-gray-300"
                type="text"
              />
            </div>
            <div className="flex">
              <p className="text-gray-300 mr-4">Informe o gênero:</p>
              <select
                className="bg-transparent h-8 border-gray-500 border-2 rounded-md focus:outline-none text-gray-300"
                name="gender"
              >
                <optgroup label="Gênero">
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <input className="w-3 h-3" type="checkbox" />
              <label className="text-gray-300 mb-2 ml-2 text-md">
                Atleta ativo
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button className="bg-green-600 text-white p-1 w-2/5 rounded-md mt-4">
              Cadastrar
            </button>
            <button className="bg-red-800 text-white p-1 w-2/5 rounded-md mt-4">
              Cancelar
            </button>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/" className="text-sm text-gray-300 flex">
              <ArrowLeft
                className="text-gray-300 mr-1"
                size={20}
                weight="thin"
              />
              Voltar para página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
