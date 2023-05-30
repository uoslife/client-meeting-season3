import { IBinaryToInfo } from '@/types/information.type';
import {
  ANIMALS,
  INTERESTS,
  HEIGHT_SLIDER_ARR,
  AGE_SLIDER_ARR,
  GROUP_QUESTIONS,
  PERSONAL_QUESTIONS,
  MBTI_QUESTIONS,
} from '@/constants/index';
import { DEPARTMENTS } from '@/constants/departments';

const studentTypeArr = ['학부생', '대학원생', '졸업생'];
const smokingArr = ['흡연', '비흡연', '상관 없어요!'];
const preferDayArr = ['월', '화', '수', '목', '금', '토', '일'];
const preferAtmosphereArr = ['활발한 편', '차분한 편', '둘 다 좋아요!'];
const mbtiString = 'EISNTFJP';

export class BinaryToInfo implements IBinaryToInfo {
  type?: 'personal' | 'group';
  informationDistance?: string;
  informationFilter?: string;
  preferenceDistance?: string;
  preferenceFilter?: string;
  constructor(
    type?: 'personal' | 'group',
    informationDistance?: string | undefined,
    informationFilter?: string | undefined,
    preferenceDistance?: string | undefined,
    preferenceFilter?: string | undefined,
  ) {
    (this.informationDistance = informationDistance),
      (this.informationFilter = informationFilter),
      (this.preferenceDistance = preferenceDistance),
      (this.preferenceFilter = preferenceFilter);
  }

  // 정보 -> 바이너리

  // preferHeightToBinary() {
  //   const modifiedArray = (this.preferHeight ?? []).map(item =>
  //     parseInt(item.replace('~', '')),
  //   );
  //   return modifiedArray.map(item => item.toString(2)).join('');
  //   // 완료
  // }

  // preferAgeToBinary() {
  //   const initialData = (this.preferAge ?? []).map(item =>
  //     parseInt(item.replace('~', '')),
  //   );
  //   const middle = initialData.map(item => 2023 - item);
  //   const result = middle.map(year => String(year).slice(-2));
  //   const a = result.map(item => parseInt(item, 10));
  //   return a.map(item => item.toString(2));
  // }

  // questionsToBinary(questionArr: object) {
  //   let totalBinary = '';
  //   for (let i = 0; i < 4; i++) {
  //     let dummyBinary = questionArr[i]
  //       .map(item => (item === this.questions![i].label ? '1' : '0'))
  //       .join('');
  //     totalBinary += dummyBinary;
  //   }
  //   return totalBinary;
  // }

  // animalToBinary(isPrefer: boolean) {
  //   return ANIMALS.map(item =>
  //     (isPrefer ? this.preferAnimal : this.myAnimal)?.includes(item)
  //       ? '1'
  //       : '0',
  //   ).join('');
  //   // 완
  // }
  // mbtiToBinary(isPrefer: boolean) {
  //   return mbtiString
  //     .split('')
  //     .map(char =>
  //       (isPrefer ? this.preferMbti : this.myMbti)?.includes(char) ? '1' : '0',
  //     )
  //     .join('');
  // }

  // departmentToBinary() {
  //   return DEPARTMENTS.map(item =>
  //     this.major?.includes(item.name) ? '1' : '0',
  //   ).join('');
  //   // 완
  // }

  // studentTypeToBinary() {
  //   return studentTypeArr
  //     .map(item => (this.studentType?.includes(item) ? '1' : '0'))
  //     .join('');
  //   // 완
  // }

  // smokingToBinary() {
  //   return smokingArr.map(item => (this.smoking === item ? '1' : '0')).join('');
  //   // 완
  // }

  // preferDayToBinary() {
  //   return preferDayArr
  //     .map(item => (this.preferDay?.includes(item) ? '1' : '0'))
  //     .join('');
  //   // 완
  // }

  // preferAtmosphereToBinary() {
  //   return preferAtmosphereArr
  //     .map(item => (this.atmosphere === item ? '1' : '0'))
  //     .join('');
  //   // 완
  // }

  // interestToBinary() {
  //   return INTERESTS.map(item =>
  //     this.interests?.includes(item) ? '1' : '0',
  //   ).join('');
  //   // 완
  // }

  // 바이너리 -> 정보
  /** 1대1 info - 동물상, mbti, 관심사, question */
  binaryToInterest(binary: string) {
    const arr = binary.split('');
    const result: Array<string> = [];
    INTERESTS.map((item, i) => (arr[i] === '1' ? result.push(item) : null));
    return result;
  }

