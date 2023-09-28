import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: any) => state.filter
  );
  const { items, status } = useSelector((state: any) => state.pizza);
  const sortType = sort.sortProperty;

  const dispatch = useDispatch();

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  React.useEffect(() => {
    const getPizzas = async () => {
      const sortBy = sortType.replace("-", "");
      const order = sortType.includes("-") ? "asc" : "desc";
      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const search = searchValue ? `&search=${searchValue}` : "";

      dispatch(
        // @ts-ignore
        fetchPizzas({
          sortBy,
          order,
          category,
          search,
          currentPage,
        })
      );

      window.scrollTo(0, 0);
    };
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage, dispatch]);

  const pizzas = items.map((obj: any) => (

      <PizzaBlock key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div>
          <h2 className="error">Произошла ошибка</h2>
          <p className="error-text">
            К сожалению, возникла ошибка при загрузке страницы. Пожалуйста,
            попробуйте перезагрузить страницу.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;