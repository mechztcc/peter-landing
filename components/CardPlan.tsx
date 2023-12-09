import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name: string;
  type: number;
}
export default function CardPlan({ name, type }: Props) {
  return (
    <div className="bg-white p-8 hover:shadow-2xl  rounded-lg mt-20">
      {type == 1 && (
        <FontAwesomeIcon
          icon={faGamepad}
          className="p-3 bg-blue-400 text-white rounded-lg shadow-lg shadow-blue-200"
        />
      )}

      {type == 2 && (
        <FontAwesomeIcon
          icon={faGamepad}
          className="p-3 bg-red-400 text-white rounded-lg shadow-lg shadow-red-200"
        />
      )}
      <h1 className="text-2xl font-semibold mt-3 mb-3">{name}</h1>
      <span className="mt-3">
        Este plano foi cuidadosamente elaborado para atender às suas
        necessidades, oferecendo controle total sobre sua assinatura. Ao optar
        por este plano mensal, você estará no comando, decidindo a cada mês se
        deseja continuar a desfrutar dos nossos serviços/produtos exclusivos.
      </span>

      <div className="flex items-center mt-5">
        <h1 className="text-6xl mt-5 font-semibold">
          {type == 1 ? "R$ 14,99" : "R$ 99,99"}
        </h1>
        <span className="mx-3">{type == 1 ? "/Mês" : "/Ano"}</span>
      </div>

      <hr className="my-5" />

      <div className="flex items-center">
        <FontAwesomeIcon icon={faCheckCircle} className="p-3 text-blue-400" />
        <span>
          <b>Acesso Ilimitado:</b> Explore toda nossa plataforma sem nenhuma
          restrição.
        </span>
      </div>

      <div className="flex items-center mt-3">
        <FontAwesomeIcon icon={faCheckCircle} className="p-3 text-blue-400" />
        <span>
          <b>Cancelamento Simples:</b> Se por qualquer motivo você decidir
          encerrar a assinatura, basta cancelar antes do próximo ciclo. Sem
          complicações.
        </span>
      </div>

      {type == 1 && (
        <button className="bg-blue-400 hover:shadow-blue-200 hover:shadow-lg rounded-lg p-3 font-semibold mt-10 w-full text-white">
          ASSINAR PLANO
        </button>
      )}

      {type == 2 && (
        <button className="bg-red-400 hover:shadow-red-200 hover:shadow-lg rounded-lg p-3 font-semibold mt-10 w-full text-white">
          ASSINAR PLANO
        </button>
      )}
    </div>
  );
}
