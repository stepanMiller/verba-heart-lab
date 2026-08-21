# VERBA · Сердце до симптомов

Интерактивная пациентская лекция о профилактической кардиологии: 12 сцен, medical CGI, живые графические состояния и адаптация под desktop/mobile.

Публичные версии:

- стабильная V1: https://stepanmiller.github.io/verba-heart-lab/
- V2: https://stepanmiller.github.io/verba-heart-lab/v2/

В V2 desktop-навигация остаётся послайдовой, а на мобильном телефоне все 12 сцен собраны в одну вертикальную ленту и листаются вверх-вниз.

## GitHub Pages

Публикация выполняется автоматически из `main` через GitHub Actions. Workflow собирает исходники ветки `v2` и обновляет каталог `/v2/` в ветке `gh-pages`.

Локальная проверка Pages-сборки V2:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/verba-heart-lab/v2 npm run build:pages
```
