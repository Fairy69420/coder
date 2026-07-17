// modal injection

const popupData = {
    "cat-imhi-imhi": {
        thumbnailImg: "images/gallery/card1_img.jpg",
        cardBadge: 'INFRASTRUCTURE',
        cardTitle: 'Smart Grid Systems',
        bannerImgLocation: "images/gallery/card1_img_HighRes.jpg",
        bannerImgCredit: `Photo by <a href="https://unsplash.com/@karsten_wuerth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karsten Würth</a> on <a href="https://unsplash.com/photos/windmill-on-grass-field-during-golden-hour-0w-uTa0Xz7w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
        bannerImgAlt: "windmill on grass field during golden hour photo",
        bannerTitle: "Resilient Energy",
        contentTitle: "Next-Gen Grid Decoupling & Distribution",
        contentDescription: "Integrating decentralized AI routing across national power grids to minimize transmission loss. Real-time machine learning algorithms automatically redirect excess renewable capacity to industrial zones, preventing localized brownouts and boosting infrastructure reliability.",
        metricLabel_1: "EFFICIENCY GAIN",
        metricLabel_1_SVG: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L17.4697 15.5303C17.6842 15.7448 18.0068 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L9 5.25C8.69665 5.25 8.42318 5.43273 8.30709 5.71299C8.19101 5.99324 8.25517 6.31583 8.46967 6.53033L12.4393 10.5L5.46967 17.4697Z"
                                            fill="currentColor"></path>
                                    </g>
                                </svg>`,
        metricLabel_1_Value: "38.6%",
        metricLabel_2: "SYSTEM LATENCY",
        metricLabel_2_SVG: `<svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve" stroke="currentColor" stroke-width="0.78"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M57,38.36V36h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1h-1H42h-1h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1v2.36 c0,3.535,1.845,6.748,4.827,8.64C42.845,48.892,41,52.105,41,55.64V58h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1h1h14h1h1 c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1v-2.36c0-3.535-1.845-6.748-4.827-8.64C55.155,45.108,57,41.895,57,38.36z M55,55.64V58H43 v-2.36c0-3.319,2.033-6.298,5.197-7.64h1.605C52.967,49.342,55,52.32,55,55.64z M49.803,46h-1.605C45.033,44.658,43,41.68,43,38.36 V36h12v2.36C55,41.68,52.967,44.658,49.803,46z"></path> <path d="M28.555,33.532C29.223,34.451,30.301,35,31.438,35c0.95,0,1.845-0.371,2.518-1.044c0.737-0.737,1.114-1.756,1.033-2.797 s-0.612-1.99-1.459-2.606l-12.944-9.363c-0.396-0.286-0.945-0.242-1.293,0.104c-0.348,0.348-0.391,0.896-0.104,1.293L28.555,33.532 z"></path> <path d="M30,0c-0.553,0-1,0.447-1,1v13.292c0,0.553,0.447,1,1,1s1-0.447,1-1V2.018C45.979,2.546,58,14.896,58,30 c0,0.335-0.014,0.667-0.025,1h2C59.986,30.667,60,30.335,60,30C60,13.458,46.542,0,30,0z"></path> <path d="M2,30c0-7.46,2.9-14.479,8.166-19.764c0.391-0.392,0.389-1.024-0.002-1.414C9.772,8.434,9.14,8.434,8.75,8.824 C3.107,14.486,0,22.007,0,30c0,16.542,13.458,30,30,30c2.771,0,5.451-0.385,8-1.092v-2.079C35.464,57.587,32.78,58,30,58 C14.561,58,2,45.439,2,30z"></path> </g> </g></svg>`,
        metricLabel_2_Value: "12ms Response"
    },

    "extremely-boring-id-name": {
        thumbnailImg: "images/gallery/card2_img.jpg",
        cardBadge: 'INNOVATION',
        cardTitle: 'Green Manufacturing',
        bannerImgLocation: "images/gallery/card2_img_HighRes.jpg",
        bannerImgCredit: `Photo by <a href="https://unsplash.com/@possessedphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Franck V.</a> on <a href="https://unsplash.com/photos/black-and-white-industrial-machine-dRMQiAubdws?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      `,
        bannerImgAlt: "Two robot arms preparing packages photo",
        bannerTitle: "Sustainable Tech",
        contentTitle: "Additive Production & Eco-Materials",
        contentDescription: "Transitioning heavy fabrication plants to localized, low-emission additive manufacturing processes. By upgrading raw material compounds with bio-synthetic substitutes, industrial footprints decrease dramatically while increasing localized supply chain resilience.",
        metricLabel_1: "WASTE DIVERTED",
        metricLabel_1_SVG: `<svg fill="currentColor" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>recycle</title><path d="M24.42,30.55,27,32.1c.42,0,.64-.18.64-.53a2.3,2.3,0,0,0-.3-.94l-5.6-10.51-12.39.3a.78.78,0,0,0-.84.87c0,.13.18.3.53.53l2.57,1.55L8.84,27.6a6.15,6.15,0,0,0-1.13,3A4.91,4.91,0,0,0,8.46,33l8.43,14.7a12.58,12.58,0,0,1-.3-2.64A8,8,0,0,1,18,40.64l6.43-10.09Z"></path><path d="M27.67,22,34.62,11.2q-3.9-8.88-8.28-8.88c-1.76,0-2.94.49-3.55,1.47L16.21,14.3,27.67,22Z"></path><path d="M22,51.15H35.41V37.2H22.49a47.41,47.41,0,0,0-3,4.61,8.66,8.66,0,0,0-1,3.93q0,5.41,3.48,5.41Z"></path><path d="M49.63,19.4l6-10a2.22,2.22,0,0,0,.3-1.1c0-.45-.15-.68-.45-.68a2.53,2.53,0,0,1-.61.23L52.12,9,49.63,4.09Q48,.77,43,.77H27.44a12.15,12.15,0,0,1,3.85,1.7q2.39,1.89,4.88,7.1l3.1,6.5L37,17.17a.6.6,0,0,0-.34.61c0,.37.24.59.72.64l12.29,1Z"></path><path d="M55.6,49.07l8.69-15.8a9.69,9.69,0,0,1-4.19,2.95,17.27,17.27,0,0,1-5.18.61H45.24v-2q0-1.17-.57-1.17a.65.65,0,0,0-.6.3L38,44.57l6.35,9.76c.48.73.89,1,1.24.86s.53-.28.53-.56V51.3h5.37a4.33,4.33,0,0,0,4.16-2.23Z"></path><path d="M51.82,34.82H57.6A6.91,6.91,0,0,0,61.91,33q2.39-1.89,2.38-4a3.47,3.47,0,0,0-.64-1.93l-6.88-10.5L44.94,23.45l6.88,11.37Z"></path></g></svg>`,
        metricLabel_1_Value: "88.4%",
        metricLabel_2: "LIFECYCLE RATING",
        metricLabel_2_SVG: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 6C20 6 19.1843 6 19.0001 6C16.2681 6 13.8871 4.93485 11.9999 3C10.1128 4.93478 7.73199 6 5.00009 6C4.81589 6 4.00009 6 4.00009 6C4.00009 6 4 8 4 9.16611C4 14.8596 7.3994 19.6436 12 21C16.6006 19.6436 20 14.8596 20 9.16611C20 8 20 6 20 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
        metricLabel_2_Value: "Grade-A Eco"
    },

    "madam-herta-is-a-peerless-gem": {
        thumbnailImg: "images/gallery/card3_img.jpg",
        cardBadge: 'INDUSTRY',
        cardTitle: 'Circular Logistics',
        bannerImgLocation: "images/gallery/card3_img_HighRes.jpg",
        bannerImgCredit: `Photo by <a href="https://unsplash.com/@timelabpro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Timelab</a> on <a href="https://unsplash.com/photos/city-with-high-rise-buildings-during-night-time-sWOvgOOFk1g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      `,
        bannerImgAlt: "A high-angle, wide shot of a massive shipping container terminal at dusk, with rows of stacked cargo containers illuminated by warm industrial lights and large gantry cranes lining the harbor.",
        bannerTitle: "Clean Operations",
        contentTitle: "Automated Fleet Dynamics & Routing",
        contentDescription: "Deploying predictive navigation arrays across logistics networks to optimize cargo distribution lanes. Combining alternative fuel powertrains with responsive freight scheduling ensures regional shipping pipelines hit baseline emission reductions seamlessly.",
        metricLabel_1: "CARBON OFFSET",
        metricLabel_1_SVG: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M7 7L12 13L16 9L21 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
        metricLabel_1_Value: "4,120 Metric Tons",
        metricLabel_2: "FLEET OPTIMIZATION",
        metricLabel_2_SVG: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.017 14.669L23 13.564l-.012-3.208-2.996-1.085a8.455 8.455 0 0 0-.437-1.05l1.329-2.893-2.277-2.26-2.886 1.351a8.396 8.396 0 0 0-1.052-.436L13.564 1l-3.208.012-1.085 2.996a8.485 8.485 0 0 0-1.05.437L5.328 3.116l-2.26 2.276L4.419 8.28a8.378 8.378 0 0 0-.436 1.052L1 10.436l.012 3.208 2.996 1.085a8.46 8.46 0 0 0 .437 1.05l-1.329 2.893 2.276 2.26 2.887-1.351a8.383 8.383 0 0 0 1.052.436L10.436 23l3.208-.012 1.085-2.996a8.478 8.478 0 0 0 1.05-.437l2.893 1.329 2.26-2.276-1.351-2.887a8.382 8.382 0 0 0 .436-1.052zm-.287 3.73l-1.275 1.285-2.694-1.238-.429.215a7.612 7.612 0 0 1-.928.385l-.452.156-1.01 2.789-1.81.007-1.03-2.779-.456-.151a7.394 7.394 0 0 1-.926-.385l-.43-.21-2.688 1.257-1.286-1.275 1.239-2.695-.216-.43a7.551 7.551 0 0 1-.386-.926l-.155-.452-2.79-1.01-.005-1.81 2.777-1.03.152-.456a7.46 7.46 0 0 1 .384-.927l.212-.43L4.27 5.601l1.275-1.285 2.694 1.238.429-.215a7.612 7.612 0 0 1 .928-.385l.452-.156 1.01-2.789 1.81-.007 1.03 2.779.456.151a7.35 7.35 0 0 1 .925.385l.43.211L18.4 4.27l1.285 1.275-1.239 2.695.216.43a7.551 7.551 0 0 1 .386.926l.155.452 2.79 1.01.005 1.81-2.777 1.03-.152.456a7.46 7.46 0 0 1-.384.927l-.212.43zM12 7.2a4.8 4.8 0 1 0 4.8 4.8A4.8 4.8 0 0 0 12 7.2zm0 8.6a3.8 3.8 0 1 1 3.8-3.8 3.804 3.804 0 0 1-3.8 3.8z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>`,
        metricLabel_2_Value: "91.5% Active"
    },

    "actual-meaningful-id-name": {
        thumbnailImg: "images/gallery/card4_img.jpg",
        cardBadge: 'CONNECTIVITY',
        cardTitle: 'Resilient Networks',
        bannerImgLocation: "images/gallery/card4_img_HighRes.jpg",
        bannerImgCredit: `Photo by <a href="https://unsplash.com/@kirill2020?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kirill Sh</a> on <a href="https://unsplash.com/photos/green-and-white-electric-device-eVWWr6nmDf8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      `,
        bannerImgAlt: "Close-up of a telecommunications optical transport chassis in a server rack, with bundled yellow fiber optic cables plugged into modular line cards using green and blue connectors.",
        bannerTitle: "Digital Inclusion",
        contentTitle: "Universal Broad-Spectrum Telemetry",
        contentDescription: "Expanding high-speed data architecture to rural and underserved industrial hubs. Broadening the telemetry pipeline lets local operations deploy real-time edge computing tools, bringing remote manufacturing capabilities into the global technological loop.",
        metricLabel_1: "COVERAGE DENSITY",
        metricLabel_1_SVG: `<svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 293.699 293.699" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M26.85,240c-6.904,0-12.5,5.598-12.5,12.5v28.699c0,6.902,5.596,12.5,12.5,12.5c6.903,0,12.5-5.598,12.5-12.5V252.5 C39.35,245.598,33.752,240,26.85,240z"></path> <path d="M86.85,180c-6.903,0-12.5,5.598-12.5,12.5v88.699c0,6.902,5.597,12.5,12.5,12.5s12.5-5.598,12.5-12.5V192.5 C99.35,185.598,93.752,180,86.85,180z"></path> <path d="M146.85,120c-6.903,0-12.5,5.597-12.5,12.5v148.7c0,6.903,5.597,12.499,12.5,12.499c6.902,0,12.5-5.596,12.5-12.499V132.5 C159.35,125.597,153.752,120,146.85,120z"></path> <path d="M206.85,60c-6.903,0-12.5,5.597-12.5,12.5v208.7c0,6.903,5.597,12.499,12.5,12.499s12.5-5.596,12.5-12.499V72.5 C219.35,65.597,213.753,60,206.85,60z"></path> <path d="M266.85,0c-6.903,0-12.5,5.597-12.5,12.5v268.7c0,6.903,5.597,12.499,12.5,12.499s12.5-5.596,12.5-12.499V12.5 C279.35,5.597,273.753,0,266.85,0z"></path> </g> </g> </g></svg>`,
        metricLabel_1_Value: "99.1% Accessible",
        metricLabel_2: "BANDWIDTH SCALE",
        metricLabel_2_SVG: `<svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1594_" d="M72.8,24.9L53.4,66.7c-1.7,4.3-4.7,6.8-8,6.8c-2.7,0-5-1.4-6.3-3.6c-1.4-2.6-1.3-5.8,0.4-8.5v0l25.4-40.7 c1.3-2,3.9-2.7,6-1.6C73,20.2,73.8,22.7,72.8,24.9z M79.6,37c-1.5-1.6-4-1.7-5.7-0.2c-1.6,1.5-1.7,4-0.2,5.7 C80.3,49.7,84,59.1,84,69c0,2.2,1.8,4,4,4s4-1.8,4-4C92,57.1,87.6,45.7,79.6,37z M49.2,30.4c2.2,0.2,4.1-1.4,4.3-3.6 c0.2-2.2-1.4-4.1-3.6-4.3c-1.3-0.1-2.6-0.2-3.9-0.2c-25.4,0-46,21-46,46.8c0,2.2,1.8,4,4,4s4-1.8,4-4c0-21.4,17-38.8,38-38.8 C47.1,30.2,48.2,30.3,49.2,30.4z"></path> </g></svg>`,
        metricLabel_2_Value: "10 Gbps Edge"
    },
}


