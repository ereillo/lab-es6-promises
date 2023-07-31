// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes", 5).innerHTML += `<li>${step5}</li>`
        }, (error) => console.log(error))
      })
    }, (error) => console.log(error))
  },  (error) => console.log(error))
 },  (error) => console.log(error))
});

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    console.log("paso1", step0)
    return obtainInstruction("steak",1);//  ... Your code here
  })
  .then((step1)=>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    console.log("paso2", step1)
    return obtainInstruction("steak",2);
  })
  .then((step2)=>{
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    console.log("paso3", step2)
    return obtainInstruction("steak",3);
  })
  .then((step3)=>{
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    console.log("paso4", step3)
    return obtainInstruction("steak",4);
  })
  .then((step4)=>{
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    console.log("paso4", step4)
    return obtainInstruction("steak",5);
  })
  .then((step5)=>{
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    console.log("paso5", step5)
    return obtainInstruction("steak",6);
  })
  .then((step6)=>{
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    console.log("paso6", step6)
    return obtainInstruction("steak",7);
  })
  .then((step7)=>{
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    console.log("paso7", step7)
    return obtainInstruction("steak",8);
  })
  .then((step8)=>{
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    console.log("paso8", step8)
    return obtainInstruction("steak",9);
  })
  // .then((step9)=>{
  //   document.getElementById("steakImg").innerHTML -= `<div> hidden </div>`
  //   console.log("paso9", step9)             HEMOS INTENTADO EL BONUS ASÍ, TAMBIÉN CON UN BULEANO, PERO NO NOS HA SALIDO
  //   return obtainInstruction("steak",10);
  // })
  .catch((error)=>{
    // console.log("error", error)
  })

// Iteration 3 using async/await
// Using promises with the async and await syntax print the directions to make Brussels Sprouts in the correct order. You will need the function obtainInstruction which returns a pending Promise.

async function makeBroccoli() {
try {
  const step1 = await obtainInstruction("broccoli", 0)
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  
  const step2 = await obtainInstruction("broccoli", 1)
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  
  const step3 = await obtainInstruction("broccoli", 2)
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  
  const step4 = await obtainInstruction("broccoli", 3)
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  
  const step5 = await obtainInstruction("broccoli", 4)
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  
  const step6 = await obtainInstruction("broccoli", 5)
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  
  const step7 = await obtainInstruction("broccoli", 6)
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;

  const step8 = await obtainInstruction("broccoli", 7)
  document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`;
}
catch(error) {
  console.log("error")
}
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
