// import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
import {Navigate} from "react-router-dom";
import Editor from "../Editor";


export default function CreatePost(){
    const [title , setTitle] = useState('');
    const [summary , setSummary] = useState('');
    const [content , setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    //function that we send all data in create new post slide to api for save and share in the home page
    async function createNewPost(ev){
        const data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('content', content);
        data.append('file', files[0] );
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok){
            setRedirect(true);
        }
     }

     if (redirect) {
        return <Navigate to={'/'} />
      }

    return (
        <form onSubmit={createNewPost}>
            <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />

            <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />

            <input type="file"
            
            onChange={ev => setFiles(ev.target.files)}/>

            <Editor 
            onChange={setContent} 
            value={content} />

            <button style={{marginTop: '5px'}}>Create Post</button>
        </form>
    );
}