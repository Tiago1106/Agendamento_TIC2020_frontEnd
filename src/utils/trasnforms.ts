export function numberMonth(month: string): string {
  let value = '';
  switch (month) {
    case 'Jan':
      value = '01';
      break;
    case 'Feb':
      value = '02';
      break;
    case 'Mar':
      value = '03';
      break;
    case 'Apr':
      value = '04';
      break;
    case 'May':
      value = '05';
      break;
    case 'Jun':
      value = '06';
      break;
    case 'Jul':
      value = '07';
      break;
    case 'Aug':
      value = '08';
      break;
    case 'Sep':
      value = '09';
      break;
    case 'Oct':
      value = '10';
      break;
    case 'Nov':
      value = '11';
      break;
    case 'Dec':
      value = '12';
      break;
    default:
      value = '00';
  }
  return value;
}

export function dateMask(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2');
}

export function hourMask(value: string): string {
  return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1:$2');
}
