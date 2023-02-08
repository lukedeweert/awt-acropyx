let api_url = 'https://preprod-api-acropyx.herokuapp.com/public';

(async function getPilots(container) {
    if (!container) return;

    const api_pilots = api_url + '/pilots/';
    const response = await fetch(api_pilots);
    const data = await response.json();

    let innerHtml = ''
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];

        innerHtml += `
                <a class="avatar__item" href="${obj.link}" target="_blank">
                    <div class="avatar__img" style="background-image: url('${obj.photo}')">
                        <img src="${obj.photo}" class="avatar__img" alt="${obj.name}">
                    </div>
                    <i class="avatar__flag" style="background-image: url('img/flags/${obj.country}.png')"></i>
                    <span class="avatar__name">${obj.name}</span>
                    <span class="avatar__subtitle">World Ranking: #${obj.rank}</span>
                </a>`;
    }

    container.innerHTML = innerHtml    
})(document.querySelector(".js-pilots"));