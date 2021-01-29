let  time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

	function  nextImage ( )  {

	    images[currentImageIndex]
	        .classList.remove("selected")

	    currentImageIndex++

	    if (currentImageIndex >= max)
	        currentImageIndex = 0

	     images[currentImageIndex]
	        .classList.add("selected")
	}

	function  start ( )  {
	    setInterval ( ( )  =>  {
	        // troca de imagem
	        nextImage( )
	    } ,  time )
	}

window.addEventListener("load", start)
/* função de troca de imagem do banner */


let  time1 = 2000,
    currentImageIndex1 = 0,
    images1 = document
                .querySelectorAll("#merchan img")
    max1 = images1.length;

	function  nextImage1 ( )  {

	    images1[currentImageIndex1]
	        .classList.remove("selected")

	    currentImageIndex1++

	    if (currentImageIndex1 >= max1)
	        currentImageIndex1 = 0

	     images1[currentImageIndex1]
	        .classList.add("selected")
	}

	function  start1 ( )  {
	    setInterval ( ( )  =>  {
	        // troca de imagem
	        nextImage1( )
	    } ,  time1 )
	}

window.addEventListener("load", start1)
/* função de troca de imagem do merchan */


let  time2 = 2000,
    currentImageIndex2 = 0,
    images2 = document
                .querySelectorAll("#merchan2 img")
    max2 = images2.length;

	function  nextImage2 ( )  {

	    images2[currentImageIndex2]
	        .classList.remove("selected")

	    currentImageIndex2++

	    if (currentImageIndex2 >= max2)
	        currentImageIndex2 = 0

	     images2[currentImageIndex2]
	        .classList.add("selected")
	}

	function  start2 ( )  {
	    setInterval ( ( )  =>  {
	        // troca de imagem
	        nextImage2( )
	    } ,  time2 )
	}

window.addEventListener("load", start2)
/* função de troca de imagem do merchan2 */

let  time3 = 2000,
    currentImageIndex3 = 0,
    images3 = document
                .querySelectorAll("#merchan3 img")
    max3 = images3.length;

	function  nextImage3 ( )  {

	    images3[currentImageIndex3]
	        .classList.remove("selected")

	    currentImageIndex3++

	    if (currentImageIndex3 >= max3)
	        currentImageIndex3 = 0

	     images3[currentImageIndex3]
	        .classList.add("selected")
	}

	function  start3 ( )  {
	    setInterval ( ( )  =>  {
	        // troca de imagem
	        nextImage3( )
	    } ,  time3 )
	}

window.addEventListener("load", start3)
/* função de troca de imagem do merchan3 */

let  time4 = 2000,
    currentImageIndex4 = 0,
    images4 = document
                .querySelectorAll("#merchan4 img")
    max4 = images4.length;

	function  nextImage4 ( )  {

	    images4[currentImageIndex4]
	        .classList.remove("selected")

	    currentImageIndex4++

	    if (currentImageIndex4 >= max4)
	        currentImageIndex4 = 0

	     images4[currentImageIndex4]
	        .classList.add("selected")
	}

	function  start4 ( )  {
	    setInterval ( ( )  =>  {
	        // troca de imagem
	        nextImage4( )
	    } ,  time4 )
	}

window.addEventListener("load", start4)
/* função de troca de imagem do merchan4 */