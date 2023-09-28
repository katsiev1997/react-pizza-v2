import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
  type pizzaObj = {
    imageUrl: string;
    title: string;
    price: number;
  };
  const [pizza, setPizza] = React.useState<pizzaObj>();
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          "https://65060337ef808d3c66f0be25.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Произошла ошибка");
        navigate("/");
        console.log(error);
      }
    };
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>"Загрузка ..."</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        debitis amet voluptatem explicabo minus eos eligendi porro ipsum dolore
        dicta!
      </p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
