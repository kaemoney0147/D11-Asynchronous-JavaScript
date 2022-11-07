const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b8e9f98f4msh93308b356ec1abbp16f4bajsn71150916a80a',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
let container=document.querySelector('.row')
const btn=document.querySelector('#uniqealbums')
fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica', options)
	.then(response => response.json())
	.then((metallica) => {
        for (let i = 0; i < metallica.data.length; i++) {
          console.log(metallica.data[i]);
          container.innerHTML += `
          <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
            <img src="${metallica.data[i].album.cover}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-text text-center">${metallica.data[i].title_short}</h5>
            </div>
          </div>`;
        }
      })
      .catch((err) => console.error(err));


      const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1b8e9f98f4msh93308b356ec1abbp16f4bajsn71150916a80a',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    let containerFluid=document.querySelector('.container-fuid')
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd', options)
        .then(response => response.json())
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
              console.log(response.data[i].title_short);
              container.innerHTML += `
              <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
                <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-text text-center">${response.data[i].title_short}</h5>
                </div>
              </div>`;
            }
          })
          .catch((err) => console.error(err));

        