'use client';
import Image from 'next/image';

import {
  Banner,
  Button,
  IconButton,
  MainHeader,
  Text,
  Toast,
  Col,
} from '@/components';

import * as S from '@/styles/pages/page.style';

import { copyLink } from '@/utils';
import { BANNER_AD_URL, SOCIAL_LINK } from '@/constants';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { meetingAPI } from '@/api';
import { colors } from '@/styles/styles';
import { resetAll } from '@/store/feature/applyInfo';
import { resetAllCommonState } from '@/store/feature/common/commonReducer';
import { resetAllGroupState } from '@/store/feature/meetingType/groupReducer';
import { resetAllPersonalState } from '@/store/feature/meetingType/personalReducer';

const Main = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { meetingType } = useAppSelector(state => state.applyInfo);

  const [isWaitingTeamComplete, setIsWaitingTeamComplete] = useState(false);
  const [waitingModalOpen, setWaitingModalOpen] = useState(false);
  const [applyExtensionInfoModalOpen, setApplyExtensionInfoModalOpen] =
    useState(false);
  const [applyFinishInfoModalOpen, setApplyFinishInfoModalOpen] =
    useState(false);

  useEffect(() => {
    setApplyExtensionInfoModalOpen(true);
    setTimeout(() => {
      setApplyExtensionInfoModalOpen(false);
    }, 6000);
  }, []);
  const handleApplyButton = () => {
    setApplyFinishInfoModalOpen(true);
    return;
  };

  /** 신청 정보 확인 */
  const handleCheckInfoButton = () => {
    router.push('/applicationInfo');
  };
  /** 매칭 결과 확인 */
  const handleCheckResultButton = () => {
    router.push('/result');
  };

  // modal
  const [modalOpen, setModalOpen] = useState(false);

  const handleCopyLink = async () => {
    copyLink(SOCIAL_LINK.Sharelink);
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 5000);
  };

  const [isApply, setIsApply] = useState(false);
  const getUser = async () => {
    await meetingAPI.getUser().then(() => {});
  };
  const getTeamInfo = async () => {
    await meetingAPI
      .getTeamInfo({ teamType: 'SINGLE' })
      .then(data => {
        setIsApply(true);
      })
      .catch(e => {
        // console.error(e);
        setIsApply(false);
        meetingAPI
          .getTeamInfo({ teamType: 'TRIPLE' })
          .then(data => {
            setIsApply(true);
          })
          .catch(e => {
            if (e.response.data.code === 'M07') {
              if (meetingType === 'groupMember') setIsWaitingTeamComplete(true);
              else setIsWaitingTeamComplete(false);
            } else setIsWaitingTeamComplete(false);
            // dispatch(resetAll());
            // dispatch(resetAllCommonState());
            // dispatch(resetAllPersonalState());
            // dispatch(resetAllGroupState());
            setIsApply(false);
          });
      });
  };
  useEffect(() => {
    getUser();
    getTeamInfo();
  }, []);

  return (
    <>
      <S.MainWrapper>
        <MainHeader />
        <Image
          src={'/images/MainPoster.jpg'}
          alt="메인 배너"
          height={421}
          width={366}
        />
        <S.MainTextWrapper>
          <Text
            label="시대팅 시즌 3"
            size="4xl"
            font="LeferiSpecial"
            color={colors.Primary_500}
          />
        </S.MainTextWrapper>
        <div style={{ textAlign: 'center' }}>
          <Text
            label={'초여름을 맞이해 돌아온 시대팅 !'}
            size={'base'}
            color="#3B4046"
          />
          <Text
            label={'이번 여름은 설렘과 함께 💗'}
            size={'base'}
            color="#3B4046"
          />
        </div>
        <S.DateWrapper>
          <Text label={'신청기간'} size={'lg'} weight={300} />
          <S.DateTextWrapper>
            <Text
              label={'05.29'}
              size={'3xl'}
              weight={800}
              font="LeferiPoint-SpecialA"
            />
            <Text label={'(월)'} size={'2xl'} weight={500} />
            <Text label={'-'} size={'4xl'} />
            <Text
              label={'06.01'}
              size={'3xl'}
              weight={800}
              font="LeferiPoint-SpecialA"
            />
            <Text label={'(목)'} size={'2xl'} weight={500} />
          </S.DateTextWrapper>
        </S.DateWrapper>
        <Col gap={12}>
          {isApply && (
            <div style={{ width: '100%', padding: '0 48px' }}>
              <Button
                primary="active"
                label="매칭 결과 확인하기 >"
                onClick={handleCheckResultButton}
              />
            </div>
          )}
          {isApply ? (
            <div style={{ width: '100%', padding: '0 48px' }}>
              <Button
                primary="inactive"
                label="신청 정보 확인하기 >"
                onClick={handleCheckInfoButton}
              />
            </div>
          ) : (
            <div style={{ width: '100%', padding: '0 48px' }}>
              <Button
                primary="active"
                label="지금 참여하기 >"
                onClick={handleApplyButton}
              />
            </div>
          )}
        </Col>
      </S.MainWrapper>
      <Banner link={'MmedAdvertise.jpg'} url={BANNER_AD_URL.Mmed} />
      <S.BottomWrapper>
        <S.ShareWrapper>
          <Text
            label="함께 참여하고 싶은 친구들에게 공유해 주세요!"
            size="sm"
            weight={600}
            color="#656D78"
          />
          <IconButton
            iconName="Share"
            width={56}
            height={56}
            onClick={handleCopyLink}
          />
          <Text
            label="(클릭 시 공유링크가 클립보드에 복사됩니다)"
            size="sm"
            weight={400}
            color="#808A98"
          />
        </S.ShareWrapper>
        <S.SocialWrapper>
          <S.SocialLink href={SOCIAL_LINK.Instagram} target="_blank">
            <IconButton iconName="Instagram" width={36} height={36} />
            <div>
              <Text label="Instagram" size="xs" weight={500} color="#656D78" />
              <Text
                label="@uoslife_official"
                size="xs"
                weight={300}
                color="#808A98"
              />
            </div>
          </S.SocialLink>
          <S.SocialLink href={SOCIAL_LINK.Kakaotalk} target="_blank">
            <IconButton iconName="Kakaotalk" width={36} height={36} />
            <div>
              <Text label="Kakaotalk" size="xs" weight={500} color="#656D78" />
              <Text label="시대생" size="xs" weight={300} color="#808A98" />
            </div>
          </S.SocialLink>
        </S.SocialWrapper>
      </S.BottomWrapper>
      {modalOpen && <Toast text={'복사되었습니다!'} isOpen={modalOpen} />}
      {waitingModalOpen && (
        <Toast
          text={'팅장이 신청을 완료할 때까지 기다려주세요!'}
          isOpen={waitingModalOpen}
        />
      )}
      {/* {applyExtensionInfoModalOpen && (
        <Toast
          text={
            <p style={{ lineHeight: '1.4' }}>
              신청기간이 연장되었어요!
              <br />
              6/1 오후 2시까지 신청해주세요😆
            </p>
          }
          isOpen={applyExtensionInfoModalOpen}
          autoClose={6000}
        />
      )} */}
      {applyFinishInfoModalOpen && (
        <Toast
          text={
            <p style={{ lineHeight: '1.4' }}>
              신청이 마감되었습니다🥲
              <br />
              다음 시즌으로 찾아뵐게요!
            </p>
          }
          isOpen={applyFinishInfoModalOpen}
          autoClose={6000}
        />
      )}
    </>
  );
};

export default Main;
