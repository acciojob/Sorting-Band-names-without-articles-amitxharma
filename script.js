//your code here

function sortBandNames(bandNames) {
  const sortedNames = [];

  bandNames.forEach((name) => {
    const modifiedName = name.replace(/^(a |an |the )/i, '');
    sortedNames.push(modifiedName);
  });

  sortedNames.sort();

  let bandList = '';
  sortedNames.forEach((name) => {
    bandList += `<li>${name}</li>`;
  });

  const bandListContainer = document.querySelector('#band');
  bandListContainer.innerHTML = bandList;
}
