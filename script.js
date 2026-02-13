document.getElementById('generateBtn').addEventListener('click', async () => {
  const description = document.getElementById('description').value;
  if (!description) return alert('Please enter a description!');

  // Show loading message
  document.getElementById('loading').style.display = 'block';
  document.getElementById('pixelArt').style.display = 'none';

  try {
    // Craiyon API call (free, no key needed)
    const response = await fetch('https://backend.craiyon.com/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: `${description} in pixel art style, 8-bit, cute and colorful` }),
    });

    const data = await response.json();
    const imageUrl = data.images[0]; // Craiyon returns base64 images

    // Display the image
    document.getElementById('pixelArt').src = `data:image/png;base64,${imageUrl}`;
    document.getElementById('pixelArt').style.display = 'block';
  } catch (error) {
    alert('Oops, something went wrong! Try again.');
  } finally {
    document.getElementById('loading').style.display = 'none';
  }
});