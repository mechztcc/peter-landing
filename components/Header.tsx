import { vina } from "@/pages/_app";
import CardAdvantage from "./CardAdvantages";

export default function Header() {
  const cards = [
    {
      title: "Professor",
      text: "uma plataforma de estudos gameficada combina o poder da aprendizagem com a diversão dos jogos para criar uma experiência envolvente e eficaz de aprendizado. Imagine uma plataforma onde o ato de estudar se transforma em uma jornada emocionante, repleta de desafios, recompensas e progressão.",
      type: 1,
    },
    {
      title: "Aluno",
      text: "Ao adentrar nessa plataforma, os estudantes são imersos em um ambiente interativo, com elementos de jogos, como missões, níveis, pontos, rankings e conquistas. Cada matéria ou tópico se converte em desafios específicos, que precisam ser superados para avançar.",
      type: 2,
    },
    {
      title: "Escola",
      text: "A gamificação torna o estudo mais atraente ao transformar atividades aparentemente monótonas em objetivos alcançáveis e até mesmo divertidos. A sensação de progresso, a competição saudável com colegas e a obtenção de recompensas incentivam o engajamento contínuo.",
      type: 3,
    },
  ];

  function renderCards() {
    return cards.map((card) => {
      return (
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <CardAdvantage {...card} key={card.text} />
        </div>
      );
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 my-10 p-5 md:p-10">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-6xl font-semibold">
            Bem vindo ao{" "}
            <b className={`${vina.className} text-purple-400`}>PETER.</b>
            <b className={`${vina.className} text-blue-400`}>SPACE</b>
          </h1>

          <span className="text-2xl mt-3">
            Sua plataforma preferida de estudos, aqui você encontra uma forma
            divertida de estudar, com varios sistemas de recompensas.
          </span>

          <span className="text-2xl">
            Seja Professor, Aluno, ou Escola, temos planos que cabem no seu
            bolso.
          </span>

          <button className="bg-blue-400 hover:shadow-blue-300 shadow-2xl p-3 rounded-lg text-white font-semibold hover:bg-blue-500 mt-10">
            CONHECER PLANOS
          </button>
        </div>

        <div className="flex justify-center items-start">
          <img className="w-full" src="/image-home.png" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-5 md:mx-20">{renderCards()}</div>
    </>
  );
}
