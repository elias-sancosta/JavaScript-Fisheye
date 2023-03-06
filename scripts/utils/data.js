async function getPhotographers() {
  try {
    const response = await fetch('data/photographers.json');
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export { getPhotographers };
