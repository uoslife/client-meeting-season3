import { IBinaryToInfo } from '@/types/information.type';
import { ANIMALS, INTERESTS } from '@/constants/index';
import { DEPARTMENTS } from '@/constants/departments';

const studentTypeArr = ['학부생', '대학원생', '졸업생'];
const smokingArr = ['흡연', '비흡연', '상관 없어요!'];
const preferDayArr = ['월', '화', '수', '목', '금', '토', '일'];
const preferAtmosphereArr = ['활발한 편', '차분한 편', '둘 다 좋아요!'];
const mbtiString = 'EISNTFJP';

export class binaryToInfo implements IBinaryToInfo {
  informationDistance?: 'string';
  informationFilter?: 'string';
  preferenceDistance?: 'string';
  preferenceFilter?: 'string';
  constructor(
    informationDistance?
    informationFilter?
    preferenceDistance?
    preferenceFilter?
  ) {
    (this.informationDistance = informationDistance),
    (this.informationFilter = informationFilter),
    (this.preferenceDistance = preferenceDistance),
    (this.preferenceFilter = preferenceFilter),
  }

  // 정보 -> 바이너리

  preferHeightToBinary() {
    const modifiedArray = (this.preferHeight ?? []).map(item =>
      parseInt(item.replace('~', '')),
    );
    return modifiedArray.map(item => item.toString(2)).join('');
    // 완료
  }

  preferAgeToBinary() {
    const initialData = (this.preferAge ?? []).map(item =>
      parseInt(item.replace('~', '')),
    );
    const middle = initialData.map(item => 2023 - item);
    const result = middle.map(year => String(year).slice(-2));
    const a = result.map(item => parseInt(item, 10));
    return a.map(item => item.toString(2));
  }

  questionsToBinary(questionArr: object) {
    let totalBinary = '';
    for (let i = 0; i < 4; i++) {
      let dummyBinary = questionArr[i]
        .map(item => (item === this.questions![i].label ? '1' : '0'))
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

  departmentToBinary() {
    return DEPARTMENTS.map(item =>
      this.major?.includes(item.name) ? '1' : '0',
    ).join('');
    // 완
  }

  studentTypeToBinary() {
    return studentTypeArr
      .map(item => (this.studentType?.includes(item) ? '1' : '0'))
      .join('');
    // 완
  }

  smokingToBinary() {
    return smokingArr.map(item => (this.smoking === item ? '1' : '0')).join('');
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

  // 바이너리 -> 정보
  binaryToSmoking() {
    const arrNum = this.smokingToBinary().split('').indexOf('1');
    return preferAtmosphereArr[arrNum];
  }
  binaryToPreferAtmosphere() {
    const arrNum = this.smokingToBinary().split('').indexOf('1');
    return preferAtmosphereArr[arrNum];
  }

  binaryToInterest() {
    const arr = this.interestToBinary().split('');
    const result = [];
    INTERESTS.map((item, i) => (arr[i] === '1' ? result.push(item) : null));
    return result;
  }

  binaryToPreferDay() {
    const arr = this.preferDayToBinary().split('');
    const result = [];
    preferDayArr.map((item, i) => (arr[i] === '1' ? result.push(item) : null));
    return result;
  }

  binaryToStudentType() {
    const arr = this.studentTypeToBinary().split('');
    const result = [];
    studentTypeArr.map((item, i) =>
      arr[i] === '1' ? result.push(item) : null,
    );
    return result;
  }

  binaryToDepartment() {
    const arr = this.departmentToBinary().split('');
    const result = [];
    DEPARTMENTS.map((item, i) => (arr[i] === '1' ? result.push(item) : null));
    return result;
  }

  binaryToAnimal(isPrefer: boolean) {
    const arr = this.animalToBinary(isPrefer).split('');
    const result = [];
    ANIMALS.map((item, i) => (arr[i] === '1' ? result.push(item) : null));
    return result;
  }

  binaryToPreferAge() {
    const result = this.preferHeightToBinary()
      .match(/.{1,8}/g)
      .map(item => parseInt(item, 2));

    return `${result[0]} ~ ${result[1]}`;
  }

  // 해야하는 것들
  // mbtiToBinary
  // qeustionToBinary
}
