import PropTypes from "prop-types";
import style from "./PeopleList.module.css";

const PeopleList = ({ people, deletePerson }) => (
  <div className={style["card-container"]}>
    {people.length === 0 && <h1>No Users</h1>}
    {people.map((person) => {
      const image = (
        <div
          className={style["card__img"]}
          style={{ backgroundImage: `url(${person.imageUrl})` }}
        ></div>
      );
      return (
        <div className={style["card"]} key={person.id}>
          {image}
          <p className={style["card__info"]}>
            {person.firstname} {person.lastname}, {person.age}
          </p>
          <p className={style["card__from"]}>From: {person.from}</p>
          <p className={style["card__job"]}>Job: {person.job}</p>
          <p className={style["card__gender"]}>Gender: {person.gender}</p>
          <button
            className={`${style["card__delete-btn"]} btn`}
            onClick={() => deletePerson(person.id)}
          >
            Delete
          </button>
        </div>
      );
    })}
  </div>
);

PeopleList.propTypes = {
  people: PropTypes.array,
  deletePerson: PropTypes.func,
};

export default PeopleList;
