import React, { useState, useRef, useMemo, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
// import { THEME } from '../config';

const ANIMATION_TOTAL = 100; // 动画整体进度为 100%

const move2Left = (width, timings) => keyframes`
  0%   { margin-left: 0; }
  ${timings.map((times, index) => (
    `${times[0]}%, ${times[1]}% { margin-left: -${width * index}px; }`
  ))}
  /* 100% { margin-left: 0; } */
`;

const SliderContainer = styled.div`
  position: relative;
  width : ${ (props) => `${props?.size?.width}px` };
  height: ${ (props) => `${props?.size?.height}px` };
  /* border: solid 5px #f00; */
`;
const SliderWindow = styled.div`
  /* border: solid 5px #0f0; */
  position: absolute;
  top: 0;
  left: 0;
  width : ${ (props) => `${props?.size?.width}px` };
  height: ${ (props) => `${props?.size?.height}px` };
  overflow: hidden;
`;
// props.focusId 只有在 animation 没有的情况下，才有效果
const SliderGallery = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: ${(props) => `-${ (props.focusId || 0) * props?.width }px`};

  display: flex;

  animation: ${ (props) => (props.focusId !== null) ? '' : css`${move2Left(props?.width, props?.timings)} ${props.duration}s linear infinite` };
`;
export const SliderItem = styled.div`
  /* border: solid 1px #ff0000; */
  position: relative;
  width : ${ (props) => `${props?.size?.width}px` };
  height: ${ (props) => `${props?.size?.height}px` };

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
  }
  & p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    overflow: hidden;
  }
`;
const SliderItemIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
`;
const SliderIndicatorDot = styled.button`
  width: 16px;
  height: 16px;
  border: solid 3px #333;
  border-radius: 50%;
  margin: 2rem .2rem;
  background: ${ (props) => ( props.active ? 'yellow' : 'grey' ) };
`;

export const Slider = ({size, duration, children}) => {
  const [focusId, setFocusId] = useState(null);
  const [, setTrigger] = useState(0);
  const timerRef = useRef(null);
  const galleryRef = useRef();

  useEffect(() => {
    console.log('effect')
    timerRef.current = setInterval(() => {
      // console.log('interval', trigger); // !!! 这里的 trigger 始终都不会改变，似乎被 “冻住” 了 （无法访问外部的变量，而外部的变量其实是变化了的） !!!
      setTrigger(Math.random());        // 所以，这里设置随机数，来触发界面刷新
    }, 1000);
    return () => {
      console.log('Bye', timerRef.current);
      clearInterval(timerRef.current);
    }
  }, []);

  const timings = useMemo(() => {
    const length  = children?.length || 1;
    const trans   = ANIMATION_TOTAL / length / 10;    // 图片与图片间的过场动画时间
    const result  = children.map((x, index) => ([trans, ANIMATION_TOTAL * (index + 1) / length]));
    result.forEach((timing, index) => {
      if (index > 0) timing[0] = result[index - 1][1] + trans;
    });
    return result;
  }, [children]);

  const styleMarginLeft = !galleryRef?.current ? 0 : window.getComputedStyle(galleryRef.current).getPropertyValue("margin-left");
  const currentImgId = (focusId !== null) ? focusId : (-parseInt(parseInt(styleMarginLeft)/size.width));
  
  // console.log(galleryRef, styleMarginLeft);
  // console.log(trigger, currentImgId);
  return (
    !children?.length ? null :

    // <>
    //   <h1>{trigger}</h1>
    //   <button onClick={() => setTrigger(trigger +1)}>+</button>
    // </>

    <SliderContainer size={size}>
      <SliderWindow size={size}>
        
        <SliderGallery ref={galleryRef} width={size.width} timings={timings} duration={duration * (children?.length || 0)} focusId={focusId}>
        { children.map((child, index) => {
            const newChild = React.cloneElement(child, { 
              ...child?.props,
              size: size,
            });
            return newChild;
        })  }
        </SliderGallery>

        <SliderItemIndicator>
        { children.map((child, index) => ( <SliderIndicatorDot active={index === currentImgId} onClick={ () => setFocusId( (focusId !== index) ? index : null) }></SliderIndicatorDot> ))}
        </SliderItemIndicator>

      </SliderWindow>
    </SliderContainer>
  )
}