  binaryToPersonalQuestion(
    binary1: string,
    binary2: string,
    binary3: string,
    binary4: string,
  ) {
    const newBinary = [binary1, binary2, binary3, binary4];
    const result: Array<{ label: string; order: number }> = [];
    PERSONAL_QUESTIONS.map((item, j) =>
      item.map((item, i) =>
        newBinary[j][i] === '1'
          ? result.push({
              label: item,
              order: i,
            })
          : null,
      ),
    );
    return result;
  }

  /** 1대1 prefer */
  binaryToPreferHeight(binary1: string, binary2: string) {
    const firstHeight = binary1 === '150' ? '~' + binary1 : binary1;
    const secondHeight = binary2 === '190' ? binary2 + '~' : binary2;
    const result: Array<string> = [firstHeight, secondHeight];
    return result;
  }
  binaryToPreferMbti(binary: string) {
    const result: Array<string> = [];
    MBTI_QUESTIONS.map((data, i) =>
      data.type.forEach((data, j) =>
        binary[i * 2 + j] === '1' ? result.push(data) : null,
      ),
    );
    return result;
  }
  binaryToPreferAnimal(binary: string) {
    const result: Array<string> = [];
    ANIMALS.map((item, i) => (binary[i] === '1' ? result.push(item) : null));
    return result;
  }

  //

  binaryToPreferAge(binary1: string, binary2: string) {
    const result: Array<string> = [];
    AGE_SLIDER_ARR.map((item, i) =>
      binary1[i] === '1' ? result.push(item) : null,
    );
    AGE_SLIDER_ARR.map((item, i) =>
      binary2[i] === '1' ? result.push(item) : null,
    );
    if (result[1] === '30') result[0] = '30~';
    return result;
  }
  binaryToSmoking(binary: string) {
    const arrNum = binary.split('').indexOf('1');
    return smokingArr[arrNum];
  }
  binaryToDepartment(binary: string) {
    const arr = binary.split('');
    const result: Array<string> = [];
    DEPARTMENTS.map((item, i) =>
      arr[i] === '1' ? result.push(item.name) : null,
    );
    return result;
  }
  binaryToStudentType(binary: string) {
    const arr = binary.split('');
    const result: Array<string> = [];
    studentTypeArr.map((item, i) =>
      arr[i] === '1' ? result.push(item) : null,
    );
    return result;
  }

  /** 3대3 */
  binaryToDay(binary: string) {
    const arr = binary.split('');
    const result: Array<string> = [];
    preferDayArr.map((item, i) => (arr[i] === '1' ? result.push(item) : null));
    return result;
  }
  binaryToGroupQuestion(
    binary1: string,
    binary2: string,
    binary3: string,
    binary4: string,
  ) {
    const newBinary = [binary1, binary2, binary3, binary4];
    const result: Array<{ label: string; order: number }> = [];
    GROUP_QUESTIONS.map((item, j) =>
      item.map((item, i) =>
        newBinary[j][i] === '1'
          ? result.push({
              label: item,
              order: i,
            })
          : null,
      ),
    );
    return result;
  }

  //

  binaryToPreferAtmosphere(binary: string) {
    const arrNum = binary.split('').indexOf('1');
    return preferAtmosphereArr[arrNum];
  }

  /** binary를 배열로 분리 */
  binaryToSaperatedArray(
    binary: string,
    isGroup: boolean,
    type: 'InfoDistance' | 'InfoFilter' | 'PreferDistance' | 'PreferFilter',
  ) {
    switch (type) {
      case 'InfoDistance':
        if (isGroup)
          return [
            binary.slice(0, 7),
            binary.slice(7, 9),
            binary.slice(9, 11),
            binary.slice(11, 14),
            binary.slice(14, 17),
          ];
        return [
          binary.slice(0, 3),
          binary.slice(3, 5),
          binary.slice(5, 7),
          binary.slice(7, 9),
          binary.slice(9, 11),
          binary.slice(11, 19),
          binary.slice(19, 28),
          binary.slice(28, 38),
        ];
      case 'InfoFilter':
        if (isGroup)
          return [
            binary.slice(0, 16),
            binary.slice(16, 32),
            binary.slice(32, 71),
            binary.slice(71, 74),
          ];
        return [
          binary.slice(0, 17),
          binary.slice(16, 18),
          binary.slice(18, 57),
          binary.slice(57, 60),
        ];
      case 'PreferDistance':
        if (isGroup) return [];
        return [
          binary.slice(0, 3),
          binary.slice(3, 6),
          binary.slice(6, 14),
          binary.slice(14, 23),
        ];
      case 'PreferFilter':
        if (isGroup) return [];
        return [
          binary.slice(0, 16),
          binary.slice(16, 32),
          binary.slice(32, 35),
          binary.slice(35, 74),
          binary.slice(74, 77),
        ];
    }
  }

