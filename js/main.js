let api_url = 'https://preprod-api-acropyx.herokuapp.com/public';

(async function getPilots(container) {
    if (!container) return;

    const api_pilots = api_url + '/pilots/';
    const response = await fetch(api_pilots);
    const data = await response.json();

    let innerHtml = ''
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];

        innerHtml  += `
                <a class="avatar__item" href="${obj.link}" target="_blank">
                    <div class="avatar__img" style="background-image: url('${obj.photo}')">
                        <img src="${obj.photo}" class="avatar__img" alt="${obj.name}">
                    </div>
                    <i class="avatar__flag" style="background-image: url('img/flags/${obj.country}.png')"></i>
                    <span class="avatar__name">${obj.name}</span>
                    <span class="avatar__subtitle">Rank: #${obj.rank}</span>
                </a>`;
    }

    container.innerHTML = innerHtml    
})(document.querySelector(".js-pilots"));

(async function getComps(container) {
    if (!container) return;

    const api_comps = api_url + '/competitions/';
    const response = await fetch(api_comps);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let obj = data[i];

        container.innerHTML += `
        <a href="" class="list__item js-comp-link">
            <div class="list__content">
                <span class="list__title">${obj.name}</span>
                <span class="list__subtitle">${obj.number_of_pilots} pilots</span>
            </div>
        </a>`;
    }
})(document.querySelector(".js-competitions"));

(async function latestResults(container) {
    if (!container) return;

    const api_comps = api_url + '/competitions/62c60ff47a7745ca975d9c31';
    const response = await fetch(api_comps);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let obj = data.results.overall_results[i];

        container.innerHTML += `
            <li class="ranking-list__result">
                <a class="ranking-list__link" href="run">
                    <span class="ranking-list__pos">${i + 1}</span>
                    <span class="ranking-list__flag"><img src="img/flags/${obj.country}.png"></span>
                    <span class="ranking-list__pilot">${obj.name}</span>
                    <span class="ranking-list__pts">${obj.score}</span>
                </a>
            </li>`;
    }
})(document.querySelector(".js-ranking-list"));