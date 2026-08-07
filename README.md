# VERBA · Сердце до симптомов

Интерактивная пациентская лекция о профилактической кардиологии: 12 сцен, medical CGI, живые графические состояния и адаптация под desktop/mobile.

Публичная версия: https://stepanmiller.github.io/verba-heart-lab/

## GitHub Pages

Публикация выполняется автоматически из `main` через GitHub Actions. Для Pages-сборки используется статический экспорт Next.js с базовым путём `/verba-heart-lab`.

Локальная проверка Pages-сборки:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/verba-heart-lab npm run build:pages
```
