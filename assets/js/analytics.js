window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'UA-124208692-1');

function sendAnalyticsEvent(action, category, label) {
    gtag('event', action, { 'event_category': category, 'event_label': label });
}