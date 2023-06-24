import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const localPeople = JSON.parse(localStorage.getItem("people"));

  const [people, setPeople] = useState(localPeople ? localPeople : []);

  const setDefaultUsers = async () => {
    const res = await fetch("./people.json");
    const defaultPeople = await res.json();
    setPeople(defaultPeople);
  };

  !localPeople && setDefaultUsers();

  const updateLocalStorage = () => {
    localStorage.setItem("people", JSON.stringify(people));
  };

  const addPerson = (person) => {
    setPeople((prev) => [...prev, person]);
    setShowModal(false);
  };

  const deletePerson = (personId) => {
    setPeople((prev) => prev.filter((person) => person.id !== personId));
  };

  useEffect(updateLocalStorage, [people]);

  return (
    <>
      <Navbar count={people.length} />
      <PeopleList people={people} deletePerson={deletePerson} />
      <Footer />
      <button className="add-btn" onClick={() => setShowModal(true)}>
        Add Person
      </button>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <Form addPerson={addPerson} />
        </Modal>
      )}
    </>
  );
}

export default App;
