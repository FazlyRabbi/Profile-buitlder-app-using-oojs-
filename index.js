


function Profile(name,email,proffesion){

    this.name = name;
    this.email = email;
    this.proffesion = proffesion;
}


function Ui(){}


Ui.prototype.addProfileList = function({name,email,proffesion}){

    const tr = document.createElement("tr");

    tr.innerHTML = `<th scope="row">${name}</th>
    <td>${email}</td>
    <td>${proffesion}</td>
    <td><i class="far fa-trash-alt" id="deletIcon"></i></td>`;

 document.querySelector("#profile-list").appendChild(tr);



}


// clear field frome ui
Ui.prototype.clearField = function(){
    
   document.querySelector("#name").value = "";
   document.querySelector("#email").value = "";
   document.querySelector("#proffesion").value = "";

}

//delet profile mathod.........
Ui.prototype.deleteProfile = function(target){

    target.parentElement.parentElement.remove();

}

//showing alert massage 

Ui.prototype.showAlert = function(massage,className){
   
    const div = document.createElement("div");
     div.className = `alert alert-${className}`;
     div.textContent = massage;
      const container = document.querySelector(".container");
      const form =  document.querySelector("form");
  

  container.insertBefore(div,form);

  setTimeout(() => {
      document.querySelector(".alert").remove();
  },2000);

};

document.querySelector("form").addEventListener("submit",(e) =>{
    e.preventDefault();
    console.log(e.target)
   const name = document.querySelector("#name").value;
   const email = document.querySelector("#email").value;
   const proffesion = document.querySelector("#proffesion").value;
         //Instantiate profile object......
   const profile = new Profile(name,email,proffesion);
         //instantiate ui object
   const ui = new Ui();
  
   if(name === "" || email === "" || proffesion === ""){
   
    ui.showAlert("proifle provide nessary information","danger");
   }else{
     ui.showAlert("proifle added","success");
     ui.addProfileList(profile);
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