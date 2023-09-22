interface IAcessos {
  name: string
  type: string
  hour: string
}

const acessos: IAcessos[] = [
  {
    name: 'Matheus Spurio',
    type: 'Entrada',
    hour: '13:30',
  },
  {
    name: 'Carlos Henrique',
    type: 'Saída',
    hour: '16:32',
  },
  {
    name: 'Maria Eduarda',
    type: 'Entrada',
    hour: '21:16',
  },
  {
    name: 'Matheus Spurio',
    type: 'Saída',
    hour: '15:21',
  },
  {
    name: 'Carlos Henrique',
    type: 'Entrada',
    hour: '07:43',
  },
  {
    name: 'Maria Eduarda',
    type: 'Saída',
    hour: '23:07',
  },
]

export default function AcessoCard() {
  return (
    <div className="grid grid-cols-3 w-full p-1">
      {acessos.map((acessos, index) => (
        <>
          <div key={index} className="flex justify-center items-center mb-3">
            <p>{acessos.name}</p>
          </div>
          <div className="flex justify-center items-center mb-3">
            <p>{acessos.type}</p>
          </div>
          <div className="flex justify-center items-center mb-3">
            <p>{acessos.hour}</p>
          </div>
        </>
      ))}
    </div>
  )
}
