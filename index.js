
//  let count = 0

//  document.querySelector("#decrement").addEventListener("click",function(){
//      count--
//      console.log(count);
//      myDatabase.ref("/say").set({ count })

//  });


//  document.querySelector("#increment").addEventListener("click",function(){
//      count++
//      console.log(count);

//      myDatabase.ref("/say").set({ count })
     
//  });


//   let myDatabase = firebase.database()

//   // Ref otaq yaratmaq ucundur meselen kitablar deye bir otaq budaq
  
// //   myDatabase.ref("/telebeler").set({name:"Huseyn"})

// myDatabase.ref("/say").set({count:7})
//   console.log(myDatabase);

//   let myDatabase = firebase.database()


// ----------------------------------------------------------------
// push xusisi bir idnin altinda yenisini yaradir

// let telebeBudagi = myDatabase.ref("/telebeler")

// let telebeBudagi = myDatabase.ref("telebeler/")
// biz burda idni tutaraq o idni update eliyiriy
// let AydininBudagi = myDatabase.ref("telebeler/-N26SdjPgwSi926jFW_a")


// telebeBudagi.push().set({name:"Huseyn",age:22})
// telebeBudagi.push().set({name:"Aydin",age:22})

// AydininBudagi.set({name:"Aydin",age:25,job:"developer"})

// ---------------------------------------------------------------------

// Delete etmek, child hemin budagi tutur
// telebeBudagi.child("-N26SdjPgwSi926jFW_a").remove()

// ------------------------------------------------------------------------
// Get methodu kimi is goren ;Read
// iki parametr qebul edir birinci neyi dinliyim(value) ikinci ise dinliyennen sonra bir callback funksiyasini ise sal
// let telebeBudagi = myDatabase.ref("telebeler/")
// telebeBudagi.on("value",function(){
//     console.log("Nese geldi");
// })

// ----------------------------------------------------------------------------------
// Exists icinde var mi onu gorsedir
let onlaynBudagi = myDatabase.ref("onlayndakilar/")
// myDatabase.ref("onlayndakilar/chat").set(1)

onlaynBudagi.on("value",function(snap){

    let budaqaOlanChildBudaqlarinSayi = snap.numChildren()

    console.log(budaqaOlanChildBudaqlarinSayi);
    // let beleBirBudaqVarmi = snap.child("chat").exists()

    // if(!beleBirBudaqVarmi){
    //     myDatabase.ref("onlayndakilar/chat").set(5)
    // }

    // console.log("varmi",beleBirBudaqVarmi);
})

// --------------------------------------------------------------------------
// onDisconnect yaradir,seyfeden cixanda silir

onlaynBudagi.once("value",function(snap){

    let usaqGeldi = onlaynBudagi.push({fullname:"Arif"})
    usaqGeldi.onDisconnect().remove()

    console.log(snap.numChildren());
})