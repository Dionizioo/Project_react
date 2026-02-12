import instagramIcon from './assets/instagram.svg';

export default function App() {
  return (
    <div className="app">
      
      <header className="header">
        <h1 className="logo">I am what you need</h1>
        <p className="subtitle">Your subtitle goes here</p>
        {/* Icones de rede social*/}
        <div className="social_media">
          <a href="https://www.instagram.com/">
            <img src={instagramIcon} alt="Instagram" /> 
          </a>
        </div>
      </header>

      <main className="main">
        <section className="content">

          <div className="text-area">
            <h2>About the video</h2>
            <p>
              Eurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico Eurustico
              Eurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico EurusticoEurustico Eurustico
              Eurustico Eurustico Eurustico Eurustico Eurustico Eurustico
              
            </p>
          </div>

          <div className="video-area">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/TkwZ2uQu2hE?list=RDJtH68PJIQLE&index=18"
                title="Adisson Rae - Fame is a Gun"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </section>
      </main>

    </div>
  );
}
