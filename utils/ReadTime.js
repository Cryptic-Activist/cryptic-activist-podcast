class ReadTime {
  getReadTime(content) {
    // Estimate the time read the content
    this.wordsPerMinutes = 200;
    let timeToRead;
    const textLength = content.split(' ').length;
    if (textLength > 0) {
      const value = Math.ceil(textLength / this.wordsPerMinutes);
      timeToRead = `${value} min read`;
    }
    return timeToRead;
  }
}

export default ReadTime;
