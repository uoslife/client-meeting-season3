import { IInfoToBinary } from '@/types/information.type';
import {
  ANIMALS,
  GROUP_QUESTIONS,
  INTERESTS,
  PERSONAL_QUESTIONS,
} from '@/constants/index';
import { DEPARTMENTS } from '@/constants/departments';

const studentTypeArr = ['학부생', '대학원생', '졸업생'];
const smokingArr = ['흡연', '비흡연', '상관 없어요!'];
const preferDayArr = ['월', '화', '수', '목', '금', '토', '일'];
const preferAtmosphereArr = ['활발한 편', '차분한 편', '둘 다 좋아요!'];
const mbtiString = 'EISNTFJP';

export class infoToBinary implements IInfoToBinary {
  type?: 'personal' | 'group';
  myHeight?: number;
  preferHeight?: string[];
  myAge?: number;
  preferAge?: string[];
  questions?: object;
  myMbti?: string[];
  preferMbti?: string[];
  myAnimal?: string[];
  preferAnimal?: string[];

  mySmoking?: string;
  preferSmoking?: string;
  myMajor?: string[];
  preferMajor?: string[];
  myStudentType?: string;
  preferStudentType?: string;
  preferDay?: string[];
  atmosphere?: string;
  interests?: string[];

  informationDistance?: 'string';
  informationFilter?: 'string';
  preferenceDistance?: 'string';
  preferenceFilter?: 'string';

  constructor(
    type?,
    myHeight?,
    preferHeight?,
    questions?,
    myMbti?,
    preferMbti?,
    myAge?,
    preferAge?,
    myAnimal?,
    preferAnimal?,
    mySmoking?,
    preferSmoking?,
    myMajor?,
    preferMajor?,
    myStudentType?,
    preferStudentType?,
    preferDay?,
    atmosphere?,
    interests?,
    informationDistance?,
    informationFilter?,
    preferenceDistance?,
    preferenceFilter?,
  ) {
    (this.type = type),
      (this.myHeight = myHeight),
      (this.preferHeight = preferHeight),
      (this.myAge = myAge),
      (this.preferAge = preferAge),
      (this.questions = questions),
      (this.myMbti = myMbti),
      (this.preferMbti = preferMbti),
      (this.myAnimal = myAnimal),
      (this.preferAnimal = preferAnimal),
      (this.mySmoking = mySmoking),
      (this.preferSmoking = preferSmoking),
      (this.myMajor = myMajor),
      (this.preferMajor = preferMajor),
      (this.myStudentType = myStudentType),
      (this.preferStudentType = preferStudentType),
      (this.preferDay = preferDay),
      (this.atmosphere = atmosphere),
      (this.interests = interests);
    (this.informationDistance = informationDistance),
      (this.informationFilter = informationFilter),
      (this.preferenceDistance = preferenceDistance),
      (this.preferenceFilter = preferenceFilter);
  }
  // 정보 -> 바이너리

  myHeightToBinary() {
    return parseInt(String(this.myHeight), 10).toString(2);
    // 완료
  }
  preferHeightToBinary() {
    const modifiedArray = (this.preferHeight ?? []).map(item =>
      parseInt(item.replace('~', '')),
    );
    return modifiedArray.map(item => item.toString(2)).join('');
    // 완료
  }
  myAgeToBinary() {
    const middle = 2023 - this.myAge;
    const result = parseInt(String(middle).slice(-2), 10).toString(2);
    return '0'.repeat(7 - result.length) + result;
  }

  // myStudentType 바이너리 필요

  preferAgeToBinary() {
    const initialData = (this.preferAge ?? []).map(item =>
      parseInt(item.replace('~', '')),
    );
    const middle = initialData.map(item => 2023 - item);
    const result = middle.map(year => String(year).slice(-2));
    const a = result.map(item => parseInt(item, 10));
    const b = a.map(item => item.toString(2));
    return '0'.repeat(7 - b.length) + b.join('');
  }

