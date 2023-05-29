import { IInfoToBinary } from '@/types/information.type';
import {
  AGE_ARR,
  ANIMALS,
  GROUP_QUESTIONS,
  INTERESTS,
  PERSONAL_QUESTIONS,
} from '@/constants/index';
import { DEPARTMENTS } from '@/constants/departments';

const studentTypeArr = ['학부생', '대학원생', '졸업생'];
const mySmokingArr = ['흡연', '비흡연'];
const preferSmokingArr = ['흡연', '비흡연', '상관 없어요!'];
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
    return String(this.myHeight);
  }
  preferHeightToBinary() {
    const modifiedArray = (this.preferHeight ?? []).map(item =>
      item.replace('~', ''),
    );
    return modifiedArray.join('');
  }
  myAgeToBinary() {
    return AGE_ARR.map(item => (this.myAge === item ? '1' : '0')).join('');
  }
  preferAgeToBinary() {
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(
        AGE_ARR.map(item => (this.preferAge![i] == item ? '1' : '0')).join(''),
      );
    }
    return result.join('');
  }

  questionsToBinary(questionArr: object) {
    let totalBinary = '';
    for (let i = 0; i < 4; i++) {
      let dummyBinary = questionArr[i]
        .map(item => (this.questions![i].label === item ? '1' : '0'))
        .join('');
      totalBinary += dummyBinary;
    }
    return totalBinary;
  }

  animalToBinary(isPrefer: boolean) {
    return ANIMALS.map(item =>
      (isPrefer ? this.preferAnimal : this.myAnimal)?.includes(item)
        ? '1'
        : '0',
    ).join('');
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
  }

  studentTypeToBinary(isPrefer: boolean) {
    return studentTypeArr
      .map(item =>
        isPrefer
          ? this.preferStudentType
          : this.myStudentType === item
          ? '1'
          : '0',
      )
      .join('');
  }

  mySmokingToBinary() {
    return mySmokingArr
      .map(item => (item === this.mySmoking ? '1' : '0'))
      .join('');
  }

  preferSmokingToBinary() {
    return preferSmokingArr
      .map(item => (item === this.preferSmoking ? '1' : '0'))
      .join('');
  }

  preferDayToBinary() {
    return preferDayArr
      .map(item => (this.preferDay?.includes(item) ? '1' : '0'))
      .join('');
  }

  preferAtmosphereToBinary() {
    return preferAtmosphereArr
      .map(item => (this.atmosphere === item ? '1' : '0'))
      .join('');
  }

  interestToBinary() {
    return INTERESTS.map(item =>
      this.interests?.includes(item) ? '1' : '0',
    ).join('');
  }

  totalInformationDistance() {
    return this.type === 'personal'
      ? this.myHeightToBinary() +
          this.questionsToBinary(PERSONAL_QUESTIONS) +
          this.mbtiToBinary(false) +
          this.animalToBinary(false) +
          this.interestToBinary()
      : this.preferDayToBinary() + this.questionsToBinary(GROUP_QUESTIONS);
  }

  totalInformationFilter() {
    return this.type === 'personal'
      ? this.myAgeToBinary() +
          this.mySmokingToBinary() +
          this.departmentToBinary(false) +
          this.studentTypeToBinary(false)
      : this.myAgeToBinary() +
          this.departmentToBinary(false) +
          this.studentTypeToBinary(false);
  }

  totalPreferenceDistance() {
    return this.type === 'personal'
      ? this.preferHeightToBinary() +
          this.mbtiToBinary(true) +
          this.animalToBinary(true)
      : '';
  }

  totalPreferenceFilter() {
    return this.type === 'personal'
      ? this.preferAgeToBinary() +
          this.preferSmokingToBinary() +
          this.departmentToBinary(true) +
          this.studentTypeToBinary(true)
      : '';
  }
}
