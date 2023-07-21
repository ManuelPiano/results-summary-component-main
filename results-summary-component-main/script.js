function setData() {
    fetch('data.json')
      .then((response) => response.json())
      .then((items) => {
        const itemElements = document.querySelectorAll('.item');
        const titleElements = document.querySelectorAll('.item .title p');
        const imageElements = document.querySelectorAll('.item .title img');
        const scoreElements = document.querySelectorAll('.score');
  
        items.forEach((item, i) => {
          itemElements[i].style.backgroundColor = `hsl(${item.score}, 50%, 90%)`;
          imageElements[i].src = item.icon;
          titleElements[i].innerHTML = item.category;
          titleElements[i].style.color = `hsl(${item.score}, 70%, 50%)`;
          scoreElements[i].innerHTML = item.score;
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  setData();
  