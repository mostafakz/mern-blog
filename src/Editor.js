import React from 'react';
import ReactQuill from "react-quill";

export default function Editor({value,onChange,onEditorChangeText}) {
    const modules = {
      
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ]
    };
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ];

    return(
        <ReactQuill theme="snow" 
            value={value} 
            onChange={onChange} 
            modules={modules} 
            formats={formats}
            onEditorChangeText={onEditorChangeText}
             />

    );
}
    