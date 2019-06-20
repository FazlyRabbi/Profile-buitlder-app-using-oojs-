

class Profile{
    constructor(id,name,email,profession){
        this.id = id;
        this.name = name;
        this.email = email;
        this.profession = profession;
    }
}


class Store{

    static addToStorage(profile){

        let profiles;

        if( localStorage.getItem("profiles") === null){

            profiles = [];
            
        }else{
          profiles = JSON.parse(localStorage.getItem("profiles"));
        }

        profiles.push(profile);
        localStorage.setItem("profiles",JSON.stringify(profiles));
    }

}

class Ui {
addProfileList({id,name,email,profession}){
   
    const tr = document.createElement("tr");

    tr.innerHTML = `<th scope="row">${name}</th>
    <td>${email}</td>
    <td>${profession}</td>
    <input type="hidden" data-id="${id}"/>
    <td><i class="far fa-trash-alt" id="deletIcon"></i></td>`;

   document.querySelector("#profile-list").appendChild(tr);

 
}
clearField(){
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#proffesion").value = ""; 
}

deleteProfile(target){
    target.parentElement.parentElement.remove();

}

showAlert(massage,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.textContent = massage;
     const container = document.querySelector(".container");
     const form =  document.querySelector("form");
 

 container.insertBefore(div,form);

 setTimeout(() => {
     document.querySelector(".alert").remove();
 },2000);

}

addId(){
    return document.querySelectorAll("tr").length;
}

}



document.querySelector("form").addEventListener("submit",(e) =>{
    e.preventDefault();
  
   const name = document.querySelector("#name").value;
   const email = document.querySelector("#email").value;
   const proffesion = document.querySelector("#proffesion").value;
  
   const ui = new Ui();
   const id = ui.addId();
         //Instantiate profile object......
   const profile = new Profile(id,name,email,proffesion);
         //instantiate ui object
  


  
   if(name === "" || email === "" || proffesion === ""){
   
    ui.showAlert("proifle provide nessary information","danger");
   }else{
     ui.showAlert("proifle added","success");
     ui.addProfileList(profile);
     //adding to localStorege
     Store.addToStorage(profile);
    //  Store.addToStorage(profile);

     ui.clearField();
     
   
   }
 })


   
   //Event delegation practical 
   document.querySelector("#profile-list").addEventListener("click",e=>{
  
      if(e.target.id === "deletIcon"){
    
          const ui = new Ui();
          ui.deleteProfile(e.target);
          ui.showAlert("proifle is remove","success");
      }
    
     
   })







//    //local storage 
// //setting and gettin item forme localStorege


// const arr = ["Rabbi","raju","nishan"];


// const obj = {firstName:"Rabbi",lastName:"islam"};

// const str = "RabbbiIslam";

// const num = 20;


// localStorage.setItem("array",JSON.stringify(arr));

// localStorage.setItem("obj",JSON.stringify(obj));

// localStorage.setItem("str",str);

// localStorage.setItem("num",JSON.stringify(num));

// console.log( JSON.parse(localStorage.getItem("array")) );

// console.log( JSON.parse(localStorage.getItem("obj")) );

// console.log( localStorage.getItem("str"));

// console.log( JSON.parse(localStorage.getItem("num")) );

// // clear data forme the localStorage...
// localStorage.clear();