const popupOverlay = document.getElementById('popup-overlay');
const thumbnailList = document.querySelectorAll('.gallery-thumbnail');

thumbnailList.forEach(card => {
    const cardID = card.getAttribute('data-id');
    const data = popupData[cardID];
    // injecting thumbnail Image, badge, card title
    if (data) {
        const imgElement = card.querySelector('.gallery-card-img');
        imgElement.setAttribute('src', data.thumbnailImg);
        imgElement.setAttribute('alt', data.bannerImgAlt);

        const thumbnailBadge = card.querySelector('.thumbnail-badge');
        thumbnailBadge.innerHTML = data.cardBadge;

        const thumbnailTitle = card.querySelector('.thumbnail-title');
        thumbnailTitle.innerHTML = data.cardTitle
    }


    // 1) Click Event: Popup Injection
    card.addEventListener('click', () => {

        // inject if a match found
        if (data) {

            // bannerImgCredit string parsed into a temporary dom struct
            const parser = new DOMParser;
            const tempCreditDoc = parser.parseFromString(data.bannerImgCredit, 'text/html');

            // find all <a> elements inside and inject class 'generic-link' and target, rel attributes
            const creditLinks = tempCreditDoc.querySelectorAll('a');

            creditLinks.forEach(link => {
                link.classList.add('generic-link', 'popup-banner-image-credit-link');
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            });

            const processedBannerImgCredit = tempCreditDoc.body.innerHTML;

            popupOverlay.innerHTML = `
            <div class="popup-card">
                <div class="close-btn" id="popup-close-btn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                                fill="#ffffff"></path>
                        </g>
                    </svg>
                </div>
                <div class="popup-banner">
                    <div class="popup-banner-layer1">
                        <img src="${data.bannerImgLocation}" alt="${data.bannerImgAlt}">
                    </div>
                    <div class="popup-banner-layer2">
                        <h1>${data.bannerTitle}</h1>
                    </div>
                </div>
                <div class="popup-content-container">
                    <div class="popup-long-title-n-des">
                        <h2>${data.contentTitle}</h2>
                        <p>${data.contentDescription}</p><br><br>
                        <p>${processedBannerImgCredit}</p>
                    </div>
                    <div class="popup-content-metrics">
                        <div class="metric-box">
                            <div class="metric-label">${data.metricLabel_1}</div>
                            <div class="metric-value">
                                <div class="metric-symbol-svg">${data.metricLabel_1_SVG}</div>
                                <div class="metric-value-text">${data.metricLabel_1_Value}</div>
                            </div>
                        </div>
                        <div class="metric-box">
                            <div class="metric-label">${data.metricLabel_2}</div>
                            <div class="metric-value">
                                <div class="metric-symbol-svg">${data.metricLabel_2_SVG}</div>
                                <div class="metric-value-text">${data.metricLabel_2_Value}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popup-customization-panel">
                    <div class="switch-container">
                        <span class="switch-label">Appearance</span>
                        <div class="switches border-radius-9999px" id="dark-mode-light-mode">
                            <button class="dark-light-mode" data-id="custom-panel-btn" data-name="theme" data-value="light-mode" id="is-active-button">
                                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                                    stroke-width="0.24000000000000005">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Light">
                                            <g>
                                                <path
                                                    d="M12,18.09A6.09,6.09,0,1,1,18.09,12,6.1,6.1,0,0,1,12,18.09ZM12,6.91A5.09,5.09,0,1,0,17.09,12,5.1,5.1,0,0,0,12,6.91Z">
                                                </path>
                                                <path d="M11.5,2.568v1.6a.5.5,0,1,0,1,0v-1.6a.5.5,0,1,0-1,0Z"></path>
                                                <path d="M12.5,21.432v-1.6a.5.5,0,0,0-1,0v1.6a.5.5,0,1,0,1,0Z"></path>
                                                <path d="M21.432,11.5h-1.6a.5.5,0,0,0,0,1h1.6a.5.5,0,1,0,0-1Z"></path>
                                                <path d="M2.568,12.5h1.6a.5.5,0,1,0,0-1h-1.6a.5.5,0,1,0,0,1Z"></path>
                                                <path
                                                    d="M18.316,4.977l-.992.992-.141.141a.514.514,0,0,0-.146.353.508.508,0,0,0,.146.354.5.5,0,0,0,.354.146.515.515,0,0,0,.353-.146l.992-.992.141-.141a.515.515,0,0,0,.147-.354.508.508,0,0,0-.147-.353.5.5,0,0,0-.353-.147.522.522,0,0,0-.354.147Z">
                                                </path>
                                                <path
                                                    d="M5.684,19.023l.992-.992.141-.141a.514.514,0,0,0,.146-.353.508.508,0,0,0-.146-.354.5.5,0,0,0-.354-.146.515.515,0,0,0-.353.146l-.992.992-.141.141a.515.515,0,0,0-.147.354.508.508,0,0,0,.147.353.5.5,0,0,0,.353.147.522.522,0,0,0,.354-.147Z">
                                                </path>
                                                <path
                                                    d="M19.023,18.316l-.992-.992-.141-.141a.514.514,0,0,0-.353-.146.508.508,0,0,0-.354.146.5.5,0,0,0-.146.354.515.515,0,0,0,.146.353l.992.992.141.141a.515.515,0,0,0,.354.147.508.508,0,0,0,.353-.147.5.5,0,0,0,.147-.353.522.522,0,0,0-.147-.354Z">
                                                </path>
                                                <path
                                                    d="M4.977,5.684l.992.992.141.141a.514.514,0,0,0,.353.146.508.508,0,0,0,.354-.146.5.5,0,0,0,.146-.354.515.515,0,0,0-.146-.353l-.992-.992-.141-.141A.515.515,0,0,0,5.33,4.83a.508.508,0,0,0-.353.147.5.5,0,0,0-.147.353.522.522,0,0,0,.147.354Z">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <button class="dark-light-mode" data-id="custom-panel-btn" data-name="theme" data-value="dark-mode">
                                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M3,11.985A9.811,9.811,0,0,0,12.569,22a9.528,9.528,0,0,0,8.309-5.059,1,1,0,0,0-.947-1.477l-.11.008c-.131.01-.263.02-.4.02a7.811,7.811,0,0,1-7.569-8.015,8.378,8.378,0,0,1,1.016-4A1,1,0,0,0,11.923,2,9.855,9.855,0,0,0,3,11.985Zm7.343-7.652a10.382,10.382,0,0,0-.488,3.144A9.89,9.89,0,0,0,18.137,17.4,7.4,7.4,0,0,1,12.569,20,7.811,7.811,0,0,1,5,11.985,7.992,7.992,0,0,1,10.343,4.333Z">
                                        </path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="switch-container">
                        <span class="switch-label">Font Style</span>
                        <div class="switches" id="font-change">
                            <button class="font-change-button" id="is-active-button" data-id="custom-panel-btn" data-name="font" data-value="font-default">Default</button>
                            <button class="font-change-button" data-id="custom-panel-btn" data-name="font" data-value="font-mono">Mono</button>
                            <button class="font-change-button" data-id="custom-panel-btn" data-name="font" data-value="font-comic">Comic</button>
                        </div>
                    </div>
                    <div class="switch-container">
                        <span class="switch-label">Readability Mode</span>
                        <div class="switches" id="readability">
                            <button class="readability-button" data-id="custom-panel-btn" data-name="readability-btn" data-value="font-readable">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M13 6L21 6.00048M13 12L21 12.0005M13 18L21 18.0005M6 4V20M6 4L3 7M6 4L9 7M6 20L3 17M6 20L9 17"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            // activate the popup overlay and disable scrolling on main body
            popupOverlay.classList.add('is-active');
            document.body.classList.add('modal-open');
        }
    });

    // 2) Hover enter event
    card.addEventListener('mouseenter', () => {
        card.classList.add('is-hovered');
    });

    // 3) Hover leave event
    card.addEventListener('mouseleave', () => {
        card.classList.remove('is-hovered');
    });
});

function closePopup() {
    // strip the is-active class from the overlay making the element fall back to display: hidden
    popupOverlay.classList.remove('is-active');
    document.body.classList.remove('modal-open');

    // empty out the injected HTML code
    popupOverlay.innerHTML = '';
}

popupOverlay.addEventListener('click', (e) => {

    // popup close event handling
    const clickedOverlay = e.target.id === 'popup-overlay';
    const clickedCloseBtn = e.target.closest('#popup-close-btn');
    if (clickedCloseBtn || clickedOverlay) {
        closePopup();
    }

    // customize panel even handling
    const customizeBtn = e.target.closest('[data-id="custom-panel-btn"]');

    if (customizeBtn) {
        const name = customizeBtn.dataset.name;
        const value = customizeBtn.dataset.value;
        // debug
        console.log(`Custom panel clicked event name: ${name} --- value: ${value}`);

        if (name === "theme") {
            if (!(customizeBtn.id === "is-active-button")) { // changes are actually needed to be done
                const allThemeBtns = popupOverlay.querySelectorAll('[data-name="theme"]');
                // pulling in necessary elements that is about to be changed
                const contentContainerElement = popupOverlay.querySelector('.popup-content-container');
                const customizePanelElement = popupOverlay.querySelector('.popup-customization-panel');

                allThemeBtns.forEach(btn => btn.id="");

                customizeBtn.id = "is-active-button";

                if (value === "light-mode") {
                    contentContainerElement.classList.remove('is-dark-mode');
                    customizePanelElement.classList.remove('is-dark-mode');

                } else if (value === "dark-mode") {
                    contentContainerElement.classList.add('is-dark-mode');
                    customizePanelElement.classList.add('is-dark-mode');
                }
            }
        } else if (name === "font") {
            if (!(customizeBtn.id === "is-active-button")) { // changes are needed
                const allFontBtns = popupOverlay.querySelectorAll('[data-name="font"]');
                // pulling the element that is about to b changed
                const longTitleDescriptionElement = popupOverlay.querySelector('.popup-long-title-n-des');
                let fontClassToBeRemoved;


                allFontBtns.forEach(btn => {
                    if (btn.id === "is-active-button") {
                        btn.id = "";
                        // getting the data-vaule of the previous active button to remove it from the .popup-long-title-n-des element classList
                        fontClassToBeRemoved = btn.dataset.value;
                    }
                });

                customizeBtn.id = "is-active-button";

                longTitleDescriptionElement.classList.remove(fontClassToBeRemoved);
                longTitleDescriptionElement.classList.add(customizeBtn.dataset.value);
            }
        } else if (name === "readability-btn") {
            const longTitleDescriptionElement = popupOverlay.querySelector('.popup-long-title-n-des');

            if (customizeBtn.id === "is-active-button") {
                customizeBtn.id = "";
                longTitleDescriptionElement.classList.remove(customizeBtn.dataset.value);
            } else if (customizeBtn.id === "") {
                customizeBtn.id = "is-active-button";
                longTitleDescriptionElement.classList.add(customizeBtn.dataset.value);
            }
        }

    }

});