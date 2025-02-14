// creates a new HTTp message  to send to backend
// message=request
const xhr=new XMLHttpRequest();

// first set the evnetlstner and than trigger it
xhr.addEventListener('load',()=>{
    console.log(xhr.response)
});

xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');
xhr.send();

xhr.response() //initially it will be undefined as it takes times to send req and to get back respose