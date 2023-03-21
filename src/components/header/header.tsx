import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://github.io/" target="_blank">
          <QwikLogo />
          <QwikLogo />
        </a>
      </div>
    </header>
  );
});
