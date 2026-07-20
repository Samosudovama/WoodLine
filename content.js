//Этот файл-сборщик собирает всё в один объект, как раньше, но данные приходят из отдельных файлов.

import { galleryData } from "./content/gallery.js";
import { aboutData } from "./content/about.js";
import { servicesData } from "./content/services.js";
import { contactsData } from "./content/contacts.js";

const pageContents = {
   about: aboutData,
   gallery: galleryData,
   services: servicesData,
   contacts: contactsData,
};

// Чтобы этот файл можно было импортировать в script.js, экспортируем объект.
export { pageContents };

//Теперь script.js импортирует готовый объект pageContents и работает с ним.
