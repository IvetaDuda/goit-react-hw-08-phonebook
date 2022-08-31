import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 600px;
  height: 100%;
  border-radius: 1px 15px 15px 1px;
  margin: 30px auto 30px auto;
  padding: 20px 20px;
  box-shadow: 4px 6px 8px -1px #a090a0;
  background-color: #fecbfe;
  border-top-right-radius: 62px;
  animation: book 2000ms infinite;
  &:before {
    content: '';
    position: absolute;
    top: 4px;
    right: 8px;
    width: 35px;
    height: 40px;
    background: linear-gradient(
      40deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(231, 230, 230, 1) 38%,
      rgba(122, 122, 122, 1) 100%
    );
    transform: skew(15deg, 15deg) rotate(-8deg);
    border-top-right-radius: 62px;
    animation: bookBefore 2000ms infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 22px;
    right: 38px;
    width: 50px;
    height: 50px;
    transform: skew(-20deg);
    z-index: -1;
    box-shadow: -20px 20px 8px rgba(0, 0, 0, 0.2);
  }
  @keyframes book {
    50% {
      border-top-right-radius: 71px;
    }
  }
  @keyframes bookBefore {
    50% {
      border-top-right-radius: 71px;
      width: 45px;
      height: 48px;
      transform: skew(13deg, 13deg) rotate(-7deg);
      background: linear-gradient(
        40deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(231, 230, 230, 1) 40%,
        rgba(122, 122, 122, 1) 100%
      );
    }
  }
`;
export const Title = styled.h1`
  font-size: 38px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  color: #232323;
`;
export const SubTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  color: #232323;
`;

export const Item = styled.span`
  &::after {
    content: ' ';
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 28px;
    box-shadow: 0px 0px 9px 2px rgba(249, 214, 249, 0.77);
    background-color: #eecaee;
  }
`;
// export const Img = styled.img`
//   color: #69e2db;
//   border-radius: 50px;
// `;

//animation

export const ContainerAfter = styled.div`
  content: '';
  display: block;
  position: absolute;
  bottom: -5px;
  right: -5px;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 1px 15px 15px 1px;
  box-shadow: 4px 6px 8px -1px #a090a0;
`;

// export const ContainerAfter2 = styled.div`
//   content: '';
//   display: block;
//   position: absolute;
//   bottom: 0px;
//   right: 0px;
//   width: 100%;
//   height: 100%;
//   border-radius: 1px 15px 15px 1px;
//   box-shadow: 4px 6px 8px -1px #a090a0;
//   background-color: #ffffff;
// `;

// export const Div = styled.div`
//   content: '';
//   position: absolute;
//   top: -10px;
//   left: -410px;
//   width: 450px;
//   height: 100%;

//   background: linear-gradient(
//     90deg,
//     rgba(255, 179, 255, 1) 0%,
//     rgba(254, 203, 254, 1) 10%,
//     rgba(255, 226, 255, 1) 33%,
//     rgba(254, 203, 254, 1) 54%,
//     rgba(254, 162, 254, 1) 91%
//   );
//   transform: skew(0deg, 3deg);
//   box-shadow: inset -8px 0px 8px -8px rgba(0, 0, 0, 0.45);
//   border-top-left-radius: 62px;
//   animation: bookExit 2000ms infinite;
//   border-bottom-left-radius: 15px;
//   &:before {
//     content: '';
//     position: absolute;
//     top: 4px;
//     left: 8px;
//     width: 35px;
//     height: 40px;
//     background: linear-gradient(
//       -40deg,
//       rgba(255, 255, 255, 1) 0%,
//       rgba(231, 230, 230, 1) 38%,
//       rgba(122, 122, 122, 1) 100%
//     );
//     transform: skew(-15deg, -15deg) rotate(8deg);
//     border-top-left-radius: 62px;
//     animation: bookBeforeExit 2000ms infinite;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     top: 22px;
//     left: 38px;
//     width: 50px;
//     height: 50px;
//     transform: skew(-0deg);
//     z-index: -2;
//   }
//   @keyframes bookExit {
//     50% {
//       border-top-left-radius: 71px;
//     }
//   }
//   @keyframes bookBeforeExit {
//     50% {
//       border-top-left-radius: 71px;
//       width: 45px;
//       height: 50px;
//       background: linear-gradient(
//         -40deg,
//         rgba(255, 255, 255, 1) 0%,
//         rgba(231, 230, 230, 1) 40%,
//         rgba(122, 122, 122, 1) 100%
//       );
//     }
//   }
// `;

// export const Button = styled.button`
//   content: '';
//   position: absolute;
//   top: 5px;
//   right: 7px;
//   width: 45px;
//   height: 45px;
//   border-top-right-radius: 62px;
//   opacity: 0;
//   cursor: pointer;
// `;
// export const Btn = styled.button`
//   content: '';
//   position: absolute;
//   top: 5px;
//   left: 7px;
//   width: 45px;
//   height: 45px;
//   border-top-left-radius: 62px;
//   opacity: 0;
//   cursor: pointer;
// `;

// // icons

// // export const IconBoxNext = styled.div`;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   margin-right: 50px;
//   animation: ImgNext 2000ms infinite;
//   @keyframes ImgNext {
//     50% {
//       margin-right: 60px;
//     }
//   }
// `;

// export const ImgNext = styled.img`
//   border: 2px solid #232323;
//   border-radius: 50px;
//   padding: 3px;
// `;

// export const TextNext = styled.p`
//   font-size: 14px;
//   text-transform: uppercase;
//   color: #232323;
//   margin-right: 10px;
// `;
