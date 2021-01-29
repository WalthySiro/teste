const $menu = document.querySelector('.menu')

const $btnMenuOpen = document.querySelector('.btnMenuOpen')
const $btnMenuClose = document.querySelector('.btnMenuClose')

$btnMenuOpen.addEventListener('click', function(){
	$menu.classList.add('menuOpen')
	/*$btnMenuOpen.classList.add('menuGrow')*/

})

$btnMenuClose.addEventListener('click', function(){
	$menu.classList.remove('menuOpen')
	/*$btnMenuOpen.classList.remove('menuGrow')*/

})