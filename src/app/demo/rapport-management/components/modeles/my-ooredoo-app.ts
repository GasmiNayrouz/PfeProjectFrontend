export interface MyOoredooApp {
    id?: number;
    time:Date;
    application_name: string;
    msisdn: string;
    imsi: string;
    cell: string;
    radio_acess: string;
    data_vol_total: number;
    tcp_conn_establ_ul_sr: number;
    tcp_initial_radio_rtt_avg: number;
    data_throughput: number;
}
