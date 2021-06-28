const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.hero-header, .service-section, .skil-section, .qualification, .portfolio, .work-section, .contact-section`,{
    interval: 200
})