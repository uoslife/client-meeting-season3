import { StepProps } from '@/types/step.type';
import GroupLeaderPage from '@/pages/group/FirstStep/SecondPage/GroupLeaderPage/GroupLeaderPage';
import GroupMemberPage from '@/pages/group/FirstStep/SecondPage/GroupMemberPage/GroupMemberPage';
import { useEffect, useState } from 'react';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const [isLeader, setIsLeader] = useState(false);
  useEffect(() => {
    // 팅장일 때, 팀원일 때 구분 로직 추가
  }, []);

  {
    return isLeader ? <GroupLeaderPage /> : <GroupMemberPage />;
  }
};

export default SecondPage;