  binaryToInfoDataArr(type: 'personal' | 'group') {
    if (type === 'personal')
      return [
        // {
        //   title_kr: '닉네임',
        //   title_en: 'nickname',
        //   type: 'info',
        //   data: 'ㄷㅈㅅㅎ',
        // },
        // {
        //   title_kr: '성별',
        //   title_en: 'gender',
        //   type: 'info',
        //   data: '여자',
        // },
        // {
        //   title_kr: '나이',
        //   title_en: 'age',
        //   type: 'info',
        //   data: 22,
        // },
        // {
        //   title_kr: '키',
        //   title_en: 'height',
        //   type: 'info',
        //   data: 143,
        // },
        // {
        //   title_kr: '카카오톡 ID',
        //   title_en: 'kakaoId',
        //   type: 'info',
        //   data: 'ㅂㄱㄹㄷ',
        // },
        // {
        //   title_kr: '학과',
        //   title_en: 'major',
        //   type: 'info',
        //   data: '행정학과',
        // },
        // {
        //   title_kr: '신분',
        //   title_en: 'studentType',
        //   type: 'info',
        //   data: '학부생',
        // },
        // {
        //   title_kr: '흡연 여부',
        //   title_en: 'smoking',
        //   type: 'info',
        //   data: '',
        // },
        {
          title_kr: '동물상',
          title_en: 'animal',
          type: 'info',
          data: this.binaryToPreferAnimal(
            this.binaryToSaperatedArray(
              this.informationDistance!,
              false,
              'InfoDistance',
            )[6],
          ),
        },
        {
          title_kr: 'MBTI',
          title_en: 'mbti',
          type: 'info',
          data: this.binaryToPreferMbti(
            this.binaryToSaperatedArray(
              this.informationDistance!,
              false,
              'InfoDistance',
            )[5],
          ),
        },
        {
          title_kr: '관심사',
          title_en: 'interests',
          type: 'info',
          data: this.binaryToInterest(
            this.binaryToSaperatedArray(
              this.informationDistance!,
              false,
              'InfoDistance',
            )[7],
          ),
        },
        {
          title_kr: 'Q&A',
          title_en: 'question',
          type: 'info',
          data: this.binaryToPersonalQuestion(
            this.binaryToSaperatedArray(
              this.informationDistance!,
              false,
              'InfoDistance',
            )[1],
            this.binaryToSaperatedArray(
              this.informationDistance!,
              false,
              'InfoDistance',
            )[2],
            this.binaryToSaperatedArray(
              this.informationDistance!,
              false,
              'InfoDistance',
            )[3],
            this.binaryToSaperatedArray(
              this.informationDistance!,
              false,
              'InfoDistance',
            )[4],
          ),
        },
      ];
    else
      return [
        // {
        //   title_kr: '닉네임',
        //   title_en: 'nickname',
        //   type: 'info',
        //   data: 'ㅂㄹㅈㄷㄱ',
        // },
        // {
        //   title_kr: '성별',
        //   title_en: 'gender',
        //   type: 'info',
        //   data: '남자',
        // },
        // {
        //   title_kr: '나이',
        //   title_en: 'age',
        //   type: 'info',
        //   data: 22,
        // },
        // {
        //   title_kr: '키',
        //   title_en: 'height',
        //   type: 'info',
        //   data: 143,
        // },
        // {
        //   title_kr: '카카오톡 ID',
        //   title_en: 'kakaoId',
        //   type: 'info',
        //   data: '1234ㄱㄹ',
        // },
        // {
        //   title_kr: '학과',
        //   title_en: 'major',
        //   type: 'info',
        //   data: '행정학과',
        // },
        // {
        //   title_kr: '신분',
        //   title_en: 'studentType',
        //   type: 'info',
        //   data: '학부생',
        // },
        // {
        //   title_kr: '흡연 여부',
        //   title_en: 'smoking',
        //   type: 'info',
        //   data: '흡연',
        // },
        // {
        //   title_kr: '팅 이름',
        //   title_en: 'name',
        //   type: 'info',
        //   data: '1234',
        // },
        {
          title_kr: '선호요일',
          title_en: 'preferDay',
          type: 'info',
          data: this.binaryToDay(
            this.binaryToSaperatedArray(
              this.informationDistance!,
              true,
              'InfoDistance',
            )[0],
          ),
        },
        {
          title_kr: 'Q&A',
          title_en: 'question',
          type: 'info',
          data: this.binaryToGroupQuestion(
            this.binaryToSaperatedArray(
              this.informationDistance!,
              true,
              'InfoDistance',
            )[1],
            this.binaryToSaperatedArray(
              this.informationDistance!,
              true,
              'InfoDistance',
            )[2],
            this.binaryToSaperatedArray(
              this.informationDistance!,
              true,
              'InfoDistance',
            )[3],
            this.binaryToSaperatedArray(
              this.informationDistance!,
              true,
              'InfoDistance',
            )[4],
          ),
        },
      ];
  }

