; (function () {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [40.7588017, -73.9873193],
			zoom: 16
		}, {
			searchControlProvider: 'yandex#search'
		}),

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				balloonContent: '1556 Broadway, suite 416 New York, NY, 10120, USA'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: './img/icon/map_icon.png',
				// Размеры метки.
				iconImageSize: [67, 72],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38]
			}),

			myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
				hintContent: 'Собственный значок метки с контентом',
				balloonContent: 'А эта — новогодняя',
				iconContent: '12'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#imageWithContent',
				// Своё изображение иконки метки.
				iconImageHref: '',
				// Размеры метки.
				iconImageSize: [48, 48],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-24, -24],
				// Смещение слоя с содержимым относительно слоя с картинкой.
				iconContentOffset: [15, 15],
				// Макет содержимого.
				iconContentLayout: MyIconContentLayout
			});
		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemarkWithContent);
	});
})();
