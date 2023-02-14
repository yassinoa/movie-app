import { ADD_MV, DELETE_MV, SETINP, SETRATE } from "./actionType";

const init={movie:[ {id:Math.random(),name:"Pathaan" , img:"pathaan.jpg" ,date:"November 2020" , youtube:"https://www.youtube.com/embed/vqu4z34wENw" ,ratev:4 ,desc:"Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films.The film stars Shah Rukh Khan, Deepika Padukone, and John Abraham, alongside Dimple Kapadia and Ashutosh Rana. It is the fourth instalment in the YRF Spy Universe. It is written by Shridhar Raghavan and Abbas Tyrewala from a story by Anand, the film is about Pathaan, an exiled RAW agent, who must work with ISI agent Rubina to take down Jim, a former RAW agent-turned-traitor, who is planning to spread a deadly lab-generated virus across India."},
{id:Math.random(),name:"Titanic", img:"titanic.jpg" ,date:"July  2020", youtube:"https://www.youtube.com/embed/cIJ8ma0kKtY" ,ratev:5,desc:"Titanic is a 1997 American epic romantic disaster film directed, written, produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of the RMS Titanic and stars Kate Winslet and Leonardo DiCaprio as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage. Also starring are Billy Zane, Kathy Bates, Frances Fisher, Gloria Stuart, Bernard Hill, Jonathan Hyde, Victor Garber, and Bill Paxton."},
{id:Math.random(),name:"the way of water", img:"IMAXEX.jpg" ,date:"December 2020" ,youtube:"https://www.youtube.com/embed/o5F8MOz_IDw" ,ratev:3,desc:"The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron, who co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role."},
{id:Math.random(),name:"Black Widow", img:"Black Widow.jpg" ,date:"juillet 2021",youtube:"https://www.youtube.com/embed/ybji16u608U" ,ratev:4,desc:"Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU)."}
],rate:5,inp:""
}
export const reducer=(state=init,{type,payload})=>{


  switch (type) {
    case SETRATE:return{...state,rate:payload}
    case DELETE_MV:return{...state ,movie:state.movie.filter(el=>el.id!==payload)}
    case SETINP:return{...state,inp:payload}
    case ADD_MV:return{...state,movie:[...state.movie ,payload]}
    default:return state
      
  }
}