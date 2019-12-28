export interface IClient {
    id?: string;
    name: string;
    lastName: string;
    age: number;
    date: string;
}

export class Config {
    minDate: string;
    maxDate: string;
}
// tslint:disable-next-line: no-namespace
export namespace Api {
    // interface Range [
    //     ONE: '1_10',
    //     ELEVEN: '11_20';
    //     TWENTY: '21_30';
    //     THIRTY: '31_40';
    //     FORTY: '41_50';
    //     FIFTY: '51_60';
    //     SIXTY: '61_70';
    //     SEVENTY: '71_80';
    //     EIGHTY: '81_90';
    //     NINETY: '91_99';
    // ]

    interface DeathProbability {
        range_0_10: 3.23;
        range_11_20: 0.65;
        range_21_30: 1.21;
        range_31_40: 1.84;
        range_41_50: 4.31;
        range_51_60: 9.69;
        range_61_70: 18.21;
        range_71_80: 27.28;
        range_81_more: 33.58;

    }

    interface averageLifeHope {
        range_0_10: 80;
        range_11_20: 80;
        range_21_30: 80;
        range_31_40: 80;
        range_41_50: 80;
        range_51_60: 80;
        range_61_70: 84;
        range_71_80: 88;
        range_81_more: 95;
    }



}