import React from 'react'

export default function Rodape() {
  return (
    <footer className="bg-[#569fd4] text-white h-250 flex justify-around items-center py-3">
    {/* Primeira Div */}
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat text-2xl font-semibold mb-4">Empresa</h2>
      <ul className="text-base font-normal font-montserrat text-center">
        <li>Sobre nós</li>
        <li>Nossos serviços</li>
      </ul>
    </div>

    {/* Segunda Div */}
    <div className="flex flex-col items-center">
      <h3 className="font-montserrat text-2xl font-semibold mb-4">Tecnologias</h3>
      <ul className=" text-base font-normal font-montserrat text-center">
        <li>NEXT.JS</li>
        <li>REACT</li>
        <li>TAILWIND CSS</li>
      </ul>
    </div>

    {/* Terceira Div */}
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat text-2xl font-semibold mb-4">Suporte</h2>
      <ul className=" text-base font-normal font-montserrat text-center">
        <li>FeedBack</li>
      </ul>
    </div>
  </footer>
  )
}
