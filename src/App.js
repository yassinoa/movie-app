import './App.css';
import Navs from './components/navs/Navs';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cont from './components/cont/Cont';
import { useEffect, useState } from 'react';
import AddMovies from './components/addMovies/AddMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/details/Details';

const moviess=[ {id:Math.random(),name:"Pathaan" , img:"pathaan.jpg" ,date:"November 2020" , youtube:"https://www.youtube.com/embed/vqu4z34wENw" ,ratev:4 ,desc:"Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films.The film stars Shah Rukh Khan, Deepika Padukone, and John Abraham, alongside Dimple Kapadia and Ashutosh Rana. It is the fourth instalment in the YRF Spy Universe. It is written by Shridhar Raghavan and Abbas Tyrewala from a story by Anand, the film is about Pathaan, an exiled RAW agent, who must work with ISI agent Rubina to take down Jim, a former RAW agent-turned-traitor, who is planning to spread a deadly lab-generated virus across India."},
                {id:Math.random(),name:"Titanic", img:"titanic.jpg" ,date:"July  2020", youtube:"https://www.youtube.com/embed/cIJ8ma0kKtY" ,ratev:5,desc:"Titanic is a 1997 American epic romantic disaster film directed, written, produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of the RMS Titanic and stars Kate Winslet and Leonardo DiCaprio as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage. Also starring are Billy Zane, Kathy Bates, Frances Fisher, Gloria Stuart, Bernard Hill, Jonathan Hyde, Victor Garber, and Bill Paxton."},
                {id:Math.random(),name:"the way of water", img:"IMAXEX.jpg" ,date:"December 2020" ,youtube:"https://www.youtube.com/embed/o5F8MOz_IDw" ,ratev:3,desc:"The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron, who co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role."},
                {id:Math.random(),name:"Black Widow", img:"Black Widow.jpg" ,date:"juillet 2021",youtube:"https://www.youtube.com/embed/ybji16u608U" ,ratev:4,desc:"Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU)."}
               ];

function App() {
  const [rating, setRating] = useState(5)


   const [movi, setMovi] = useState(moviess)
const supp=(idd)=>{
  setMovi(movi.filter(el=> el.id!==idd))
}

const [inp, setInp] = useState("")
  const handleChange=(e)=>{
    setInp(e.target.value)
   
  }

  const [namef, setNamef] = useState("");
  const [imgf, setImgf] = useState("pathaan.jpg");
  const [datef, setDatef] = useState("November 2020")
  const [ratef, setRatef] = useState("5")
  const handlenamef=(e)=>{
    setNamef(e.target.value)
  }
  const handleimgf=(e)=>{
    setImgf(e.target.value)
  }
  const handledatef=(e)=>{
    setDatef(e.target.value)
  }
  const handleratef=(e)=>{
    setRatef(e.target.value)
  }
  const handleSub=(e)=>{
    e.preventDefault();
    setMovi([...movi,{id:Math.random(),name:namef, img:imgf ,date:datef ,ratev:ratef}])
  }

  
const movieSearch=movi.filter((el) =>
el.name.trim().toLowerCase().includes(inp.trim().toLowerCase()) && el.ratev <=rating
)
// console.log("acc")
// useEffect(() => {
  

//   movieSearch=movi.filter((el) =>
//  el.ratev===rating)
 

// },[rating])

// useEffect(() => {
  

//     movieSearch=movi.filter((el) =>
//    el.ratev===rating)
   
  
//   },[rating])
//   console.log(movieSearch)

  return (
    <div className="App">
      {/* <Navs searchInp={searchInp} handleChange={handleChange} /> */}
      
      
      
                                
    
    <BrowserRouter>
    <Navs  handleChange={handleChange} inp={inp} rating={rating} setRating={setRating} />
      <Routes>
        <Route path='/' element={<>
                                  <Cont movi={movi} setMovi={setMovi} supp={supp} movieSearch={movieSearch}  />
                                  <AddMovies handleSub={handleSub} namef={namef} imgf={imgf}  datef={datef} ratef={ratef} handlenamef={handlenamef} handleimgf={handleimgf} handledatef={handledatef} handleratef={handleratef} />
                                </>
                                  } />
        <Route path='/decription/:id' element={<Details movi={movi}/>}/>
    
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
