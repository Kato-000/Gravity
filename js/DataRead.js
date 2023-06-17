for(let i = 1; i < 2; i++){
  url = `../Data/FruitsData.json`;

  $.getJSON(url, (data) => {
    console.log(`id=${data.id}, name=${data.name}, email=${data.email}`);
  });
}