import { SingleInformationDataType, SingleInformationFilterType, SinglePreferenceType } from '@/types/information.type';
import { ANIMALS } from '@/constants/index';
import { DEPARTMENTS } from '@/constants/departments';

export const informationToBinary = (applyData: SingleInformationDataType) => {
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


export const informationFilterToBinary = (applyData: SingleInformationFilterType) => {
  let binary = '';
  const { age, smoking, major, studentType } = applyData;
  const { data: ageData } = age;
  const { data: smokingData } = smoking;
  const { data: majorData } = major;
  const { data: studentTypeData } = studentType;
  const ageBinary = ((2024-ageData) % 100).toString(2).padStart(7, '0');
  const smokingBinary = smokingData === '흡연' ? '1' : '0';
  const majorBinary = DEPARTMENTS.map((item) => majorData == item.name ? '1' : '0').join('');
  const studentTypeArr = ['학부생', '대학원생', '졸업생'];
  const studentTypeBinary = studentTypeArr.map((item) => studentTypeData === item ? '1' : '0').join('');

  binary = ageBinary + smokingBinary + majorBinary + studentTypeBinary;
  return binary;
};


export const preferenceToBinary = (applyData: SinglePreferenceType) => {
  let binary = '';
  const { height, mbti, animal } = applyData;
  const { data: heightData } = height;
  const { data: mbtiData } = mbti;
  const { data: animalData } = animal;
  const heightString = parseInt(heightData[0] + heightData[1]) 
  const heightBinary = heightString.toString(2).padStart(8, '0');
  const mbtiString = 'EISNTFJP';
  const mbtiBinary = mbtiString.split('').map(char => mbtiData.includes(char) ? '1' : '0').join('');
  const animalBinary = ANIMALS.map((item) => animalData.includes(item) ? '1' : '0').join('');

  binary = heightBinary + mbtiBinary + animalBinary;
  return binary;
};
