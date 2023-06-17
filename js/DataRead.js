fetch('../Data/FruitsData.csv')
  .then(response => response.text())
  .then(csvData => {
    print(csvData);
    // CSVデータを処理するコードをここに記述する
  })
  .catch(error => {
    console.error('CSVファイルの読み込みエラー:', error);
  });