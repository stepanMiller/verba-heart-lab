import { SceneNav } from "../scene-nav";
import { sitePath } from "../site-path";

export default function ChoiceScene() {
  return (
    <main className="experience choice-experience">
      <header className="topline"><img className="verba-mark" src={sitePath("/verba-wordmark.png")} alt="VERBA" /><SceneNav current="10" previous="/case" next="/90-days" /></header>
      <section className="copy choice-copy" aria-labelledby="choice-title">
        <div className="eyebrow">Риск — не диагноз и не приговор</div>
        <h1 id="choice-title">Риск нужен<br />не для страха.<br />Для выбора.</h1>
        <p className="lead">Ценность оценки риска — понять, какие из нескольких факторов действительно меняют вашу траекторию, и где можно повлиять на неё раньше.</p>
      </section>

      <section className="choice-balance" aria-label="Неизменяемые и модифицируемые факторы">
        <div className="choice-fixed">
          <span>Не изменить</span>
          <strong>Возраст</strong>
          <strong>Генетическая<br />предрасположенность</strong>
          <strong>Перенесённые<br />заболевания и события</strong>
        </div>
        <div className="choice-divider"><i /><b>фокус</b></div>
        <div className="choice-action">
          <span>Можно обсуждать и корректировать</span>
          <strong>Повышенное давление</strong>
          <strong>Курение</strong>
          <strong>Атерогенные липиды:<small>ЛПНП, ЛПОНП, Lp(a)</small></strong>
          <strong>Метаболические факторы:<small>глюкоза, HOMA-IR, HbA1c</small></strong>
          <strong>Физическая активность</strong>
        </div>
      </section>

      <section className="choice-context" aria-label="Сосудистый контекст">
        <span>Сосудистый контекст</span>
        <p><strong>вч-СРБ · гомоцистеин · 8-ОН-дГ</strong> — дополнительные маркеры воспаления, оксидативного стресса и состояния сосудистой стенки. Не являются самостоятельными диагностическими критериями; интерпретируются только вместе с общей клинической картиной.</p>
      </section>

      <footer className="footline"><p>Профилактика — не попытка за один день сделать идеальными все показатели.</p><span>Сначала · 1–3 главных фактора</span></footer>
    </main>
  );
}
