import React,{useEffect,useState} from "react";
import {createRoot} from "react-dom/client";
import axios from "axios";
import "./styles.css";

const API=import.meta.env.VITE_API_URL||"http://127.0.0.1:8000/api";
const people=["Nethmi Designs","Ravin Codes","Sahan Space","Kavya Math","Ariyan Builds"];
const communities=["Coding","Space & Astronomy","Game Development","Mathematics","Design","Science"];

function App(){
 const [tab,setTab]=useState("Home"),[posts,setPosts]=useState([]),[text,setText]=useState(""),[comments,setComments]=useState({}),[notice,setNotice]=useState("");
 const load=()=>axios.get(API+"/feed/").then(r=>setPosts(r.data)).catch(()=>setPosts([]));
 useEffect(()=>{load()},[]);
 const like=async id=>{try{await axios.post(API+"/posts/"+id+"/like/");load()}catch{setNotice("Start the Django server to enable live actions.")}};
 const publish=async()=>{if(!text.trim())return;try{await axios.post(API+"/posts/",{caption:text});setText("");load()}catch{setNotice("Django API is not running.")}};
 return <div className="app"><aside><div className="logo">VEXORA</div>{["Home","Discover","Create","Reels","Messages","Profile","Communities","Notifications"].map(x=><button className={tab===x?"active":""} onClick={()=>setTab(x)} key={x}>{x}</button>)}</aside><main><header><b>{tab}</b><span>VEXORA · Student Social Network</span></header>{notice&&<div className="notice">{notice}</div>}{tab==="Home"&&<Home posts={posts} like={like} text={text} setText={setText} publish={publish}/>} {tab==="Discover"&&<Discover/>}{tab==="Create"&&<Create text={text} setText={setText} publish={publish}/>} {tab==="Reels"&&<Reels/>}{tab==="Messages"&&<Messages/>}{tab==="Profile"&&<Profile posts={posts}/>} {tab==="Communities"&&<Communities/>}{tab==="Notifications"&&<Notifications/>}</main></div>
}
function Home({posts,like,text,setText,publish}){return <section><div className="stories">{["You","Ariyan","VEXORA","Kavya","Ravin","Nethmi"].map(x=><div className="story" key={x}><div>VT</div><small>{x}</small></div>)}</div><div className="composer"><div>VT</div><input value={text} onChange={e=>setText(e.target.value)} placeholder="Share a project, idea, question..."/><button onClick={publish}>Post</button></div>{posts.length?posts.map(p=><article className="post" key={p.id}><div className="post-head"><div className="avatar">{(p.author||"VT").slice(0,2).toUpperCase()}</div><b>{p.author}</b><span>· VEXORA</span></div><div className="art"><strong>{p.caption?"BUILD SOMETHING":"VEXORA"}</strong><small>PROJECT · IDEA · COMMUNITY</small></div><div className="actions"><button onClick={()=>like(p.id)}>♡</button><button>◌</button><button>↗</button><button>⌑</button></div><b>{p.likes_count||0} likes</b><p><strong>{p.author}</strong> {p.caption}</p><small>{p.comments?.length||0} comments</small></article>):<div className="empty"><h2>Welcome to VEXORA</h2><p>Run the Django backend and create your first post.</p></div>}</section>}
function Create({text,setText,publish}){return <section className="panel"><h1>Create a post</h1><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write a caption, idea or question..."/><button className="primary" onClick={publish}>Share to VEXORA</button></section>}
function Discover(){return <section><div className="search">⌕ <input placeholder="Search people, projects, communities and topics"/></div><div className="grid">{["CODING","SPACE","DESIGN","GAMES","MATH","SCIENCE"].map(x=><div className="tile" key={x}>{x}</div>)}</div><h2>People you may know</h2>{people.map(x=><div className="person" key={x}><div className="avatar">{x.slice(0,2).toUpperCase()}</div><b>{x}</b><button>Follow</button></div>)}</section>}
function Reels(){return <section><h1>Reels</h1><div className="reels">{["BUILD","SPACE","CODE","CREATE","MATH","ART"].map(x=><div className="reel" key={x}>▶<b>{x}</b></div>)}</div></section>}
function Messages(){return <section className="panel"><h1>Messages</h1><div className="chat">Ariyan Builds<br/><br/>Can you check my new project? ⚡</div><input placeholder="Message..."/></section>}
function Profile({posts}){return <section className="profile"><div className="cover"></div><div className="avatar big">VT</div><h1>Your Profile</h1><p>Student creator · Building things and finding people to build with.</p><div className="stats">0 posts · 1.2K followers · {posts.length} feed posts</div></section>}
function Communities(){return <section><h1>Communities</h1><div className="grid">{communities.map(x=><div className="community" key={x}><h2>{x}</h2><p>Students sharing projects, questions and ideas.</p><button>Join</button></div>)}</div></section>}
function Notifications(){return <section className="panel"><h1>Notifications</h1>{["Ariyan liked your project.","Kavya commented on your post.","VEXORA Team invited you to Coding.","Sahan started following you."].map(x=><p key={x}>♡ {x}</p>)}</section>}
createRoot(document.getElementById("root")).render(<App/>);
