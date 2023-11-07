import React from "react";
import { Menu } from './componetes/menu'
import { Postagem } from "./componetes/postagem";
import { Header } from "./componetes/header"
import {Footer} from "./componetes/footer"
function App() {
    return (
      <div className="teste">
          <div className=" box1"><Header /></div> 
           
          <div className="box2">
          <div className="box3"><Menu/></div>
          <main className="pai">
            <Postagem
              capaurl="https://i.pinimg.com/originals/25/79/6b/25796b0d4bc2fa3dda07947834a18436.jpg"
              musica="Shape of You"
              subtitulo="Ed Sheeran (Deluxe)"
            />
            <Postagem
              capaurl="https://i.pinimg.com/originals/5f/ae/22/5fae22ab60a8ef9d238373b92517ed7b.jpg"
              musica="Believer"
              subtitulo="Imagine Dragons (Evolve)"
            />
            <Postagem
              capaurl="https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
              musica="She Knows"
              subtitulo="NE-YO Non-fiction (Deluxe)"
            />
              <Postagem
              capaurl="https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
              musica="She Knows"
              subtitulo="NE-YO Non-fiction (Deluxe)"
            />
              <Postagem
              capaurl="https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
              musica="She Knows"
              subtitulo="NE-YO Non-fiction (Deluxe)"
            />
            
          </main>
            </div>
            <div className="box4"><Footer /></div>
      </div>
    );
  }
  
  export default App;