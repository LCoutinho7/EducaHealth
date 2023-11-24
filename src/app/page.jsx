import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">

      <div className='flex space-x-7'>
        <div className="w-80 h-92 relative">
          <div className="w-full h-full absolute left-0 top-0 shadow-lg rounded-lg" />
          <div className="w-full h-full flex flex-col justify-center items-center relative z-10 px-2">
            <Image src="/virus.jpg" alt="Virus molécula" width={427} height={240} className="rounded-lg" />
            <div className="text-black text-lg font-normal font-montserrat mt-4">Conheça nosso glossário de saúde</div>
            <div className="text-center text-black text-xs font-normal font-montserrat mt-2">
              Desvende o mundo da saúde em nosso glossário intuitivo. Busque informações sobre doenças, sintomas e prevenção de forma fácil e envolvente. Uma ferramenta educativa que simplifica o conhecimento, capacitando você para decisões informadas sobre sua saúde. Comece sua jornada de autodescoberta e cuidado preventivo agora!
            </div>
          </div>
        </div>
        <div className="w-80 h-90 relative">
          <div className="w-full h-full absolute left-0 top-0 shadow-lg rounded-lg" />
          <div className="w-full h-full flex flex-col justify-center relative z-10 px-2">
            <Image src="/quizlog.png" alt="Virus molécula" width={427} height={240} className="rounded-lg" />
            <div className="text-black text-lg font-normal font-montserrat mt-2">Participe do Nosso Quiz Interativo!</div>
            <div className="text-center text-black text-xs font-normal font-montserrat mt-2">
            Explore curiosidades sobre saúde de forma dinâmica e descontraída. Participe de quizzes envolventes e aprofunde seus conhecimentos de maneira divertida. Transforme a aprendizagem sobre bem-estar em uma experiência interativa e educativa!
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="w-96 h-96 relative">
        <img className="w-96 h-96 left-0 top-[58px] absolute" src="https://via.placeholder.com/1280x720" />
        <div className="w-96 h-11 left-0 top-0 absolute text-black text-3xl font-semibold font-['Montserrat']">Explore Nosso Glossário de Saúde: Descubra, Compreenda e Previna!</div>
        <div className="w-96 h-96 left-0 top-[808px] absolute"><span style="text-black text-xl font-normal font-['Montserrat']">Bem-vindo ao nosso Glossário de Saúde, uma ferramenta intuitiva e abrangente projetada para fornecer informações valiosas sobre diversas condições de saúde. Neste recurso, buscamos oferecer a você uma fonte confiável para entender melhor doenças, seus sintomas e maneiras eficazes de prevenção.<br/><br/></span><span style="text-black text-xl font-semibold font-['Montserrat']">Recursos Destacados:<br/><br/></span><span style="text-black text-xl font-normal font-['Montserrat']">    </span><span style="text-black text-xl font-semibold font-['Montserrat']">Busca Intuitiva:<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">Utilize nossa barra de pesquisa para explorar de maneira rápida e fácil as informações sobre as condições que mais lhe interessam. Digite o nome da doença ou um termo relacionado, e deixe nosso glossário guiá-lo.<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">    </span><span style="text-black text-xl font-semibold font-['Montserrat']">Visual Amigável:<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">Inspirado na simplicidade de um dicionário padrão, nosso glossário apresenta uma interface visual intuitiva. As informações são apresentadas de forma organizada, facilitando a compreensão, mesmo para aqueles que estão dando os primeiros passos no mundo da saúde.<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">    </span><span style="text-black text-xl font-semibold font-['Montserrat']">Detalhes Abrangentes:<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">Descubra detalhes abrangentes sobre cada condição, desde sintomas comuns até medidas preventivas recomendadas. Queremos capacitar você com o conhecimento necessário para tomar decisões informadas sobre sua saúde.<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">   </span><span style="text-black text-xl font-semibold font-['Montserrat']"> Educação Contínua:<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">Acreditamos que a educação é a chave para a promoção da saúde. Explore nosso glossário regularmente para atualizações e novas adições. Estamos comprometidos em fornecer informações precisas e atualizadas para apoiar seu bem-estar.<br/></span><span style="text-black text-xl font-normal font-['Montserrat']"><br/></span><span style="text-black text-xl font-semibold font-['Montserrat']">Como Usar:<br/><br/></span><span style="text-black text-xl font-normal font-['Montserrat']">Digite o termo desejado na barra de pesquisa.<br/>Explore as informações detalhadas apresentadas de maneira clara e concisa.<br/>Compartilhe o conhecimento adquirido para promover a conscientização e o autocuidado.<br/></span><span style="text-black text-xl font-normal font-['Montserrat']">Navegue pelo nosso Glossário de Saúde e embarque em uma jornada de descoberta e cuidado preventivo. Estamos aqui para ajudar você a entender, enfrentar e prevenir condições de saúde de maneira acessível e informativa.<br/></span></div>
        </div>
      </div>


    </main>
  )
}
