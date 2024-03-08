      let nametagcalling = document.getElementById("name");
      let agetagcalling = document.getElementById("age");
      let gendertagcalling = document.getElementById("gender");
      let dobtagcalling = document.getElementById("dob");
      let addresstagcalling = document.getElementById("address");
      let btntagcalling = document.getElementById("btn");
      let datadivtagcalling = document.getElementById("datadiv");
      
     

      //   function for button action
      btntagcalling.addEventListener("click", function crudOperationName() {
        let newdiv = document.createElement("div");
        // console.log(newdiv);
        datadivtagcalling.appendChild(newdiv);
       

        // name
        let namenewinputtagcreation = document.createElement("input");
        namenewinputtagcreation.value = nametagcalling.value;
        namenewinputtagcreation.setAttribute("readonly", "readonly");
        newdiv.appendChild(namenewinputtagcreation);
       
        
       
        // age
        let agenewinputtagcreation = document.createElement("input");
        agenewinputtagcreation.value = agetagcalling.value;
        agenewinputtagcreation.setAttribute("readonly", "readonly");
        newdiv.appendChild(agenewinputtagcreation);  
         
        // Gender
        let gendernewinputtagcreation = document.createElement("input");
        gendernewinputtagcreation.value = gendertagcalling.value;
        gendernewinputtagcreation.setAttribute("readonly", "readonly");
        newdiv.appendChild(gendernewinputtagcreation);

        // date of birth
        let dobnewinputtagcreation = document.createElement("input");
        dobnewinputtagcreation.value = dobtagcalling.value;
        dobnewinputtagcreation.setAttribute("readonly", "readonly");
        newdiv.appendChild(dobnewinputtagcreation);

        // address
        let addressnewinputtagcreation = document.createElement("input");
        addressnewinputtagcreation.value = addresstagcalling.value;
        addressnewinputtagcreation.setAttribute("readonly", "readonly");
        newdiv.appendChild(addressnewinputtagcreation);
        
        

        // update
        let editbutton = document.createElement("button");
        editbutton.innerHTML = "Edit";
        newdiv.appendChild(editbutton);
        

        editbutton.addEventListener("click", () => {
          namenewinputtagcreation.removeAttribute("readonly", "readonly");
          agenewinputtagcreation.removeAttribute("readonly", "readonly");
          gendernewinputtagcreation.removeAttribute("readonly", "readonly");
          dobnewinputtagcreation.removeAttribute("readonly", "readonly");
          addressnewinputtagcreation.removeAttribute("readonly", "readonly");
         
        });
      
        // save
        let savebutton = document.createElement("button");
        savebutton.innerHTML = "Save";
        newdiv.appendChild(savebutton);

        savebutton.addEventListener("click", () => {
          newdiv.appendChild(namenewinputtagcreation);
          namenewinputtagcreation.setAttribute("readonly", "readonly");
          agenewinputtagcreation.setAttribute("readonly", "readonly");
          gendernewinputtagcreation.setAttribute("readonly", "readonly");
          dobnewinputtagcreation.setAttribute("readonly", "readonly");
          addressnewinputtagcreation.setAttribute("readonly", "readonly");
        
        });

        // delete
        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = "Delete";
        newdiv.appendChild(deletebtn);

        deletebtn.addEventListener("click", () => {
          newdiv.style.display = "none";
         
        });
        
      });
   