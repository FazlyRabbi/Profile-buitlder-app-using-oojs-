
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
    
     
       static getProfiles(){
           let profiles ;
        
           if(localStorage.getItem("profiles") === null){
               profiles = [];
           }else{
               profiles = JSON.parse(localStorage.getItem("profiles"));
           }
    
       
           return profiles;
       }
    
    
       static displayProfiles(){
           const profiles = Store.getProfiles();
    
           profiles.forEach(profile => {
    
     
               const ui = new Ui();
               ui.addProfileList(profile);
           });
       }
    
    
    
       static deleteProfileFromeStore(id){
    
           const profiles = Store.getProfiles();
    
        
           profiles.forEach((profile,index)=>{
            if(profile.id === id){
                profiles.splice(index,1);
            }
           });
    
    
         localStorage.setItem("profiles",JSON.stringify(profiles));
       }
    
    }
    
     window.addEventListener("DOMContentLoaded",Store.displayProfiles)
    
    
    
    //for visula content
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
        
    
        if(target.id === "deletIcon"){
           
            const ui = new Ui();
            ui.showAlert("proifle is remove","success");
            target.parentElement.parentElement.remove();
            const id = parseInt(target.parentElement.previousElementSibling.dataset.id);
            
            Store.deleteProfileFromeStore(id);
    
    
        }
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
        return document.querySelectorAll("tr").length ;
    
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
          ui.clearField();
         Store.addToStorage(profile);
         
    
       }
     })
    
       //Event delegation practical 
       document.querySelector("#profile-list").addEventListener("click",e=>{
      
              const ui = new Ui();
              ui.deleteProfile(e.target);
              
       })
    





