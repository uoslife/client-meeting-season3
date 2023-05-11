import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-bottom: 32px;
`;

export const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 16px 20px;
`;

export const BottomWrapper = styled.div`
  background: #f9f9f9;
`;

//
export const MainTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 28px;
  border: 1px solid #2e74ff;
  border-radius: 12px;
  opacity: 0.9;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
`;
export const DateTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SocialLink = styled.a`
  display: flex;
  gap: 4px;
`;
