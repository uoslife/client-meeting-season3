import {
  Button,
  Col,
  Paddle,
  RoundedRectangleButton,
  Row,
  Text,
  TextRoundInput,
} from '@/components';
import { StepProps } from '@/types/step.type';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  return (
    <Paddle top={32} left={24} right={24}>
      <Col gap={56}>
        <Col gap={32} align={'center'}>
          <Col align={'center'} gap={12}>
            <Text
              label={'3. 팅장의 카카오톡 ID를 입력해주세요.'}
              weight={700}
            />
            <Text
              label={'매칭 이후 상대 팀과 연락할 수 있는 수단으로 활용됩니다.'}
              size="sm"
              color="#656D78"
            />
          </Col>
          {/* status 등 프로퍼티: 아무거나 넣어놓음 */}
          <TextRoundInput
            placeholder={'카카오톡 ID 입력'}
            status={'default'}
            statusMessage={''}
            value={''}
            onChange={() => {}}
            isSearch
          ></TextRoundInput>
        </Col>

        <Col gap={32} align={'center'}>
          <Col gap={12} align={'center'}>
            <Text label={'4. 팅원들의 학과는 무엇인가요?'} weight={700} />
            <Text
              label={
                '중복 학과가 있더라도 3개의 학과를 모두 입력해주세요. \n 현재 졸업하셨더라도 전공하신 학과를 입력하시면 됩니다.'
              }
              size="sm"
              color="#656D78"
            />
          </Col>

          <Col>
            <Col gap={16}>
              {/* status 등 프로퍼티: 아무거나 넣어놓음 */}
              {/* width = 100%로 수정 필요 */}
              <TextRoundInput
                placeholder={'학과명 입력(2글자 이상)'}
                status={'default'}
                statusMessage={''}
                value={''}
                onChange={() => {}}
                isSearch
              ></TextRoundInput>
              <RoundedRectangleButton
                type={'skyBlue'}
                label={'경영학과'}
                height={32}
              />
            </Col>
            <Col gap={12}>
              <Paddle top={24} bottom={12}>
                <Row>
                  {/* 띄어쓰기 이게 맞나 */}
                  <Text label={'선택된 학과'} weight={400} />
                  &nbsp;
                  {/* 색상 선택 이게 맞나..?*/}
                  <Text label={'(3개)'} color="rgba(76, 137, 255, 1)" />
                </Row>
              </Paddle>
              {/* 학과 텍스트 길이에 따른 row, col 처리가 필요(Figma 디자인 따라찍기만 함) */}

              <Col gap={8}>
                <RoundedRectangleButton
                  height={32}
                  label="인공지능환경컴퓨터디자인전기공학과"
                  isDelete
                  type="primary"
                />
                <Row gap={8}>
                  <RoundedRectangleButton
                    height={32}
                    label="경영학과"
                    isDelete
                    type="primary"
                  />
                  <RoundedRectangleButton
                    height={32}
                    label="경영학과"
                    isDelete
                    type="primary"
                  />
                </Row>
              </Col>
            </Col>
          </Col>
        </Col>
        <Col gap={32} align={'center'}>
          <Col align={'center'} gap={12}>
            <Text label={'5. 선호하는 미팅 요일은 언제인가요?'} weight={700} />
            <Text
              label={
                '(최소 2개 이상 선택해야 하며 요일을 많이 선택할수록 \n원하는 상대와의 매칭 확률이 높아집니다.)'
              }
              size="sm"
              color="#656D78"
            />
          </Col>
          {/* footer에 가려져서 안보이는 이슈: Paddle로 땜빵 처리함 */}
          <Paddle bottom={140}>
            <Row gap={5} width="full">
              <Button height={48} label="월" primary="inactive" />
              <Button height={48} label="화" primary="inactive" />
              <Button height={48} label="수" primary="inactive" />
              <Button height={48} label="목" primary="inactive" />
              <Button height={48} label="금" primary="inactive" />
              <Button height={48} label="토" primary="inactive" />
              <Button height={48} label="일" primary="inactive" />
            </Row>
          </Paddle>
        </Col>
      </Col>
    </Paddle>
  );
};
export default SecondPage;
