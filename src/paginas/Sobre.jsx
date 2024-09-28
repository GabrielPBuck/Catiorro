// eslint-disable-next-line no-unused-vars
import React from "react";
import "../assets/css/components/cartao.css";
import "../assets/css/base/sobre.css";
import caosobre from "../assets/img/cao-sobre.png";

const Sobre = () => {
  return (
    <main>
      <section className="container flex flex--centro">
        <article className="cartao cartaoflex">
        <div className="cartaoIMG">
            <h2 className="titulo-sobre">Sobre Meu amigo cão</h2>
          <img src={caosobre} alt="" className="caosobreIMG" />
          </div>
            <div className="cartao-text cartaop">
          <p>
            Na &ldquo;Meu Amigo Cão&ldquo;, o nosso sucesso como organização é impulsionado
            pelo carinho e dedicação com que cuidamos dos nossos animais. Cada
            um dos nossos colaboradores compartilha o mesmo amor e respeito
            pelos nossos amigos de quatro patas, garantindo que eles recebam o
            melhor atendimento e cuidados possíveis.{" "}
          </p>
          <p>
            Desde o momento em que um novo animalzinho chega até nós, seja um
            resgate ou um hóspede temporário, nossa equipe está comprometida em
            proporcionar um ambiente seguro, acolhedor e repleto de afeto.
            Sabemos que cada animal é único, com suas próprias necessidades e
            personalidades, e trabalhamos incansavelmente para oferecer um
            tratamento personalizado que vá além das expectativas.
          </p>
          <p>
            {" "}
            Acreditamos que um bom atendimento não se limita apenas à
            alimentação e ao espaço físico. Nossos animais recebem
            acompanhamento veterinário regular, atividades de socialização,
            brincadeiras diárias e, acima de tudo, muito amor. Tudo isso reflete
            nosso compromisso com o bem-estar animal e nossa missão de promover
            uma convivência harmoniosa entre pessoas e pets.
          </p>
          <p>
            Além disso, estamos constantemente engajados em programas de adoção
            responsável, conscientização sobre a posse consciente e ações
            comunitárias para ajudar animais em situação de vulnerabilidade.
            Sabemos que, ao cuidar dos nossos animais com respeito e dedicação,
            estamos construindo um mundo melhor, onde o amor e a compaixão
            prevalecem.
          </p>
          <p>
            {" "}
            Em &ldquo;Meu Amigo Cão&ldquo;, cada gesto de carinho, cada rabinho abanando e
            cada olhar de gratidão nos lembra que estamos no caminho certo. E é
            essa conexão genuína que nos motiva a continuar trabalhando com
            paixão e empenho para transformar a vida dos animais e das famílias
            que têm a felicidade de acolhê-los.
          </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Sobre;
