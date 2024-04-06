document.addEventListener('DOMContentLoaded', function() {
    const infoBox = document.getElementById('info-box');

    // Event listener for Texas
    document.getElementById('TX').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Texas...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });

    // Event listener for California
    document.getElementById('CA').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about California...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });

    // Event listener for Florida
    document.getElementById('FL').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Florida...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });

    // Event listener for Pennsylvania
    document.getElementById('PA').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Pennsylvania...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });

    // Event listener for North Carolina
    document.getElementById('NC').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about North Carolina...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });

    // Event listener for Ohio
    document.getElementById('OH').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Ohio...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });
  
    // Event listener for Georgia
    document.getElementById('GA').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Georgia...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });

    // Event listener for New York
    document.getElementById('NY').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about New York...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });
  
    // Event listener for Illinois
    document.getElementById('IL').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Illinois...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });

    // Event listener for Michigan
    document.getElementById('MI').addEventListener('click', function() {
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Michigan...'; // Add more detailed information here
        positionInfoBox(infoBox);
    });
  
    // Hide the info box when clicking anywhere else on the page
    document.addEventListener('click', function(event) {
        if (event.target.tagName !== 'path') {
            infoBox.style.display = 'none';
        }
    });

    // Function to position the info box
    function positionInfoBox(infoBox) {
        infoBox.style.left = '60%'; // Adjust the position as needed
        infoBox.style.top = '20%'; // Adjust the position as needed
    }
});

/* first try was texas only 
    document.getElementById('TX').addEventListener('click', function() {
       // Display the info box with information about Texas
        infoBox.style.display = 'block';
        infoBox.innerHTML = 'Information about Texas...'; // Add more detailed information here
        infoBox.style.left = '50%'; // Adjust the position as needed
        infoBox.style.top = '50%'; // Adjust the position as needed
    });

    // Hide the info box when clicking anywhere else on the page
    document.addEventListener('click', function(event) {
        if (event.target.id !== 'TX') {
            infoBox.style.display = 'none';
        }
    }); */
    
/* another way of doing this 

 Now I'm adding the svg interactive map part 
document.addEventListener('DOMContentLoaded', function() {
    const infoBox = document.getElementById('info-box');

    // Function to position the info box
    function positionInfoBox(infoBox) {
        infoBox.style.left = '50%'; // Adjust the position as needed
        infoBox.style.top = '50%'; // Adjust the position as needed
    }

    // Function to show the info box with state information
    function showInfoBox(event, stateInfo) {
        event.stopPropagation(); // Stop the click event from propagating to the document
        infoBox.style.display = 'block';
        infoBox.innerHTML = stateInfo;
        positionInfoBox(infoBox);
    }

    // Event listeners for states
    document.getElementById('TX').addEventListener('click', function(event) {
        showInfoBox(event, 'Information about Texas...');
    });

    document.getElementById('CA').addEventListener('click', function(event) {
        showInfoBox(event, 'Information about California...');
    });

  document.getElementById('FL').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about Florida...');
  });

  // Event listener for Pennsylvania
  document.getElementById('PA').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about Pennsylvania...');
  });

  // Event listener for North Carolina
  document.getElementById('NC').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about North Carolina...');
  });

  // Event listener for Ohio
  document.getElementById('OH').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about Ohio...');
  });

  // Event listener for Georgia
  document.getElementById('GA').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about Georgia...');
  });

  // Event listener for New York
  document.getElementById('NY').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about New York...');
  });

  // Event listener for Illinois
  document.getElementById('IL').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about Illinois...');
  });

  // Event listener for Michigan
  document.getElementById('MI').addEventListener('click', function(event) {
      showInfoBox(event, 'Information about Michigan...');
  });

    // Hide the info box when clicking anywhere else on the page
  document.addEventListener('click', function(event) {
      if (!infoBox.contains(event.target)) {
          infoBox.style.display = 'none';
      }
  });

});
 end of svg interactive map part */
