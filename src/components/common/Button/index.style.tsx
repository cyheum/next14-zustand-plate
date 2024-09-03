import styled, { css } from 'styled-components'

import { color, device, mixins } from '@/styles'

import type { ButtonProps } from './index'

interface containerProps {
  $marginLeft?: number
  $marginRight?: number
  $marginBottom?: number
  $containerstyle?: string
}

export const Container = styled.div<containerProps>`
  position: relative;
  flex: 1;
  ${({ $marginBottom }) =>
    $marginBottom && `margin-bottom: ${$marginBottom}rem;`}
  ${({ $marginLeft }) => $marginLeft && `margin-left: ${$marginLeft}rem;`}
  ${({ $marginRight }) => $marginRight && `margin-right: ${$marginRight}rem;`}
  ${({ $containerstyle }) => $containerstyle && `${$containerstyle}`}
`

export const DiabledButton = styled.div<ButtonProps>`
  ${mixins.flexSet()}
  ${({ $isLight }) => mixins.fontStyle($isLight ? 'normal' : '600')}
  ${({ lineHeight }) => mixins.lineStyle(lineHeight ? lineHeight : undefined)}
  
  width: 100%;
  height: ${({ $height }) => $height ?? 3}rem;
  margin: 0 auto;
  font-size: ${({ $fontSize }) => $fontSize ?? 0.9375}rem;
  color: white;
  white-space: pre;
  font-family: inherit;
  background: #babec2;
  border-radius: ${({ $borderradius }) => $borderradius ?? 0.625}rem;
  border-color: #babec2;
  cursor: not-allowed;
  ${({ $buttonstyle }) => $buttonstyle}
`

export const Button = styled.button<ButtonProps>`
  ${mixins.flexSet()}
  ${({ $isLight }) => mixins.fontStyle($isLight ? 'normal' : '600')}
  ${({ lineHeight }) => mixins.lineStyle(lineHeight ? lineHeight : undefined)}
  width: 100%;
  max-width: 100%;
  height: ${({ $height }) => $height ?? 3}rem;
  margin: 0 auto;
  border-radius: ${({ $borderradius }) => $borderradius ?? 0.625}rem;
  font-size: ${({ $fontSize }) => $fontSize ?? 0.9375}rem;
  white-space: pre;
  font-family: inherit;
  transition: all 0.15s ease-in-out;
  ${({ noClick }) => (!noClick ? 'cursor: pointer;' : 'cursor: unset;')}
  ${({ $buttonType, noClick, disabled }) => {
    if ($buttonType === 'gray') {
      return css`
        border: 0.0625rem solid ${color.gray['570']};
        background-color: ${color.gray['570']};
        color: #fff;

        &:disabled {
          border: solid 0.0625rem ${color.gray['170']};
          color: #fff;
          background-color: ${color.gray['170']};
          cursor: not-allowed;
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'purple') {
      return css`
        border: 0.0625rem solid ${color.purple[430]};
        background-color: ${color.purple[430]};
        color: white;

        &:disabled {
          border: solid 0.0625rem rgba(0, 0, 0, 0.1);
          background-color: #babec2;
          cursor: not-allowed;
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'blackWhite') {
      return css`
        border: 0.0625rem solid black;
        background-color: white;
        color: black;

        &:disabled {
          border-color: ${color.gray[300]};
          color: ${color.gray[300]};
          cursor: not-allowed;
        }

        ${!noClick
          ? css`
              &:active:enabled {
                background-color: ${color.gray[100]};
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  background-color: ${color.gray[100]};
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'white') {
      return css`
        border: 0.0625rem solid #eee;
        background-color: white;
        color: ${color.gray['850']};
        box-shadow: 0 0.25rem 0.25rem 0 #0000000f;

        &:disabled {
          border-color: ${color.gray[300]};
          color: ${color.gray[300]};
          cursor: not-allowed;
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'black') {
      return css`
        border: solid 0.0625rem ${color.gray[850]};
        background-color: ${color.gray[850]};
        color: white;

        &:disabled {
          border-color: ${color.gray[400]};
          background-color: ${color.gray[400]};
          cursor: not-allowed;
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'blue') {
      return css`
        border: 0.0625rem solid ${color.blue['850']};
        background-color: ${color.blue['850']};
        color: white;

        &:disabled {
          cursor: not-allowed;
          background-color: ${color.gray[300]};
          border-color: ${color.gray[300]};
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'sky_blue') {
      return css`
        border: 0.0625rem solid #2664e0;
        background-color: #2664e0;
        color: white;

        &:disabled {
          cursor: not-allowed;
          background-color: ${color.gray[300]};
          border-color: ${color.gray[300]};
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'pink') {
      return css`
        border: 0.0625rem solid ${color.pink[700]};
        background-color: ${color.pink[700]};
        color: white;

        &:disabled {
          background-color: #babec2;
          cursor: not-allowed;
          border-color: #babec2;
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    if ($buttonType === 'gradient-blue') {
      return css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s ease-in-out;
        background: linear-gradient(
          90deg,
          ${color.blue[800]} 0%,
          ${color.blue[350]} 100%
        );
        color: white;
        font-weight: 600;
        opacity: ${disabled ? 0 : 1};

        &:disabled {
          cursor: not-allowed;
        }

        ${!noClick
          ? css`
              &:active:enabled {
                opacity: 0.7;
              }

              @media ${device.laptop} {
                &:hover:enabled {
                  opacity: 0.7;
                }
              }
            `
          : ''}
      `
    }
    return css`
      border: 0.0625rem solid ${color.purple[500]};
      background-color: white;
      color: ${color.purple[500]};

      &:disabled {
        border: solid 0.0625rem ${color.gray[250]};
        color: ${color.gray[280]};
        background-color: #fff;
        cursor: not-allowed;
      }

      ${!noClick
        ? css`
            &:active:enabled {
              background-color: ${color.purple[10]};
            }

            @media ${device.laptop} {
              &:hover:enabled {
                background-color: ${color.purple[10]};
              }
            }
          `
        : ''}
    `
  }}
  ${({ $buttonstyle }) => $buttonstyle}
`
