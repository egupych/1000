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
			const animStart = 0.6;

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

// Получаем элемент, который будем анимировать
const numberElement1 = document.getElementById("number1");

// Устанавливаем начальное значение
let number1 = 889976;

// Функция для анимации числа
function animateNumber1() {
  // Если число достигло нужного значения, останавливаем анимацию
  if (number1 >= 890000) {
    clearInterval(interval1);
  } else {
    // Увеличиваем значение числа на 1 и обновляем текст элемента
    number1++;
    numberElement1.textContent = number1;
  }
}

// Запускаем анимацию с интервалом в 50 миллисекунд
const interval1 = setInterval(animateNumber1, 100);



// Получаем элемент, который будем анимировать
const numberElement2 = document.getElementById("number2");

// Устанавливаем начальное значение
let number2 = 0;

// Функция для анимации числа
function animateNumber2() {
  // Если число достигло нужного значения, останавливаем анимацию
  if (number2 >= 24) {
    clearInterval(interval2);
  } else {
    // Увеличиваем значение числа на 1 и обновляем текст элемента
    number2++;
    numberElement2.textContent = number2;
  }
}

// Запускаем анимацию с интервалом в 50 миллисекунд
const interval2 = setInterval(animateNumber2, 100);




// const numberElement3 = document.getElementById("number3");

// let number3 = 1;

// function animateNumber3() {
//   if (number3 >= 25) {
//     clearInterval(interval3);
//   } else {
//     number3++;
//     numberElement3.textContent = number3;
//   }
// }

// const interval3 = setInterval(animateNumber3, 100);

const text = "с намёком на 80-е";
const delay = 100; // задержка между появлением каждой буквы

const target = document.getElementById('typing-effect');

function typeEffect(text, i) {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typeEffect(text, i);
    }, delay);
  }
}

typeEffect(text, 0);


// Плавная прокрутка
function setScrollIntoView1(top) {
	const biography = document.querySelector('.rocket_up');
	biography.scrollIntoView(top);
}

function setScrollIntoView1Options(top) {
	const biography = document.querySelector('.rocket_up');
	biography.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}


window.addEventListener('scroll', function() {
  var rocket = document.getElementById('rocket');
  var scrollPositionRocket = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPositionRocket >= window.innerHeight) {
    rocket.style.display = 'block';
  } else {
    rocket.style.display = 'none';
  }
});



 // JavaScript код для отображения попапа при достижении конца страницы
 window.addEventListener('scroll', function() {
  var popup = document.getElementById('popup');
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  if (scrollTop + windowHeight+100 >= documentHeight) {
    // Показываем попап
    popup.style.top = '0';
  } else {
    // Скрываем попап
    popup.style.top = '-100%';
  }
});

// JavaScript код для закрытия попапа при клике вне области попапа
document.addEventListener('click', function(event) {
  var popup = document.getElementById('popup');
  var isClickInsidePopup = popup.contains(event.target);
  
  if (!isClickInsidePopup) {
    popup.style.top = '-100%';
  }
});

document.getElementById("popup").addEventListener("click", function() {
window.location.href = "https://egupych.github.io/1001/";
});



function toggleImageSize(image) {
    image.classList.toggle('expanded');
}