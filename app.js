//::::::::::::::::::::::::::::::::::::::::::::::::::
// Анимация текстовых параграфов
//::::::::::::::::::::::::::::::::::::::::::::::::::

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 0.5;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);

}


const animIMGs = document.querySelectorAll("._anim-IMG");

if (animIMGs.length > 0) {
  window.addEventListener("scroll", animOnScrollIMG);

  function animOnScrollIMG() {
    for (let index = 0; index < animIMGs.length; index++) {
      const animIMG = animIMGs[index];
      const animIMGHeight = animIMG.offsetHeight;
      const animIMGOffset = offsetIMG(animIMG).top;
      const animIMGStart = 3;

      let animIMGPoint = window.innerHeight - animIMGHeight / animIMGStart;
      if (animIMGHeight > window.innerHeight) {
        animIMGPoint = window.innerHeight - window.innerHeight / animIMGStart;
      }

      if ((scrollY > animIMGOffset - animIMGPoint) && scrollY < (animIMGOffset + animIMGHeight)) {
        animIMG.classList.add('_active-IMG');
      } else {
        if (!animIMG.classList.contains('_anim-no-IMG')) {
          animIMG.classList.remove('_active-IMG');
        }
      }
    }
  }

  function offsetIMG(el) {
    const rectIMG = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rectIMG.top + scrollTop, left: rectIMG.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScrollIMG();
  }, 300);
}

