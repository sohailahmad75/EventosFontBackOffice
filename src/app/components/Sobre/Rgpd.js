import React from "react";

const Rgpd = () => {
  return (
    <section
      className="container-fluid py-3 py-md-5 mt-3 mt-md-5"
      style={{
        background: `url(${"media/rgpdImg.svg"})`,
        backgroundSize: "450px 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
      }}
    >
      <div className="row">
        <div className="col-12 col-md-6 offset-0 offset-md-3 mt-5 mb-3">
          <h1 className="display-1 pl-0 pl-md-2">RGPD</h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-6 offset-md-3 ">
          <p>
            De acordo com o Regulamento geral de proteção de dados (GDPR) (UE)
            2016/679, temos o dever legal de proteger todas as informações que
            coletamos de você. As informações contidas neste e-mail e quaisquer
            anexos podem ser privilegiados ou confidenciais e destinados ao uso
            exclusivo do destinatário original. Se você recebeu este e-mail por
            engano, avise o remetente imediatamente e exclua o e-mail, incluindo
            o esvaziamento da caixa de e-mail excluída.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rgpd;
