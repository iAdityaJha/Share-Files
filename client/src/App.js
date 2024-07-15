import './App.css';
import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
        setCopied(false);  // Reset copied state when a new file is uploaded
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000); // Reset the copied state after 3 seconds
    }
  };

  return (
    <div className="Container">
      <div className="wrapper">
        <h1>SHARE FILE</h1>
        <p>Upload and share files</p>

        <button onClick={onUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="temp"></div>
        {result && (
          <div>
            <a className="link" href={result} target="_blank" rel="noopener noreferrer">{result}</a>
            <button className="copy-button" onClick={copyToClipboard}>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;




// import './App.css';
// import { useRef, useState, useEffect } from 'react';
// import { uploadFile } from './services/api';

// function App() {
//   const [file, setFile] = useState('');
//   const [result, setResult] = useState('');

//   const fileInputRef = useRef();

//   useEffect(() => {
//     const getImage = async () => {
//       if (file) {
//         const data = new FormData();
//         data.append("name", file.name);
//         data.append("file", file);

//         let response = await uploadFile(data); 
//         setResult(response.path);
//       }
//     };
//     getImage();
//   }, [file]);
//   const flag=false;
//   const onUploadClick = () => {
//     fileInputRef.current.click();
//     flag=false;
//   };

//   const copyToClipboard = () => {
//     if (result) {
//       navigator.clipboard.writeText(result);
//       alert('Link copied to clipboard');
//       copy(true)
//     }
//   };

//   const copy= (flag)=>{
//     if(flag) return "copied"
//       else return "copy"
//   }

//   return (
//     <div className="Container">
//       <div className="wrapper">
//         <h1>SHARE FILE</h1>
//         <p>Upload and share files</p>

//         <button onClick={onUploadClick}>Upload</button>
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: 'none' }}
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <div className="temp"></div>
//         {result && (
//           <div>
//             <a className="link" href={result} target="_blank" rel="noopener noreferrer">{result}</a>
//             <button className="copy-button" onClick={copyToClipboard}>{copy}</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



// // import logo from './logo.svg';
// import './App.css';
// // import react from 'react';
// import {useRef, useState, useEffect} from 'react';

// import { uploadFile } from './services/api';

// function App() {
//   const [file, setFile]=useState('');
  
//   const [result,setResult]=useState('');

//   const fileInputRef= useRef();

//   useEffect(()=>{
//     const getImage=async ()=>{
//       if(file){
//         const data= new FormData();
//         data.append("name",file.name);
//         data.append("file",file);

//         let response=await uploadFile(data); 
//         setResult(response.path)
//       }
//     }
//     getImage();
//   },[file]);
//   const onUploadClick=()=>{
//     fileInputRef.current.click();
//   }
//   console.log(file)
//   return (
//     <div className="Container">
//       {/* <p>Hello Bhai React</p> */}
//       <div className="wrapper">
//         <h1>SHARE FILE</h1>
//         <p>Upload and share files</p>

//         <button onClick={()=> onUploadClick()}>Upload</button>
//         <input type="file"
//         ref={fileInputRef}
//         style={{display : 'none'}}
//         onChange={(e)=> setFile(e.target.files[0])}
//         />
//         <div className='temp'></div>
//         <a className='link' href={result} target='blank'>{result}</a>
//       </div>
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import { useRef, useState, useEffect } from 'react';
// import { uploadFile } from './services/api';

// function App() {
//   const [file, setFile] = useState('');
//   const [result, setResult] = useState('');

//   const fileInputRef = useRef();

//   useEffect(() => {
//     const getImage = async () => {
//       if (file) {
//         const data = new FormData();
//         data.append("name", file.name);
//         data.append("file", file);

//         let response = await uploadFile(data); 
//         setResult(response.path);
//       }
//     };
//     getImage();
//   }, [file]);

//   const onUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const onLinkClick = () => {
//     if (result) {
//       window.open(result, '_blank');
//     }
//   };

//   return (
//     <div className="Container">
//       <div className="wrapper">
//         <h1>SHARE FILE</h1>
//         <p>Upload and share files</p>

//         <button onClick={onUploadClick}>Upload</button>
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: 'none' }}
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <div className="temp"></div>
//         {result && (
//           <div>
//             <a className="link" href={result} target="_blank" rel="noopener noreferrer">{result}</a>
//             {/* <button className="link-button" onClick={onLinkClick}>Download File</button> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
