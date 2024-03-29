import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import Flyer from '../shared/Flyer';
import { FlyerTitle, Tags } from './MainSection';

const PromotionSection = () => {
  const navigate = useNavigate();
  const goStreet = () => navigate(ROUTES.STREET.DETAIL('', '', 'DATE', ''));

  return (
    <Section id='second'>
      <Rotate id='first'>
        <Flyer id='promotion'>
          <FlyerTitle>
            에어팟 프로 미개봉
            <br />
            사실 분<FlyerTitle id='have'>있어요?</FlyerTitle>
          </FlyerTitle>
          <Tags>
            <span>#에어팟프로</span>
            <span>#미개봉</span>
            <span>#전자기기</span>
          </Tags>
        </Flyer>
      </Rotate>
      <TapeMemo id='first'>
        어쩌면..
        <br />
        여기에 종이 한 장 붙이고
        <br />
        고민이 해결될 수 있어요
      </TapeMemo>
      <Rotate id='second'>
        <Flyer id='promotion'>
          <FlyerTitle>
            넷플릭스 인생작
            <br />
            추천해주실 분<FlyerTitle id='have'>있어요?</FlyerTitle>
          </FlyerTitle>
          <Tags>
            <span>#넷플릭스</span>
            <span>#띵작추천</span>
            <span>#영화</span>
          </Tags>
        </Flyer>
      </Rotate>
      <TapeMemo id='second'>
        사소한 고민도 괜찮아요
        <br />
        전단지 붙이고 함께 해결해요
      </TapeMemo>
      <Button onClick={goStreet}>전단지 골목 가기</Button>
    </Section>
  );
};

export default PromotionSection;

const Section = styled.div`
  display: flex;
  height: 100vh;
  height: 150vh;
  position: relative;
  background: url('/img/note.png') no-repeat center center;
  background-size: cover;

  @media all and (max-width: 767px) {
    display: none;
  }
`;

const Rotate = styled.div`
  position: absolute;
  &#first {
    transform: rotate(7deg);
    top: 17%;
    left: 20%;
  }
  &#second {
    transform: rotate(-10deg);
    top: 45%;
    right: 20%;
  }
`;

const TapeMemo = styled.div`
  position: absolute;
  color: #fff;
  line-height: 1.4;
  &#first {
    background: url('/img/tornTape_1.svg') no-repeat center center;
    background-size: cover;
    padding: 10px 20px 10px 40px;
    width: 241.31px;
    height: 89.71px;
    scale: 1.3;
    top: 11%;
    right: 30%;
  }
  &#second {
    background: url('/img/tornTape_2.svg') no-repeat center center;
    background-size: contain;
    padding: 27px 20px 10px 30px;
    width: 260.31px;
    height: 100px;
    scale: 1.3;
    top: 60%;
    left: 25%;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 50px;
  color: #fff;
  background: #373737;
  border: none;
  border-radius: 70px;
  cursor: pointer;
`;
