const schemeSvg = document.querySelector('.scheme-svg'); 
schemeSvg.addEventListener('click', (event) => {
    const totalPriceTag = document.querySelector('.price-total');
    let cost = 500;
    let totalPrice = 0;

    if ( !event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    } 
     
});