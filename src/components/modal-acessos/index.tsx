import { X } from '@phosphor-icons/react'

export default function ModalAcesso({ isVisible, onClose }: any) {
  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="md:w-2/5 lg:w-1/4 bg-zinc-300 rounded py-4 px-4">
        <div className="w-full flex justify-end mb-4">
          <button onClick={() => onClose()}>
            <X size={20} className="text-red-600" />
          </button>
        </div>
        <p className="text-center mb-6 text-xl">Liberação de acessos</p>
        <div className="flex flex-col">
          <label className="mb-2">Selecione o atleta:</label>
          <select name="atletas" className="w-40 rounded mb-6 p-1">
            <option value="Matheus Spurio">Matheus Spurio</option>
            <option value="Maria Eduarda">Maria Eduarda</option>
            <option value="Carlos Henrique">Carlos Henrique</option>
          </select>
          <label className="mb-2">Selecione o tipo de liberação:</label>
          <select name="tipo" className="w-40 rounded p-1">
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
        <div className="w-full flex justify-around mt-8">
          <button
            onClick={() => onClose()}
            className="p-2 bg-red-600 rounded text-white"
          >
            Cancelar
          </button>
          <button className="py-2 px-4 bg-green-600 rounded text-white">
            Liberar
          </button>
        </div>
      </div>
    </div>
  )
}
