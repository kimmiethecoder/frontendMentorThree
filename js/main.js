const searchBtn = document.getElementById('advice-button');
searchBtn.addEventListener('click', getFetch);


function getFetch(){
    const url = "https://api.adviceslip.com/advice"
        
    fetch(url)
        .then (res => res.json())
        .then (data => {
            const h2 = document.createElement('h2');
            document.querySelector('h2').innerHTML = `Slip #` + data.slip.id

            const h3 = document.createElement('h3');
            document.querySelector('h3').innerHTML = `"` + data.slip.advice + `"`
    })
        .catch (err => {
            console.log(`error ${err}`)
        })
}
