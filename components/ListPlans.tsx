import CardPlan from "./CardPlan";

export default function ListPlans() {
  return (
    <>
      <div className="p-5 flex flex-col mx-10 mt-20 text-center">
        <h1 className="text-6xl font-semibold">
          Escolha o plano certo para você
        </h1>
        <span className="text-2xl mt-5">
          Escolha o melhor plano que cabe no seu bolso.
        </span>
        <span className="text-2xl">
          Precisa de um plano diferente? Entre em{" "}
          <b className="cursor-pointer text-blue-400">Contato</b>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mx-10 md:mx-20 gap-5">
        <div className="col-span-1 md:col-span-3 lg:col-span-2 lg:col-start-2">
          <CardPlan name="Assinatura Mensal" type={1}/>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <CardPlan  name="Assinatura Anual" type={2}/>
        </div>
      </div>
    </>
  );
}
