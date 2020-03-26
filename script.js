// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      //VALIDATE FORM INPUT
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName");
      if (!isNaN(pilotNameInput.value)) {
         alert("Pilot name must be a string!");
         event.preventDefault();
         return;
      };
      if (!isNaN(copilotNameInput.value)) {
         alert("Copilot name must be a string!");
         event.preventDefault();
         return;
      };
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass");
      if (isNaN(fuelLevelInput.value)) {
         alert("Fuel level must be a number!");
         event.preventDefault();
         return;
      };
      if (isNaN(cargoMassInput.value)) {
         alert("Cargo mass must be a number!");
         event.preventDefault();
         return;
      };
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         return;
      }
      //UPDATE SHUTTLE REQUIREMENTS
      document.getElementById('pilotStatus').innerHTML = `${pilotNameInput.value} ready.`;
      document.getElementById('copilotStatus').innerHTML = `${copilotNameInput.value} ready.`;

      if (fuelLevelInput.value < 10000) {
         event.preventDefault();
      //faultyItems visible
      document.getElementById("faultyItems").style.visibility = "visible";
      //update fuel status stating not enough fuel for the journey
      document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey.";
      //text of h2 element launchStatus change to "Shuttle not ready for launch."
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      //color change to red
      document.getElementById("launchStatus").style.color = "red";
      
   } 
   if (cargoMassInput.value > 10000) {
      //list visible
      event.preventDefault();
      document.getElementById("faultyItems").style.visibility = "visible";
      //update cargo status stating there is too much mass for shuttle to take off
      document.getElementById("cargoStatus").innerHTML = "Too much mass for shuttle to take off.";
      //text of h2 element launchStatus change to "Shuttle not ready for launch."
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      //color change to red
      document.getElementById("launchStatus").style.color = "red";
      
   } else {
      event.preventDefault();
      document.getElementById("faultyItems").style.visibility = "visible";
      //change text of launchStatus to green
      document.getElementById("launchStatus").style.color = "green";
      //display "Shuttle is ready for launch"
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
   };
   let json = [];
   let index = 0;
      // TODO: fetch planets JSON
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      //TODO: index 3 (Mars)
      response.json().then(function(json) {
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destingation</h2>
         <ol>
         <li>Name: ${json[index].name}</li>
         <li>Diameter: ${json[index].diameter}</li>
         <li>Star: ${json[index].star}</li>
         <li>Distance from Earth: ${json[index].distance}</li>
         <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
      `
      });
   });
   });
});
