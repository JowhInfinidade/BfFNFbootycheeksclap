window.onload = () => {
  // Create an audio element and set it to loop
  const audio = new Audio('audio/bf.mp3');
  audio.loop = true;

  // Play the audio
  audio.play().catch(err => {
    console.log("Error playing audio:", err);
  });
};
