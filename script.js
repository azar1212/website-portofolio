const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const phone = document.querySelector('#Phone').value;
      const subject = document.querySelector('#subject').value;
      const message = document.querySelector('#Message').value;

      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aziziarsyad1212@gmail.com",
        Password: "794CD32F260A50C9E30F7C88A7A0CC897C7B",
        To: "aziziarsyad1212@gmail.com",
        From: "aziziarsyad1212@gmail.com",
        Subject: subject,
        Body: `Name: ${name} <br> Phone: ${phone} <br> Message: ${message}`
      }).then(
        message => alert("Message sent successfully!")
      );
    });

// Ambil elemen audio dan song list
const audio = document.getElementById('audio');
const songList = document.querySelector('.song-list ul');
const fixedButton = document.querySelector('.fixed-button');
const titleElement = fixedButton.querySelector('.title-1');
const timeNow = document.querySelector('.time_now');
const timeFull = document.querySelector('.time_full');
const sliderbar = document.querySelector('.sliderbar');



// Initialize currentSongIndex
let currentSongIndex = 1;

// Set src audio ke lagu pertama dalam song list saat awal masuk
window.onload = () => {
  const secondSong = songList.children[currentSongIndex];
  audio.src = secondSong.getAttribute('src');
  audio.play().catch((error) => {
    console.error('Error playing audio:', error);
  });
};

// Tambahkan event listener pada tombol next
fixedButton.addEventListener('click', () => {
  // Increment current song index
  currentSongIndex++;

  // Check if we've reached the end of the song list
  if (currentSongIndex >= songList.children.length) {
    currentSongIndex = 0; // Loop back to the first song
  }

  // Set src audio ke lagu berikutnya
  const nextSong = songList.children[currentSongIndex];
  audio.src = nextSong.getAttribute('src');
  audio.play().catch((error) => {
    console.error('Error playing audio:', error);
  });
});

audio.addEventListener('play', () => {
  const currentSong = decodeURIComponent(audio.src).split('/').pop();
  titleElement.textContent = currentSong.replace('.mp3', '');
});

audio.addEventListener('timeupdate', () => {
  const currentSong = decodeURIComponent(audio.src).split('/').pop();
  titleElement.textContent = currentSong.replace('.mp3', '');
});

// Mengupdate waktu lagu penuh
audio.addEventListener('loadedmetadata', () => {
  const duration = audio.duration;
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeFull.textContent = timeString;
});

// Mengupdate waktu lagu saat ini
setInterval(() => {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeNow.textContent = timeString;
}, 1000);

// Mengupdate sliderbar saat lagu diputar
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  sliderbar.style.width = `${progress}%`;
});

// Mengupdate sliderbar saat lagu diubah
audio.addEventListener('loadedmetadata', () => {
  const duration = audio.duration;
  sliderbar.style.width = '0%';
});

// Mengupdate sliderbar saat tombol next diklik
fixedButton.addEventListener('click', () => {
  sliderbar.style.width = '0%';
});

// Membuat sliderbar dapat di-drag
sliderbar.addEventListener('mousedown', (e) => {
  const rect = sliderbar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const progress = (x / rect.width) * 100;
  audio.currentTime = (progress / 100) * audio.duration;
  sliderbar.style.width = `${progress}%`;
});

// Membuat sliderbar dapat di-drag saat mouse di-gerakkan
document.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) {
    const rect = sliderbar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = (x / rect.width) * 100;
    audio.currentTime = (progress / 100) * audio.duration;
    sliderbar.style.width = `${progress}%`;
  }
});

// Membuat sliderbar dapat di-drag saat mouse di-lepaskan
document.addEventListener('mouseup', () => {
  audio.play();
});


const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalClose = document.querySelector('.modal-close');


galleryItems.forEach((item, index) => {
  item.style.top = `${Math.random() * 100}%`;
  item.style.left = `${Math.random() * 100}%`;
  item.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
});

setInterval(() => {
  galleryItems.forEach((item, index) => {
    item.style.top = `${Math.random() * 100}%`;
    item.style.left = `${Math.random() * 100}%`;
    item.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
  });
}, 2000);

function updateGallery() {
  galleryItems.forEach((item, index) => {
    item.style.top = `${Math.random() * 100}%`;
    item.style.left = `${Math.random() * 100}%`;
    item.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
  });
  requestAnimationFrame(updateGallery);
}


galleryItems.forEach((img) => {
  img.src = '2.jpg'; // Add src attribute to each image element
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.style.width = '100%'; // Add CSS styles to make modalImg visible
    modalImg.style.height = '100%';
    modalImg.style.objectFit = 'cover';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Add CSS styles to make the modal visible
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

// Call updateGallery function
window.onload = () => {
  updateGallery();
};

function updateGallery() {
  galleryItems.forEach((item, index) => {
    item.style.top = `${Math.random() * 100}%`;
    item.style.left = `${Math.random() * 100}%`;
    item.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
  });
  requestAnimationFrame(updateGallery);
}

