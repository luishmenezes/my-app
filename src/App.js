import ImageTextComponent from './ImageTextComponent';
import './App.css';

function App() {
  return (
    <div className="imagens" width="400px">
      <ImageTextComponent
      ImageSrc="https://www.freecodecamp.org/portuguese/news/content/images/size/w2000/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png"
      AltText="Imagem 1"
      text="Imagem 1" />
      <hr/>
      <ImageTextComponent
      ImageSrc="https://miro.medium.com/v2/resize:fit:828/format:webp/1*vHHBwcUFUaHWXntSnqKdCA.png"
      AltText="Imagem 2"
      text="Imagem 2" />  
      <hr/>   
      <ImageTextComponent
      ImageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png"
      AltText="Imagem 3"
      text="Imagem 3" />
      
      </div>
      
      
  );
}

export default App;
