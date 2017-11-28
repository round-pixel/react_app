import moment from 'moment';

function dateToString(date) {
  return moment(date).format('MMMM Do');
}

export default dateToString;
