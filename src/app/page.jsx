import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">

      <div className='flex space-x-7'>
        <div className="w-80 h-92 relative">
          <div className="w-full h-full absolute left-0 top-0 shadow-lg rounded-lg" />
          <div className="w-full h-full flex flex-col justify-center items-center relative z-10 px-2 py-3">
            <Image src="/virus.jpg" alt="Virus molécula" width={427} height={240} className="rounded-lg" />
            <div className="text-black text-lg font-normal font-montserrat mt-4">Conheça nosso glossário de saúde</div>
            <div className="text-center text-black text-xs font-normal font-montserrat mt-2">
              Desvende o mundo da saúde em nosso glossário intuitivo. Busque informações sobre doenças, sintomas e prevenção de forma fácil e envolvente. Uma ferramenta educativa que simplifica o conhecimento, capacitando você para decisões informadas sobre sua saúde. Comece sua jornada de autodescoberta e cuidado preventivo agora!
            </div>
          </div>
        </div>
        <div className="w-80 h-90 relative">
          <div className="w-full h-full absolute left-0 top-0 shadow-lg rounded-lg" />
          <div className="w-full h-full flex flex-col justify-center relative z-10 px-2 pb-5">
            <Image src="/quizlog.png" alt="Virus molécula" width={427} height={240} className="rounded-lg" />
            <div className="text-black text-lg font-normal font-montserrat mt-2">Participe do Nosso Quiz Interativo!</div>
            <div className="text-center text-black text-xs font-normal font-montserrat mt-2">
            Explore curiosidades sobre saúde de forma dinâmica e descontraída. Participe de quizzes envolventes e aprofunde seus conhecimentos de maneira divertida. Transforme a aprendizagem sobre bem-estar em uma experiência interativa e educativa!
            </div>
          </div>
        </div>
      </div>

    <div className='column justify-center'>
      <div className="font-montserrat text-2xl font-semibold italic pt-9 pb-3 text-black">
      Explore Nosso Glossário de Saúde: Descubra, Compreenda e Previna!
      </div>

      <Image src="/doenca.png" alt="Virus molécular" width={1280} height={720} className="rounded-lg" />

      <p className="text-black text-base font-normal font-montserrat mb-4 mt-3">
        Bem-vindo ao nosso Glossário de Saúde, uma ferramenta intuitiva e abrangente projetada para fornecer informações valiosas sobre diversas condições de saúde. Neste recurso, buscamos oferecer a você uma fonte confiável para entender melhor doenças, seus sintomas e maneiras eficazes de prevenção.
      </p>
      {/* Recursos Destacados */}
      <p className="text-black text-base font-semibold font-montserrat mb-2">Recursos Destacados:</p>
      <ul className="list-disc ml-8 mb-4">
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Busca Intuitiva: Utilize nossa barra de pesquisa para explorar de maneira rápida e fácil as informações sobre as condições que mais lhe interessam. Digite o nome da doença ou um termo relacionado, e deixe nosso glossário guiá-lo.
          </span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Visual Amigável: Inspirado na simplicidade de um dicionário padrão, nosso glossário apresenta uma interface visual intuitiva. As informações são apresentadas de forma organizada, facilitando a compreensão, mesmo para aqueles que estão dando os primeiros passos no mundo da saúde.
          </span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Detalhes Abrangentes: Descubra detalhes abrangentes sobre cada condição, desde sintomas comuns até medidas preventivas recomendadas. Queremos capacitar você com o conhecimento necessário para tomar decisões informadas sobre sua saúde.
          </span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Educação Contínua: Acreditamos que a educação é a chave para a promoção da saúde. Explore nosso glossário regularmente para atualizações e novas adições. Estamos comprometidos em fornecer informações precisas e atualizadas para apoiar seu bem-estar.
          </span>
        </li>
      </ul>
      <p className="text-black text-base font-semibold font-montserrat mb-2">Como Usar:</p>
      <ul className="list-disc ml-8 mb-4">
        <li className="mb-2">Digite o termo desejado na barra de pesquisa.</li>
        <li className="mb-2">Explore as informações detalhadas apresentadas de maneira clara e concisa.</li>
        <li className="mb-2">Compartilhe o conhecimento adquirido para promover a conscientização e o autocuidado.</li>
        <li>Navegue pelo nosso Glossário de Saúde e embarque em uma jornada de descoberta e cuidado preventivo. Estamos aqui para ajudar você a entender, enfrentar e prevenir condições de saúde de maneira acessível e informativa.</li>
      </ul>
    </div>

    <div className='column justify-center'>
      <div className="font-montserrat text-2xl font-semibold italic pt-9 pb-3 text-black">
      Desafie Seu Conhecimento com Nosso Quiz de Saúde!
      </div>

      <Image src="/quizbanner.png" alt="Banner Quiz" width={1280} height={720} className="rounded-lg" />
    </div>

    <div className="flex flex-col items-center mt-3">
      <p className="text-black text-base font-normal font-montserrat mb-4">
      Bem-vindo ao Nosso Quiz Interativo de Saúde! Uma ferramenta dinâmica e envolvente projetada para tornar a aprendizagem sobre saúde uma experiência divertida e informativa. Aqui estão os destaques:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Quizzes Temáticos: Participe de quizzes temáticos sobre diversas condições de saúde, testando seu conhecimento de maneira lúdica.
          </span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Curiosidades e Informações: Descubra curiosidades fascinantes e informações úteis sobre doenças do nosso glossário, mantendo-se atualizado de forma descontraída.
          </span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Interface Intuitiva: Explore uma interface amigável e intuitiva, projetada para tornar a participação fácil e agradável.
          </span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Resultados Detalhados: Receba resultados detalhados após cada quiz, proporcionando insights sobre seu conhecimento e áreas para aprimoramento.
          </span>
        </li>
        <li className="mb-2">
          <span className="font-semibold text-2xl">*</span>
          <span className="text-base font-normal font-montserrat ml-2">
            Educação Divertida: Acreditamos que aprender sobre saúde pode ser divertido. Desafie-se, compartilhe seus resultados e aprenda enquanto se diverte.
          </span>
        </li>
      </ul>
      <p className="text-black text-base font-normal font-montserrat mb-4">
        Faça login agora mesmo e junte-se ao Nosso Quiz Interativo para mergulhar em uma jornada de aprendizado divertida e informativa sobre sua saúde!
      </p>
    </div>

    </main>
  )
}
