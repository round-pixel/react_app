import moment from 'moment';

function dateToString(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss');
}

export default dateToString;
