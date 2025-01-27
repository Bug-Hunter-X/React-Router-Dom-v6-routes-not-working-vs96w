import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;        

//Home.js
export default function Home() {
    return(
        <div>Home</div>
    );
}

//About.js
export default function About(){
    return(
        <div>About</div>
    );
}

//Contact.js
export default function Contact(){
    return(
        <div>Contact</div>
    );
}