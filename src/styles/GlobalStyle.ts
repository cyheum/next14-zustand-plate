import { createGlobalStyle } from 'styled-components'

import { color } from './colors'
import { mixins } from './mixin'
import { primaryFont } from './typography'

export const GlobalStyle = createGlobalStyle`

.stop_pinch_zoom {
  touch-action: pan-y;
}

.overflow_hidden {
  position: relative;
  height: 100%;
  overflow: hidden;
}

* {
    box-sizing: border-box;
    background-color: transparent;

    
    &:focus {
      outline: none;
    }
  }

  html {
    height: 100%;
    font-family: ${primaryFont},'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;

    @media (max-width: 1279px) {
      ${mixins.noScrollbar()}
      ${mixins.noTabHighlight()}
    }
  }

  body {
    height: 100%;
    background: #fff;
    color: ${color.gray[850]};
  }

  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  table,
  th,
  td,
  form,
  fieldset,
  legend,
  input,
  textarea,
  button,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section,
  audio,
  video,
  blockquote,
  hr {
    margin: 0;
    padding: 0;
  }

  strong{
    font-style: normal;
    font-weight: 600;
  }

  em {
    font-style: normal;
    font-weight: 400;
  }

  img,
  fieldset {
    border: 0;
  }

  img {
    vertical-align: top;
    ${mixins.stopDrag()}
  }

  svg:not(:root) {
    overflow: hidden;
  }

  ul,
  ol {
    list-style: none;
  }

  address,
  cite,
  dfn {
    font-style: normal;
  }

  abbr {
    text-decoration: none;
  }

  a,
  label,
  button,
  [type='checkbox'],
  [type='radio'] {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(26, 26, 26, 0.301961);
  }

  [type='checkbox'],
  [type='radio'],
  textarea {
    -webkit-appearance: none;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  table {
    border-collapse: collapse;
  }

  hr {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    font-family: 'Pretendard', -apple-system;
    border: none;
    font-size: 1rem;
    resize: none;
    -webkit-overflow-scrolling: touch;
  }

  button {
    overflow: visible;
    border: none;
    border-radius: 0;
    background: none;
    user-select: none;
    font-size: 1rem;
    font-family: 'Pretendard', -apple-system;
    ${mixins.noTabHighlight()}
  }

  button[disabled] {
    cursor: default;
  }

  button,
  [role='button'] {
    cursor: pointer;
    outline: none;
  }


  input[type='text'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type='text']::-ms-clear {
    display: none;
  }

  input[type='password']::-ms-reveal {
    display: none;
  }

  input {
    font-family: 'Pretendard', -apple-system;
    border: none;
    font-size: 1rem;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;

    &::placeholder {
      color: ${color.gray[400]};
    }
  }

  select {
    border: 0;
    background: transparent;
    -webkit-appearance: none;
  }
`
