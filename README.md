# Sally Nails — TANEM

Клиентский сайт Sally Nails на базе TANEM Master Template v1.

## Что меняется для клиента

- `site-data.mjs` — данные, услуги, цены, ссылки, отзывы, SEO и акции.
- `assets/images/master.jpg` — основная фотография.
- `assets/images/logo.jpg` — логотип, если есть.
- `assets/images/portfolio/01.jpg`, `02.jpg` и далее — портфолио.

## Изображения

Минимум для публикации:

```text
assets/
  images/
    master.jpg
    logo.jpg          # необязательно
    portfolio/
      01.jpg
      02.jpg
      03.jpg
      04.jpg
      05.jpg
```

После появления `master.jpg` и минимум пяти JPG в `portfolio` GitHub Actions соберёт сайт автоматически.

Дизайн и структура берутся из зафиксированной версии TANEM Master Template v1; клиентский репозиторий хранит только данные и фотографии.
