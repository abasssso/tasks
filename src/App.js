import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

function App() {
  const users = [
    {
      name: "Abba",
      lastN: "Asanov",
      age: 23,
      id: 1,
    },
    {
      name: "Maks",
      lastN: "Danayev",
      age: 45,
      id: 2,
    },
    {
      name: "Ermek",
      lastN: "Bolotov",
      age: 32,
      id: 3,
    },
    {
      name: "Dzhalil",
      lastN: "Ilimov",
      age: 10,
      id: 4,
    },
  ];
  return (
    <div style={{ margin: "20px 100px" }}>
      <Header />
      <h1>WORKERS</h1>
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
