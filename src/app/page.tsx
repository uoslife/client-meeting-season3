'use client';
import Image from 'next/image';

import { Button, IconButton, MainHeader, Text } from '@/components';

import * as S from '@/styles/pages/page.style';

import { copyLink } from '@/utils';
import { SOCIAL_LINK } from '@/constants';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/store';

const Main = () => {
  const router = useRouter();
  const { meetingType } = useAppSelector(state => state.applyInfo);
  const handleApplyButton = () => {
    switch (meetingType) {
      case '':
        router.push('/apply');
        break;
      case 'personal':
        router.push('apply/personal');
        break;
      case 'group':
        router.push('apply/branching');
        break;
      case 'groupLeader':
        router.push('apply/groupLeader');
        break;
      case 'groupMember':
        router.push('apply/groupMember');
        break;
      default:
        router.push('/apply');
        break;
    }
  };
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
            font="LeferiPoint-SpecialA"
            color="#2E74FF"
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
            <Text label={'05.26'} size={'4xl'} weight={800} />
            <Text label={'(금)'} size={'2xl'} weight={500} />
            <Text label={'-'} size={'4xl'} />
            <Text label={'05.28'} size={'4xl'} weight={800} />
            <Text label={'(일)'} size={'2xl'} weight={500} />
          </S.DateTextWrapper>
        </S.DateWrapper>
        <div style={{ width: '100%', padding: '0 48px' }}>
          <Button
            primary="active"
            label="지금 참여하기 >"
            onClick={handleApplyButton}
          />
        </div>
      </S.MainWrapper>
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
            onClick={() => copyLink(SOCIAL_LINK.Sharelink)}
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
    </>
  );
};

export default Main;
