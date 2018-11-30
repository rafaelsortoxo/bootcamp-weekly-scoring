function formatDate(originalDate) {
  if (originalDate) {
    var date = new Date(originalDate || '');
    var dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];
    return dateString;
  }
  return '';
}

export { formatDate };
