import { css, keyframes } from 'styled-components';

import { color } from './colors';

export const size = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1200px',
  desktop: '1440px',
  desktopL: '2560px',
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

const appear = keyframes`
  0% {
    /* max-height: 0; */
    opacity: 0;
    transform: translateY(-1rem)
  } 100% {
    /* max-height: 9.375rem; */
    opacity: 1;
    transform: translateY(0)
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem)
  } 100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

const loading = keyframes`
  to {
      background-position-x: -20%;
  }
`;

export const mixins = {
  wantedSans: css`
    font-family: 'Wanted Sans Variable', 'Wanted Sans';
  `,
  flexSet: (
    justifyContent = 'center',
    alignItems = 'center',
    flexDirection = 'row'
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
  stopDrag: () => css`
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  startDrag: () => css`
    -webkit-user-drag: auto;
    -khtml-user-drag: auto;
    -moz-user-drag: auto;
    -o-user-drag: auto;
    -webkit-touch-callout: auto;
    -webkit-user-select: auto;
    -khtml-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  `,
  imageRendering: () => css`
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  `,
  noScrollbar: () => css`
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; //IE and Edge
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  fontStyle: (weight = 'normal', stretch = 'normal', style = 'normal') => css`
    font-weight: ${weight};
    font-stretch: ${stretch};
    font-style: ${style};
  `,

  lineStyle: (
    lineHeight: number | string = '1.125rem',
    letterSpacing: number | string = 0
  ) => css`
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing}px;
  `,
  ellipsis: (lines = 1) => css`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines};
    white-space: normal; // 플리킹 모듈 nowrap 상속 대비
  `,
  buttonTransition: () => css`
    transition: all 0.15s ease-in-out;

    &:active:enabled {
      opacity: 0.7;
    }

    @media ${device.laptop} {
      &:hover:enabled {
        opacity: 0.7;
      }
    }
  `,
  primaryTransition: (opacity?: number) => css`
    transition: all 0.15s ease-in-out;
    cursor: pointer;

    &:active {
      opacity: ${opacity ?? 0.7};
    }

    @media ${device.laptop} {
      &:hover {
        opacity: ${opacity ?? 0.7};
      }
    }
  `,
  noTabHighlight: () => css`
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  `,
  gradientBlue: () => css`
    color: transparent;
    background: transparent linear-gradient(270deg, #00c2ff 0%, #5400ff 100%) 0%
      0% no-repeat padding-box;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  gradientBlueBack: () => css`
    background: transparent linear-gradient(106deg, #5400ff 0%, #00c2ff 100%) 0%
      0% no-repeat padding-box;
  `,
  appear: (delay = 0) => css`
    animation: ${appear} 0.5s ${delay}s ease-in-out backwards;
  `,
  primaryBoxShadow: () => css`
    background-color: white;
    box-shadow: 0px 0.125rem 0.875rem #0000001f;
  `,
  skeleton: () => css`
    background-color: #ededed;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    );
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s ${loading} ease-in-out infinite;
  `,
  fadeIn: (delay?: number) => css`
    -webkit-animation: ${fadeInUp} 700ms ${delay ?? 0}ms backwards ease-in-out;
    animation: ${fadeInUp} 700ms ${delay ?? 0}ms backwards ease-in-out;
  `,
};

export const customStyles = {
  infoBoxStyle: css`
    width: 100%;
    height: 2.625rem;
    ${mixins.fontStyle()}
    ${mixins.lineStyle()}
  font-size: 1rem;
    border-radius: 0.25rem;
    border: solid 0.0625rem ${color.gray[300]};
  `,
  buttonHoverStyleNormal: css`
    transition: all 0.15s linear;
    -webkit-transition: all 0.15s linear;

    &:active {
      background-color: ${color.purple[450]};
    }

    &:disabled {
      border: solid 0.0625rem rgba(0, 0, 0, 0.1);
      background-color: #babec2;
      cursor: not-allowed;
    }

    @media ${device.laptop} {
      &:hover:enabled {
        background-color: ${color.purple[450]};
      }
    }
  `,
  buttonHoverStyleWhite: css`
    transition: all 0.15s linear;
    -webkit-transition: all 0.15s linear;

    &:active {
      background-color: ${color.purple[10]};
    }

    &:disabled {
      border: solid 0.0625rem ${color.gray[250]};
      color: ${color.gray[280]};
      background-color: #fff;
      cursor: not-allowed;
    }

    @media ${device.laptop} {
      &:hover:enabled {
        background-color: ${color.purple[10]};
      }
    }
  `,
  buttonHoverStyleGray: css`
    transition: all 0.15s linear;
    -webkit-transition: all 0.15s linear;

    &:active {
      background-color: ${color.gray[100]};
    }

    &:disabled {
      border: solid 0.0625rem ${color.gray[250]};
      color: ${color.gray[280]};
      background-color: ${color.gray[300]};
      cursor: not-allowed;
    }

    @media ${device.laptop} {
      &:hover:enabled {
        background-color: ${color.gray[100]};
      }
    }
  `,
  checkBoxStyle: css<{ isChecked: boolean }>`
    ${mixins.flexSet()}
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.375rem;
    border-radius: 0.125rem;
    ${({ isChecked }) =>
      !isChecked &&
      css`
        border: 0.0625rem solid ${color.gray[300]};
      `}
    background-color: ${({ isChecked }) =>
      isChecked ? color.gray[850] : '#fff'};

    svg {
      width: 1rem;
      height: 1rem;
      object-fit: contain;
    }
  `,
  radioBoxStyle: css`
    ${mixins.flexSet()}
    flex-shrink: 0;
    width: 1.125rem;
    height: 1.125rem;
    padding: 0.25rem;
    border: 0.0625rem solid ${color.gray[850]};
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;

    .selected_style {
      width: 100%;
      height: 100%;
      background-color: ${color.gray[850]};
      border-radius: 50%;
    }
  `,
  purpleUnderBarStyle: css`
    ${mixins.fontStyle()}
    ${mixins.lineStyle('1.25rem', -0.26)}
    position: relative;
    font-size: 0.875rem;
    color: #343434;
    z-index: 1;

    span {
      color: ${color.purple[500]};
    }

    &::before {
      content: '';
      position: absolute;
      top: 0.625rem;
      z-index: -1;
      width: 100%;
      height: 0.75rem;
      border-radius: 0.375rem;
      background-color: ${color.purple[30]};
    }
  `,
  modalContainerStyle: css`
    ${mixins.flexSet()}
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000001;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  `,
};
