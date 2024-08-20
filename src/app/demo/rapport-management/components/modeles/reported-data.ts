export  interface ReportedDataVol {
    id: number;
    time: Date;
    imsi: string;
    msisdn: string;
    reported_data_vol_dl: number;
    reported_data_vol_ul: number;
    granted_data_vol_total: number;}