import { InformationDataType } from '@/types/information.type';
import { ANIMALS } from '@/constants/index';
export const informationToBinary = (applyData: InformationDataType) => {
  let binary = '';
  const { height, question, mbti, animal } = applyData;
  const { data: heightData } = height;
  const { data: questionData } = question;
  const { data: mbtiData } = mbti;
  const { data: animalData } = animal;
  const heightBinary = heightData.toString(2).padStart(8, '0');
  const questionBinary = questionData.sort((a, b) => b.order - a.order)
  .map(item => item.label.toString())
  .join('');
  const mbtiString = 'EISNTFJP';
  const mbtiBinary = mbtiString.split('').map(char => mbtiData.includes(char) ? '1' : '0').join('');
  const animalBinary = ANIMALS.map((item) => animalData.includes(item) ? '1' : '0').join('');

  binary = heightBinary + questionBinary + mbtiBinary + animalBinary;
  return binary;
};
