export function changeIconWeather(icon){
  const format = {
    "bkn_-ra_d":'/icons/bkn_-ra_d.svg',
    "bkn_-ra_n":'/icons/bkn_-ra_n.svg',
    "bkn_-sn_d":'/icons/bkn_-sn_d.svg',
    "bkn_-sn_n":'/icons/bkn_-sn_n.svg',
    "bkn_+ra_d":'/icons/bkn_+ra_d.svg',
    "bkn_+ra_n":'/icons/bkn_+ra_n.svg',
    "bkn_+sn_d":'/icons/bkn_+sn_d.svg',
    "bkn_+sn_n":'/icons/bkn_+sn_n.svg',

    "bkn_d":'/icons/bkn_d.svg',
    "bkn_n":'/icons/bkn_n.svg',
    "bkn_ra_d":'/icons/bkn_ra_d.svg',
    "bkn_ra_n":'/icons/bkn_ra_n.svg',
    "bkn_sn_d":'/icons/bkn_sn_d.svg',
    "bkn_sn_n":'/icons/bkn_sn_n.svg',
    "ovc_-ra":'/icons/ovc_-ra.svg',
    "ovc_-sn":'/icons/ovc_-sn.svg',
    "ovc_+ra":'/icons/ovc_+ra.svg',
    "ovc_+sn":'/icons/ovc_+sn.svg',

    "ovc_ra_sn":'/icons/ovc_ra_sn.svg',
    "ovc_ra":'/icons/ovc_ra.svg',
    "ovc_sn":'/icons/ovc_sn.svg',
    "ovc_ts_ra":'/icons/ovc_ts_ra.svg',
    "skc_d":'/icons/skc_d.svg',
    "skc_n":'/icons/skc_n.svg',
    "wnd":'/icons/wnd.svg',
    "ovc":'/icons/ovc.svg'
  }

  return document.getElementById('weatherIcons').src = format[icon];

}