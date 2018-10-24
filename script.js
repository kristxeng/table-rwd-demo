document.addEventListener('DOMContentLoaded', ()=> {
  let mediaQuery = window.matchMedia( '(max-width: 480px)' );

  if( mediaQuery.matches ) {

    let theadRow = document.querySelector('.thead_row');
    let tbodyRow = document.querySelectorAll('tbody > tr');
    
    tbodyRow.forEach( item => {
      item.insertAdjacentElement('beforebegin', theadRow.cloneNode(true));
    })
  }
})