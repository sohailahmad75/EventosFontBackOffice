import React from "react";
import SingleUltimosEventos from "../UltimosEventos/SingleUltimosEventos";

const UltimosEvento = () => {
  const ultimosEventsList = [
    {
      title: "Rota da Lampreia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, culpa doloribus eveniet id, in incidunt iure mollitia nisi omnis recusandae repellat repellendus repudiandae sint soluta veritatis voluptatem. Enim, sequi!",
      date: "1 março 2020",
      image: "media/dummy-event1.png",
      category: "Maratona BTT",
    },
    {
      title: "Epic Sports",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, culpa doloribus eveniet id, in incidunt iure mollitia nisi omnis recusandae repellat repellendus repudiandae sint soluta veritatis voluptatem. Enim, sequi!",
      date: "28 março 2019",
      image: "media/dummy-event2.png",
      category: "Maratona BTT",
    },
    {
      title: "Rota da Lampreia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, culpa doloribus eveniet id, in incidunt iure mollitia nisi omnis recusandae repellat repellendus repudiandae sint soluta veritatis voluptatem. Enim, sequi!",
      date: "24 março 2019",
      image: "media/dummy-event3.png",
      category: "Maratona BTT",
    },
    {
      title: "Rota da Lampreia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, culpa doloribus eveniet id, in incidunt iure mollitia nisi omnis recusandae repellat repellendus repudiandae sint soluta veritatis voluptatem. Enim, sequi!",
      date: "24 março 2019",
      image: "media/dummy-event1.png",
      category: "Maratona BTT",
    },
  ];

  return (
    <section className="container-fluid px-3 px-md-5 mt-3 mt-md-5">
      <div className="row pt-2 pt-md-5 pb-3 d-l">
        <div className="col-12 col-md-3 text-left text-md-center mb-2 mb-md-0">
          <p className="heading-with-line-gray">Últimos eventos</p>
          <button className="btn btn-sm btn-warning font-weight-bold mt-3 mt-md-5 w-100 text-uppercase">
            Inscrever-me
          </button>
        </div>
        <div className="col-12 col-md-9 ">
          <div className="row ">
            {ultimosEventsList
              ? ultimosEventsList.map((item, i) => (
                  <div className="col-md-6 col-12 pl-0 pl-md-5" key={i}>
                    <SingleUltimosEventos
                      title={item.title}
                      description={item.description}
                      date={item.date}
                      image={item.image}
                      category={item.category}
                    />
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimosEvento;