  binaryToPerferDataArr(type: 'personal' | 'group') {
    if (type === 'personal')
      return [
        {
          title_kr: '나이',
          title_en: 'age',
          type: 'prefer',
          data: this.binaryToPreferAge(
            this.binaryToSaperatedArray(
              this.preferenceFilter!,
              false,
              'PreferFilter',
            )[0],
            this.binaryToSaperatedArray(
              this.preferenceFilter!,
              false,
              'PreferFilter',
            )[1],
          ),
        },
        {
          title_kr: '키',
          title_en: 'height',
          type: 'prefer',
          data: this.binaryToPreferHeight(
            this.binaryToSaperatedArray(
              this.preferenceDistance!,
              false,
              'PreferDistance',
            )[0],
            this.binaryToSaperatedArray(
              this.preferenceDistance!,
              false,
              'PreferDistance',
            )[1],
          ),
        },
        {
          title_kr: '신분',
          title_en: 'studentType',
          type: 'prefer',
          data: this.binaryToStudentType(
            this.binaryToSaperatedArray(
              this.preferenceFilter!,
              false,
              'PreferFilter',
            )[4],
          ),
        },
        {
          title_kr: '기피학과',
          title_en: 'major',
          type: 'prefer',
          data: this.binaryToDepartment(
            this.binaryToSaperatedArray(
              this.preferenceFilter!,
              false,
              'PreferFilter',
            )[3],
          ),
        },
        {
          title_kr: '흡연 여부',
          title_en: 'smoking',
          type: 'prefer',
          data: this.binaryToSmoking(
            this.binaryToSaperatedArray(
              this.preferenceFilter!,
              false,
              'PreferFilter',
            )[2],
          ),
        },
        {
          title_kr: '동물상',
          title_en: 'animal',
          type: 'prefer',
          data: this.binaryToPreferAnimal(
            this.binaryToSaperatedArray(
              this.preferenceDistance!,
              false,
              'PreferDistance',
            )[3],
          ),
        },
        {
          title_kr: 'MBTI',
          title_en: 'mbti',
          type: 'prefer',
          data: this.binaryToPreferMbti(
            this.binaryToSaperatedArray(
              this.preferenceDistance!,
              false,
              'PreferDistance',
            )[2],
          ),
        },
      ];
    else {
      return [
        {
          title_kr: '나이',
          title_en: 'age',
          type: 'prefer',
          data: this.binaryToPreferAge(
            this.binaryToSaperatedArray(
              this.informationFilter!,
              true,
              'InfoFilter',
            )[0],
            this.binaryToSaperatedArray(
              this.informationFilter!,
              true,
              'InfoFilter',
            )[1],
          ),
        },
        {
          title_kr: '기피학과',
          title_en: 'major',
          type: 'prefer',
          data: this.binaryToDepartment(
            this.binaryToSaperatedArray(
              this.informationFilter!,
              true,
              'InfoFilter',
            )[2],
          ),
        },
        {
          title_kr: '분위기',
          title_en: 'atmosphere',
          type: 'prefer',
          data: this.binaryToPreferAtmosphere(
            this.binaryToSaperatedArray(
              this.informationFilter!,
              true,
              'InfoFilter',
            )[3],
          ),
        },
      ];
    }
  }

  // 해야하는 것들
  // mbtiToBinary
  // qeustionToBinary
}
