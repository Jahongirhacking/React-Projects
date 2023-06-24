import { useRef, useState } from "react";
import style from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function Form({ addPerson }) {
  const url = useRef();
  const firstname = useRef();
  const lastname = useRef();
  const age = useRef();
  const from = useRef();
  const job = useRef();
  const [gender, setGender] = useState({ male: false, female: false });

  const checkForm = () => {
    const arr = [url, firstname, lastname, age, from, job];
    for (let elem of arr) if (elem.current.value === "") return false;
    if (!gender.male && !gender.female) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      const person = {
        imageUrl: url.current.value,
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        age: age.current.value,
        from: from.current.value,
        job: job.current.value,
        gender: gender.male ? "male" : "female",
        id: uuidv4(),
      };
      addPerson(person);
    } else {
      alert("Invalid Input");
    }
  };
  const handleGender = (gender) => {
    gender === "male"
      ? setGender({ male: true, female: false })
      : setGender({ male: false, female: true });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        Image URL: <input ref={url} type="text" placeholder="type url" />
      </label>
      <label>
        Firstname:{" "}
        <input ref={firstname} type="text" placeholder="type firstname" />
      </label>
      <label>
        Lastname:{" "}
        <input ref={lastname} type="text" placeholder="type lastname" />
      </label>
      <label>
        Age: <input ref={age} type="number" placeholder="type age" min={1} />
      </label>
      <label>
        From: <input ref={from} type="text" placeholder="location.." />
      </label>
      <label>
        Job: <input ref={job} type="text" placeholder="type job" />
      </label>
      <label>
        Gender:
        <label className={style["gender-label"]}>
          Male
          <input
            type="radio"
            checked={gender.male}
            onChange={() => handleGender("male")}
          />
        </label>
        <label className={style["gender-label"]}>
          Female
          <input
            type="radio"
            checked={gender.female}
            onChange={() => handleGender("female")}
          />
        </label>
      </label>
      <button className={`${style["submit-btn"]} btn`}>Submit</button>
    </form>
  );
}

Form.propTypes = {
  addPerson: PropTypes.func,
};
export default Form;
