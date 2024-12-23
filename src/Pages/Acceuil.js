import { createContext, useState } from 'react';
import './Acceuil.css';
import { ChangeLang } from './Lang';
export const FirstContext = createContext();
export const Langue = createContext() ;

export default function Acceuil({ children }) {
  const [IsDark, setIsDark] = useState(false);
  const [Lng,setLangue] =useState("En")
  const DataL={
    Fr : {
      Title :"Bonjour, je m'appelle Karim " ,
      Name : "Je suis développeur full-stack spécialisé en HTML, CSS, JavaScript et React pour le développement front-end. J'ai également une connaissance approfondie de React et de l'expérience avec les bases de données telles que MySQL et SQL, ainsi qu'avec des technologies back-end comme PHP. "
    },
    En : {
      Title :"Hello, My name is Karim" ,
      Name : "I am a full-stack developer skilled in HTML, CSS, JavaScript, and React for front-end development. I also have extensive knowledge of React and experience working with databases such as MySQL and SQL, as well as back-end technologies including PHP. "
    },
    Es : {
      Title :"Hola, me llamo Karim" ,
      Name : "Soy un desarrollador full-stack con habilidades en HTML, CSS, JavaScript y React para el desarrollo front-end. También tengo un conocimiento avanzado de React y experiencia trabajando con bases de datos como MySQL y SQL, y tecnologías back-end como PHP. "
    }
  }

  const Theme = () => {
    setIsDark(!IsDark);
  };

  return (
    <Langue.Provider value={{Lng,setLangue}}>
      
      <div className="portfolio-container">
      <div className={`content-wrapper ${IsDark ? "light-mode" : "dark-mode"}`}>
        {/* Theme toggle moved to header section */}
        <header className="portfolio-header">
          <button 
            onClick={Theme} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {!IsDark ? (
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/pulsar-gradient/48/do-not-disturb-2.png"
                alt="dark mode"
                className="theme-icon"
              />
            ) : (
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png"
                alt="light mode"
                className="theme-icon"
              />
            )}
          </button>
        </header>

        <nav className="language-nav">
          <ChangeLang />
        </nav>

        <div className="hero-section">
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                className="profile-image"
              />
              <div className="profile-image-overlay"></div>
            </div>
            <div className="profile-info">
              <h1 className="title">{DataL[Lng].Title}</h1>
              <h2 className="name">
                {DataL[Lng].Name}
                <span className="snowflake">❄️</span>
              </h2>
            </div>
          </div>
        </div>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
    </Langue.Provider>
  );
}