  questionsToBinary(questionArr: object) {
    let totalBinary = '';
    for (let i = 0; i < 4; i++) {
      let dummyBinary = questionArr[i]
        .map(item => (item === this.questions![i].label ? '1' : '0'))
        .join('');
      let result = dummyBinary?.includes('1') ? '1' : '0';
      totalBinary += result;
    }
    return totalBinary;
  }

  animalToBinary(isPrefer: boolean) {
    return ANIMALS.map(item =>
      (isPrefer ? this.preferAnimal : this.myAnimal)?.includes(item)
        ? '1'
        : '0',
    ).join('');
    // 완
  }
  mbtiToBinary(isPrefer: boolean) {
    return mbtiString
      .split('')
      .map(char =>
        (isPrefer ? this.preferMbti : this.myMbti)?.includes(char) ? '1' : '0',
      )
      .join('');
  }

  departmentToBinary(isPrefer: boolean) {
    return DEPARTMENTS.map(item =>
      (isPrefer ? this.preferMajor : this.myMajor)?.includes(item.name)
        ? '1'
        : '0',
    ).join('');
    // 완
  }

  myStudentTypeToBinary() {
    return studentTypeArr
      .map(item => (this.preferStudentType === item ? '1' : '0'))
      .join('');
  }
  preferStudentTypeToBinary() {
    return studentTypeArr
      .map(item => (this.preferStudentType?.includes(item) ? '1' : '0'))
      .join('');
    // 완
  }

  mySmokingToBinary() {
    return smokingArr.includes!(this.preferSmoking) ? '1' : '0';
  }

  preferSmokingToBinary() {
    let result = smokingArr
      .map(item => (this.preferSmoking === item ? '1' : '0'))
      .join('');
    if (result === '001') result = '10';
    if (result === '010') result = '00';
    if (result === '100') result = '01';
    return result;
    // 완
  }

  preferDayToBinary() {
    return preferDayArr
      .map(item => (this.preferDay?.includes(item) ? '1' : '0'))
      .join('');
    // 완
  }

  preferAtmosphereToBinary() {
    return preferAtmosphereArr
      .map(item => (this.atmosphere === item ? '1' : '0'))
      .join('');
    // 완
  }

  interestToBinary() {
    return INTERESTS.map(item =>
      this.interests?.includes(item) ? '1' : '0',
    ).join('');
    // 완
  }
  totalInformationDistance() {
    return this.type === 'personal'
      ? this.myHeightToBinary() +
          this.mbtiToBinary(false) +
          this.questionsToBinary(PERSONAL_QUESTIONS) +
          this.animalToBinary(false)
      : this.myHeightToBinary() +
          this.questionsToBinary(GROUP_QUESTIONS) +
          this.preferDayToBinary();
  }

  totalInformationFilter() {
    return this.type === 'personal'
      ? this.myAgeToBinary() +
          this.mySmokingToBinary() +
          this.departmentToBinary(false) +
          this.myStudentTypeToBinary()
      : this.myAgeToBinary() +
          this.mySmokingToBinary() +
          this.departmentToBinary(false) +
          this.myStudentTypeToBinary();
  }

  totalPreferenceDistance() {
    return this.type === 'personal'
      ? this.preferHeightToBinary() +
          this.mbtiToBinary(true) +
          this.animalToBinary(true)
      : this.preferHeightToBinary() +
          this.mbtiToBinary(true) +
          this.animalToBinary(true);
  }

  totalPreferenceFilter() {
    return this.type === 'personal'
      ? this.preferAgeToBinary() +
          this.preferSmokingToBinary() +
          this.departmentToBinary(true) +
          this.preferStudentTypeToBinary()
      : this.preferAgeToBinary() +
          this.preferSmokingToBinary() +
          this.departmentToBinary(true) +
          this.preferStudentTypeToBinary();
  }
}
