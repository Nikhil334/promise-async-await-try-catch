const fetchbiodata=(roll_no)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Biodata ={
                name : "Nikhil Gupta",
                age : 28
            }
            resolve(`my roll no is ${roll_no} and my name is ${Biodata.name} and i am ${Biodata.age} years old`);
            reject("There is some problems to fetching Biodata");
        },4000,roll_no);
    })
}
new Promise((resolve,rejejct)=>{
  let roll_no =[1,2,3,4,5,6,7,8];
  resolve(roll_no);
  rejejct("There is some problems to fetching roll no");
}).then((roll_no)=>{
    console.log(roll_no);
    fetchbiodata(roll_no[4]).then((data)=>{
     console.log(data);
    }).catch((error)=>{
        console.log(error);
    });
}).catch((error)=>{
    console.log(error);
});
