//import React,{useState} from 'react'
import React from 'react';
export default function About( props) {

  const style = {
		backgroundColor: props.mode==='dark'?'black':'white', 
		color: props.mode==='dark'?'white':'black'
	};
  
  // const [AboutStyle, setAboutStyle] = useState({		
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  // const [btnText, setBtnText] = useState('Dark Mode');
  
  // const DarkMode = () => {
  //   if(AboutStyle.backgroundColor === 'white'){
  //     setAboutStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
	//   setBtnText('Light Mode');
  //   } else {
  //     setAboutStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
	//   setBtnText('Dark Mode');
  //   }
  // };

  return (
    <div className='container my-3' style={style}>
        <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}	>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="my-3">
          <button type="button" className="btn btn-dark" onClick={DarkMode}>{btnText}</button>
        </div> */}
    </div>
  )
}


//import React,{useState} from 'react'

// export default function About() {

//   const [AboutStyle, setAboutStyle] = useState({		
//     color: 'black',
//     backgroundColor: 'white'
//   });

//   const [btnText, setBtnText] = useState('Dark Mode');
  
//   const DarkMode = () => {
//     if(AboutStyle.backgroundColor === 'white'){
//       setAboutStyle({
//         color: 'white',
//         backgroundColor: 'black'
//       })
// 	  setBtnText('Light Mode');
//     } else {
//       setAboutStyle({
//         color: 'black',
//         backgroundColor: 'white'
//       })
// 	  setBtnText('Dark Mode');
//     }
//   };

//   return (
//     <div className='container my-3' style={AboutStyle}>
//         <h1>About Us</h1>
//         <div className="accordion accordion-flush" id="accordionFlushExample">
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button className="accordion-button collapsed" style={AboutStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//               <div className="accordion-body" style={AboutStyle}>
//                 Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button className="accordion-button collapsed" style={AboutStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//               <div className="accordion-body" style={AboutStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
//             </div>
//           </div>
//           <div className="accordion-item" >
//             <h2 className="accordion-header">
//               <button className="accordion-button collapsed" style={AboutStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//               <div className="accordion-body" style={AboutStyle}>
//                 Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="my-3">
//           <button type="button" className="btn btn-dark" onClick={DarkMode}>{btnText}</button>
//         </div>
//     </div>
//   )
// }
