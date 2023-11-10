// scripts.js

function openModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modalContent');
    var modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.styles.display = 'flex';
  
    modalContent.onclick = function() {
      modal.styles.display = 'none';
    };
  }
  