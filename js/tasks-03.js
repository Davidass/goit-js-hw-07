// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryRef = image => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('gallery-items');
  // console.log(listItemRef);
  const imgRef = document.createElement('img');
  imgRef.setAttribute('src', image.url);
  imgRef.setAttribute('alt', image.alt);
  imgRef.setAttribute('width', '360px');
  imgRef.setAttribute('height', '240px');
  listItemRef.append(imgRef);

  return listItemRef;
};

const galleryGards = images.map(image => createGalleryRef(image));
// console.log(galleryGards);

const galleryListRef = document.querySelector('#gallery');
console.log(galleryListRef);

galleryListRef.append(...galleryGards);
